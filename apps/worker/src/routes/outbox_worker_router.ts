import express from "express";
import {process_kafka_outbox_query} from "../controllers/outbox_worker"


const router = express.Router();



router.post("/process_kafka_outbox_query",process_kafka_outbox_query);


export default router;