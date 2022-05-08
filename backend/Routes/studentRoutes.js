import express from 'express';
const router = express.Router();

// controller
import {
	createStudent,
	addClassToStudent,
	getMyClasses,
} from '../controllers/studentContoller.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

// router.route('/')
router.route('/').post(authMiddleware, createStudent);

router
	.route('/:id')
	.get(authMiddleware, getMyClasses)
	.post(authMiddleware, addClassToStudent);

export default router;
