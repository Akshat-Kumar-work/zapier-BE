import express from 'express';
import {
  createZap,
  getZaps,
  getZapById,
  updateZap,
  deleteZap
} from '../controllers/zap';

const router = express.Router();

router.post('/', createZap);
router.get('/', getZaps);
router.get('/:id', getZapById);
router.put('/:id', updateZap);
router.delete('/:id', deleteZap);

export default router;
