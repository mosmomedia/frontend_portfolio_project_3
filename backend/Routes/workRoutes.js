import express from 'express';
const router = express.Router();

// controller
import { createWork, getMyWorks } from '../controllers/workController.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

router.route('/').post(authMiddleware, createWork);

router.route('/:id').get(authMiddleware, getMyWorks);

export default router;
