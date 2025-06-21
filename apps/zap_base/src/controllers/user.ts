import { Request, Response } from 'express';
import db from '@repo/db';
import ResponseBuilder from '@repo/be_common';

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await db.user.create({ data: { name, email, password } });
    return res.status(201).json(ResponseBuilder.success(user, 'User created successfully'));
  } catch (err) {
    return res.status(400).json(ResponseBuilder.error('Failed to create user'));
  }
};

export const getUsers = async (_: Request, res: Response) => {
  try {
    const users = await db.user.findMany();
    return res.json(ResponseBuilder.success(users));
  } catch {
    return res.status(500).json(ResponseBuilder.error('Failed to fetch users'));
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json(ResponseBuilder.error('Invalid ID'));

  try {
    const user = await db.user.findUnique({ where: { id } });
    if (!user) return res.status(404).json(ResponseBuilder.error('User not found'));
    return res.json(ResponseBuilder.success(user));
  } catch {
    return res.status(500).json(ResponseBuilder.error('Failed to fetch user'));
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { name, email, password } = req.body;
  if (isNaN(id)) return res.status(400).json(ResponseBuilder.error('Invalid ID'));

  try {
    const user = await db.user.update({
      where: { id },
      data: { name, email, password },
    });
    return res.json(ResponseBuilder.success(user, 'User updated successfully'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to update user'));
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json(ResponseBuilder.error('Invalid ID'));

  try {
    await db.user.delete({ where: { id } });
    return res.status(200).json(ResponseBuilder.success(null, 'User deleted successfully'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to delete user'));
  }
};
