import express from 'express';
import {
  createZapRun,
  getZapRuns,
  getZapRunById,
  updateZapRun,
  deleteZapRun
} from '../controllers/zapRun';

const router = express.Router();

router.post('/hooks/', createZapRun);
router.get('/hooks/', getZapRuns);
router.get('/hooks/:id', getZapRunById);
router.put('/hooks/:id', updateZapRun);
router.delete('/hooks/:id', deleteZapRun);

export default router;
