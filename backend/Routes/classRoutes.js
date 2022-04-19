import express from 'express';
const router = express.Router();

// controller
import { createClass } from '../controllers/classController.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

// router.route('/')
router.route('/').post(authMiddleware, createClass);

export default router;
