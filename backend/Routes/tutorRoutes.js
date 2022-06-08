import express from 'express';

const router = express.Router();

import { createTutor, getMyClasses } from '../controllers/tutorController.js';

// controller

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

// tutor
router.route('/').post(authMiddleware, createTutor);

// tutor class
router.route('/myclass/:id').get(authMiddleware, getMyClasses);

export default router;
