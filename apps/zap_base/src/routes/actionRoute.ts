import express from 'express';
import {
  createAction,
  getActions,
  getActionById,
  updateAction,
  deleteAction
} from '../controllers/action';
import { authenticateToken } from '@repo/be_common';
const router = express.Router();

router.post('/',authenticateToken, createAction);
router.get('/',authenticateToken, getActions);
router.get('/:id',authenticateToken, getActionById);
router.put('/:id',authenticateToken, updateAction);
router.delete('/:id',authenticateToken, deleteAction);

export default router;
