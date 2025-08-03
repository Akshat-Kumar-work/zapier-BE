import { Request, Response } from 'express';
import db from '@repo/db';
import ResponseBuilder from '@repo/be_common';
import {kafka,sendEvent,Topics} from "@repo/kafka";


export const processPendingZapRuns = async (req:Request,res:Response)=>{
    try{

        while(1){
            
        const pendingZaps = await db.zapRunOutbox.findMany(
            {
                where:{},
                take:10
            }
        );

        pendingZaps.forEach(zap=>{
            sendEvent(Topics.ZAP_EVENTS,JSON.stringify(zap.id))
        })

        }

    }catch(error){
    return res.status(400).json(ResponseBuilder.error('Failed to get & process pending ZapRun outbox'));
    }
}
