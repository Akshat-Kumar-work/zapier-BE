import express from 'express';
import {
  createAvailableAction,
  getAvailableActionById,
  getAvailableActions,
  updateAvailableAction,
  deleteAvailableAction
} from '../controllers/availableAction';

const router = express.Router();

router.post('/', createAvailableAction);
router.get('/', getAvailableActions);
router.get('/:id', getAvailableActionById);
router.put('/:id', updateAvailableAction);
router.delete('/:id',deleteAvailableAction);

export default router;
