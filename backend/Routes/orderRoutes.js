import express from 'express';
const router = express.Router();

// controller
import { placeOrder } from '../controllers/orderController.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

// router.route('/')
router.route('/').post(authMiddleware, placeOrder);

export default router;
