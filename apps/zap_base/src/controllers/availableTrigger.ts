import { Request, Response } from 'express';
import db from '@repo/db';
import ResponseBuilder from '@repo/be_common/dist';

export const createAvailableTrigger = async (req: Request, res: Response) => {
  try {
    const trigger = await db.availableTrigger.create({ data: req.body });
    return res.status(201).json(ResponseBuilder.success(trigger, 'AvailableTrigger created'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to create AvailableTrigger'));
  }
};

export const getAvailableTriggers = async (_: Request, res: Response) => {
  try {
    const triggers = await db.availableTrigger.findMany();
    return res.json(ResponseBuilder.success(triggers));
  } catch {
    return res.status(500).json(ResponseBuilder.error('Failed to fetch AvailableTriggers'));
  }
};

export const getAvailableTriggerById = async (req: Request, res: Response) => {
  try {
    const trigger = await db.availableTrigger.findUnique({ where: { id: req.params.id } });
    return trigger
      ? res.json(ResponseBuilder.success(trigger))
      : res.status(404).json(ResponseBuilder.error('AvailableTrigger not found'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to fetch AvailableTrigger'));
  }
};

export const updateAvailableTrigger = async (req: Request, res: Response) => {
  try {
    const trigger = await db.availableTrigger.update({
      where: { id: req.params.id },
      data: req.body,
    });
    return res.json(ResponseBuilder.success(trigger, 'AvailableTrigger updated'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to update AvailableTrigger'));
  }
};

export const deleteAvailableTrigger = async (req: Request, res: Response) => {
  try {
    await db.availableTrigger.delete({ where: { id: req.params.id } });
    return res.json(ResponseBuilder.success(null, 'AvailableTrigger deleted'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to delete AvailableTrigger'));
  }
};
