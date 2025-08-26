import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

const secretKey = process.env.JWT_SECRET || "secretkey";
const refreshKeySecret = process.env.JWT_REFRESH_SECRET || "refreshSecret";
const tokenExpiry = "30d";
const refreshTokenExpiry = "60d";

export function generateAccessToken(payload: object) {
  return jwt.sign(payload, secretKey, { expiresIn: tokenExpiry });
}

export function generateRefreshToken(payload: object) {
  return jwt.sign(payload, refreshKeySecret, {
    expiresIn: refreshTokenExpiry,
  });
}

export function verifyAccessToken(token: string) {
  return jwt.verify(token, secretKey);
}

export function verifyRefreshToken(token: string) {
  return jwt.verify(token, refreshKeySecret);
}
