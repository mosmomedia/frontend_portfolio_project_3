import express from 'express';
const router = express.Router();

// controller
import { addOrder } from '../controllers/orderController.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

// router.route('/')
router.route('/').post(authMiddleware, addOrder);

export default router;
