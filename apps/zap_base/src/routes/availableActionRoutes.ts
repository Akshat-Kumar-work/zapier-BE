import express from 'express';
import {
  createAvailableAction,
  getAvailableActionById,
  getAvailableActions,
  updateAvailableAction,
  deleteAvailableAction
} from '../controllers/availableAction';
import { authenticateToken } from '@repo/be_common';


const router = express.Router();

router.post('/',authenticateToken, createAvailableAction);
router.get('/',authenticateToken, getAvailableActions);
router.get('/:id',authenticateToken, getAvailableActionById);
router.put('/:id',authenticateToken, updateAvailableAction);
router.delete('/:id',authenticateToken, deleteAvailableAction);

export default router;
