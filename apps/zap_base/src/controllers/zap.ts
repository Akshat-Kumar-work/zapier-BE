import { Request, Response } from 'express';
import db from '@repo/db';
import ResponseBuilder from '@repo/be_common/dist';

export const createZap = async (req: Request, res: Response) => {
  try {
    const zap = await db.zap.create({ data: req.body });
    return res.status(201).json(ResponseBuilder.success(zap, 'Zap created'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to create zap'));
  }
};

export const getZaps = async (_: Request, res: Response) => {
  try {
    const zaps = await db.zap.findMany();
    return res.json(ResponseBuilder.success(zaps));
  } catch {
    return res.status(500).json(ResponseBuilder.error('Failed to fetch zaps'));
  }
};

export const getZapById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const zap = await db.zap.findUnique({ where: { id } });
    return zap
      ? res.json(ResponseBuilder.success(zap))
      : res.status(404).json(ResponseBuilder.error('Zap not found'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to fetch zap'));
  }
};

export const updateZap = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const zap = await db.zap.update({ where: { id }, data: req.body });
    return res.json(ResponseBuilder.success(zap, 'Zap updated'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to update zap'));
  }
};

export const deleteZap = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await db.zap.delete({ where: { id } });
    return res.json(ResponseBuilder.success(null, 'Zap deleted'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to delete zap'));
  }
};
