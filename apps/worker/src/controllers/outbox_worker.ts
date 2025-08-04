import { Request, Response } from "express";
import db from "@repo/db";
import ResponseBuilder from "@repo/be_common";
import { kafka, sendEvent, Topics } from "@repo/kafka";
import kafka_consumer from "../common/kafka_consumer";

export async function process_kafka_outbox_query(req:Request,res:Response) {
    try{
        kafka_consumer();

    }catch(err){

    }
}