import express from 'express';
const router = express.Router();

// controller
import {
	getAllClasses,
	createClass,
	enrollStudentToClass,
	updateClass,
} from '../controllers/classController.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

// router.route('/')
router.route('/').get(getAllClasses).post(authMiddleware, createClass);

router
	.route('/:id')
	.post(authMiddleware, enrollStudentToClass)
	.put(authMiddleware, updateClass);

export default router;
