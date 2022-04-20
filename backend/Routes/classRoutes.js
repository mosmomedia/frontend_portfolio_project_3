import express from 'express';
const router = express.Router();

// controller
import { getAllClasses, createClass } from '../controllers/classController.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

// router.route('/')
router.route('/').get(getAllClasses).post(authMiddleware, createClass);

export default router;
