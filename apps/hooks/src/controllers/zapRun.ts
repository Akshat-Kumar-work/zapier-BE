import { Request, Response } from 'express';
import db from '@repo/db';
import ResponseBuilder from '@repo/be_common/dist';

export const createZapRun = async (req: Request, res: Response) => {
  const {zapId,metaData} = req.body;
  try {    
    const zaprun = await db.$transaction(async(tx:any)=>{
        const  zapRun = await tx.zapRun.create({
          data:{
            zapId:zapId,
            metaData:metaData
          }
        });

        await tx.zapRunOutbox.create({
          data:{
            zapRunId:zapRun.id
          }
        });
     });

    return res.status(201).json(ResponseBuilder.success(zaprun, 'ZapRun created'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to create ZapRun'));
  }
};

export const getZapRuns = async (_: Request, res: Response) => {
  try {
    const zapRuns = await db.zapRun.findMany();
    return res.json(ResponseBuilder.success(zapRuns));
  } catch {
    return res.status(500).json(ResponseBuilder.error('Failed to fetch ZapRuns'));
  }
};

export const getZapRunById = async (req: Request, res: Response) => {
  try {
    const zapRun = await db.zapRun.findUnique({ where: { id: req.params.id } });
    return zapRun
      ? res.json(ResponseBuilder.success(zapRun))
      : res.status(404).json(ResponseBuilder.error('ZapRun not found'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to fetch ZapRun'));
  }
};

export const updateZapRun = async (req: Request, res: Response) => {
  try {
    const zapRun = await db.zapRun.update({
      where: { id: req.params.id },
      data: req.body,
    });
    return res.json(ResponseBuilder.success(zapRun, 'ZapRun updated'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to update ZapRun'));
  }
};

export const deleteZapRun = async (req: Request, res: Response) => {
  try {
    await db.zapRun.delete({ where: { id: req.params.id } });
    return res.json(ResponseBuilder.success(null, 'ZapRun deleted'));
  } catch {
    return res.status(400).json(ResponseBuilder.error('Failed to delete ZapRun'));
  }
};
