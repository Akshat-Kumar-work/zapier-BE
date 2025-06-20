import { Request, Response } from 'express';
import db from '@repo/db';
import ResponseBuilder from '@repo/be_common';

export const createAction = async (req: Request, res: Response) => {
  try {
    const action = await db.action.create({ data: req.body });
    return res.status(201).json(ResponseBuilder.success(action, 'Action created'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to create Action'));
  }
};

export const getActions = async (_: Request, res: Response) => {
  try {
    const actions = await db.action.findMany();
    return res.json(ResponseBuilder.success(actions));
  } catch {
    return res.status(500).json(ResponseBuilder.error('Failed to fetch Actions'));
  }
};

export const getActionById = async (req: Request, res: Response) => {
  try {
    const action = await db.action.findUnique({ where: { id: req.params.id } });
    return action
      ? res.json(ResponseBuilder.success(action))
      : res.status(404).json(ResponseBuilder.error('Action not found'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to fetch Action'));
  }
};

export const updateAction = async (req: Request, res: Response) => {
  try {
    const action = await db.action.update({
      where: { id: req.params.id },
      data: req.body,
    });
    return res.json(ResponseBuilder.success(action, 'Action updated'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to update Action'));
  }
};

export const deleteAction = async (req: Request, res: Response) => {
  try {
    await db.action.delete({ where: { id: req.params.id } });
    return res.json(ResponseBuilder.success(null, 'Action deleted'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to delete Action'));
  }
};
