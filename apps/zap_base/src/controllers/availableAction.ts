import { Request, Response } from 'express';
import db from '@repo/db';
import ResponseBuilder from '@repo/be_common/dist';

export const createAvailableAction = async (req: Request, res: Response) => {
  try {
    const action = await db.availableAction.create({ data: req.body });
    return res.status(201).json(ResponseBuilder.success(action, 'AvailableAction created'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to create AvailableAction'));
  }
};

export const getAvailableActions = async (_: Request, res: Response) => {
  try {
    const actions = await db.availableAction.findMany();
    return res.json(ResponseBuilder.success(actions));
  } catch {
    return res.status(500).json(ResponseBuilder.error('Failed to fetch AvailableActions'));
  }
};

export const getAvailableActionById = async (req: Request, res: Response) => {
  try {
    const action = await db.availableAction.findUnique({ where: { id: req.params.id } });
    return action
      ? res.json(ResponseBuilder.success(action))
      : res.status(404).json(ResponseBuilder.error('AvailableAction not found'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to fetch AvailableAction'));
  }
};

export const updateAvailableAction = async (req: Request, res: Response) => {
  try {
    const action = await db.availableAction.update({
      where: { id: req.params.id },
      data: req.body,
    });
    return res.json(ResponseBuilder.success(action, 'AvailableAction updated'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to update AvailableAction'));
  }
};

export const deleteAvailableAction = async (req: Request, res: Response) => {
  try {
    await db.availableAction.delete({ where: { id: req.params.id } });
    return res.json(ResponseBuilder.success(null, 'AvailableAction deleted'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to delete AvailableAction'));
  }
};
