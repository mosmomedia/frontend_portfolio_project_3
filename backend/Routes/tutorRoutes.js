import express from 'express';

const router = express.Router();

import { createTutor } from '../controllers/tutorController.js';

// controller

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

// tutor
router.route('/').post(authMiddleware, createTutor);

export default router;
