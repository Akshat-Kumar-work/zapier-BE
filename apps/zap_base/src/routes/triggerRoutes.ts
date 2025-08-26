import express from 'express';
import {
  createTrigger,
  getTriggerById,
  getTriggers,
  updateTrigger,
  deleteTrigger
} from '../controllers/trigger';

const router = express.Router();
import { authenticateToken } from '@repo/be_common';

router.post('/',authenticateToken, createTrigger);
router.get('/',authenticateToken, getTriggers);
router.get('/:id',authenticateToken, getTriggerById);
router.put('/:id',authenticateToken, updateTrigger);
router.delete('/:id',authenticateToken, deleteTrigger);

export default router;
