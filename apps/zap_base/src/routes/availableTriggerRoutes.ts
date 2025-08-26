import express from 'express';
import {
  createAvailableTrigger,
  getAvailableTriggerById,
  getAvailableTriggers,
  updateAvailableTrigger,
  deleteAvailableTrigger
} from '../controllers/availableTrigger';
import { authenticateToken } from '@repo/be_common';

const router = express.Router();

router.post('/',authenticateToken, createAvailableTrigger);
router.get('/',authenticateToken, getAvailableTriggers);
router.get('/:id',authenticateToken, getAvailableTriggerById);
router.put('/:id',authenticateToken, updateAvailableTrigger);
router.delete('/:id',authenticateToken, deleteAvailableTrigger);

export default router;
