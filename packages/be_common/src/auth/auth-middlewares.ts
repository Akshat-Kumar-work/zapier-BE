import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ResponseBuilder from "../response";
const secretKey = process.env.JWT_SECRET || "secretkey";
const refreshKeySecret = process.env.JWT_REFRESH_SECRET || "refreshSecret";

interface JwtPayload {
  sub: string;
  email: string;
  iat?: number;
  exp?: number;
}

// Extend the Request interface to include the user property
declare module "express-serve-static-core" {
  interface Request {
    user?: any;
  }
}

export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Access token is missing" });
    }

    const payload = jwt.verify(token, secretKey) as JwtPayload;

    req.user = payload;

    next();
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json(ResponseBuilder.error("token expired"));
      } else if (error.name === "JsonWebTokenError") {
        return res.status(401).json(ResponseBuilder.error("jwt error"));
      }
    }
    return res
      .status(500)
      .json(
        ResponseBuilder.error("something went wrong, internal server error")
      );
  }
}
