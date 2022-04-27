import express from 'express';
const router = express.Router();

// controller
import { getAllBooks, createBook } from '../controllers/bookController.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

// route ('/')
router.route('/').get(getAllBooks).post(authMiddleware, createBook);

export default router;
