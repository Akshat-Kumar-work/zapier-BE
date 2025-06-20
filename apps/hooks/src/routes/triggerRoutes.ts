import express from 'express';
import {
  createTrigger,
  getTriggerById,
  getTriggers,
  updateTrigger,
  deleteTrigger
} from '../controllers/trigger';

const router = express.Router();

router.post('/', createTrigger);
router.get('/', getTriggers);
router.get('/:id', getTriggerById);
router.put('/:id', updateTrigger);
router.delete('/:id',deleteTrigger);

export default router;
