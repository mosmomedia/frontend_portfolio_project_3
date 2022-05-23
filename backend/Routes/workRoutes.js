import express from 'express';
const router = express.Router();

// controller
import { createWork, updateWork } from '../controllers/workController.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

router.route('/').post(authMiddleware, createWork);

router.route('/:id').put(authMiddleware, updateWork);

export default router;
