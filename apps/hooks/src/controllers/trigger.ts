import { Request, Response } from 'express';
import db from '@repo/db';
import ResponseBuilder from '@repo/be_common';

export const createTrigger = async (req: Request, res: Response) => {
  try {
    const trigger = await db.trigger.create({ data: req.body });
    return res.status(201).json(ResponseBuilder.success(trigger, 'Trigger created'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to create Trigger'));
  }
};

export const getTriggers = async (_: Request, res: Response) => {
  try {
    const triggers = await db.trigger.findMany();
    return res.json(ResponseBuilder.success(triggers));
  } catch {
    return res.status(500).json(ResponseBuilder.error('Failed to fetch Triggers'));
  }
};

export const getTriggerById = async (req: Request, res: Response) => {
  try {
    const trigger = await db.trigger.findUnique({ where: { id: req.params.id } });
    return trigger
      ? res.json(ResponseBuilder.success(trigger))
      : res.status(404).json(ResponseBuilder.error('Trigger not found'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to fetch Trigger'));
  }
};

export const updateTrigger = async (req: Request, res: Response) => {
  try {
    const trigger = await db.trigger.update({
      where: { id: req.params.id },
      data: req.body,
    });
    return res.json(ResponseBuilder.success(trigger, 'Trigger updated'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to update Trigger'));
  }
};

export const deleteTrigger = async (req: Request, res: Response) => {
  try {
    await db.trigger.delete({ where: { id: req.params.id } });
    return res.json(ResponseBuilder.success(null, 'Trigger deleted'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to delete Trigger'));
  }
};
