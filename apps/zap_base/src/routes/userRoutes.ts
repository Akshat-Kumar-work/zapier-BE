import express from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/user';
import { authenticateToken } from '@repo/be_common';

const router = express.Router();

router.post('/', createUser);
router.get('/',authenticateToken, getUsers);
router.get('/:id',authenticateToken, getUserById);
router.put('/:id',authenticateToken, updateUser);
router.delete('/:id',authenticateToken, deleteUser);

export default router;
