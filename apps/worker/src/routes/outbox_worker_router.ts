import express from "express";
import {process_kafka_outbox_zap_run} from "../controllers/outbox_worker"


const router = express.Router();



router.post("/process_kafka_outbox_query",process_kafka_outbox_zap_run);


export default router;