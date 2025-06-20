import express from 'express';
import {
  createAvailableTrigger,
  getAvailableTriggerById,
  getAvailableTriggers,
  updateAvailableTrigger,
  deleteAvailableTrigger
} from '../controllers/availableTrigger';

const router = express.Router();

router.post('/', createAvailableTrigger);
router.get('/', getAvailableTriggers);
router.get('/:id', getAvailableTriggerById);
router.put('/:id', updateAvailableTrigger);
router.delete('/:id',deleteAvailableTrigger);

export default router;
