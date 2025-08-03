import express from 'express';
import {
processPendingZapRuns
} from '../controllers/ZapRunOutbox';

const router = express.Router();

router.post('/process-pending-zap_run-outbox', processPendingZapRuns);


export default router;
