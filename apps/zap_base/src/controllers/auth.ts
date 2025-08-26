import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import db from '@repo/db';
import ResponseBuilder from '@repo/be_common';
import { generateAccessToken } from '@repo/be_common';

export const signup = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json(ResponseBuilder.error('Email already registered'));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const accessToken = generateAccessToken({
      sub: String(user.id),
      email: user.email,
    });

    return res
      .status(201)
      .json(
        ResponseBuilder.success(
          { user, accessToken },
          'User registered successfully'
        )
      );
  } catch (err) {
    return res
      .status(500)
      .json(ResponseBuilder.error('Failed to register user'));
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json(ResponseBuilder.error('Invalid email or password'));
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json(ResponseBuilder.error('Invalid email or password'));
    }

    const accessToken = generateAccessToken({
      sub: String(user.id),
      email: user.email,
    });

    return res.json(
      ResponseBuilder.success(
        { user, accessToken },
        'Login successful'
      )
    );
  } catch {
    return res
      .status(500)
      .json(ResponseBuilder.error('Failed to login'));
  }
};
