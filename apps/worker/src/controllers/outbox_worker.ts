import { Request, Response } from "express";
import db from "@repo/db";
import ResponseBuilder from "@repo/be_common/dist";
import { kafka, sendEvent, Topics } from "@repo/kafka";
import kafka_consumer from "../common/kafka_consumer";

export async function process_kafka_outbox_zap_run(req:Request,res:Response) {
    try{
        kafka_consumer("outbox-worker",async()=>{console.log("ok")});

        //pass a callback function into kafka consumer 
        // get zaprun id
        // by zaprun will fetch zap
        // by zap will fetch actions selected
        // then run that actions

        // after consuming i think we need to fetch the zaprunid and by that 
        // will fetchh zap and its actions
        // then proceed further with that actions

    }catch(err){

    }
}