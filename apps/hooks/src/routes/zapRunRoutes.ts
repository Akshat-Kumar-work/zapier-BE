import express from 'express';
import {
  createZapRun,
  getZapRuns,
  getZapRunById,
  updateZapRun,
  deleteZapRun
} from '../controllers/zapRun';

const router = express.Router();

router.post('/', createZapRun);
router.get('/', getZapRuns);
router.get('/:id', getZapRunById);
router.put('/:id', updateZapRun);
router.delete('/:id', deleteZapRun);

export default router;
