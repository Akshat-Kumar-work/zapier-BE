import express from 'express';
import {
  createAction,
  getActions,
  getActionById,
  updateAction,
  deleteAction
} from '../controllers/action';

const router = express.Router();

router.post('/', createAction);
router.get('/', getActions);
router.get('/:id', getActionById);
router.put('/:id', updateAction);
router.delete('/:id', deleteAction);

export default router;
