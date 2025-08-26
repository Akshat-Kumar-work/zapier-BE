import express from 'express';
import {
  createZap,
  getZaps,
  getZapById,
  updateZap,
  deleteZap
} from '../controllers/zap';

const router = express.Router();
import { authenticateToken } from '@repo/be_common';

router.post('/',authenticateToken, createZap);
router.get('/',authenticateToken, getZaps);
router.get('/:id',authenticateToken, getZapById);
router.put('/:id',authenticateToken, updateZap);
router.delete('/:id',authenticateToken, deleteZap);

export default router;
