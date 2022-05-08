import express from 'express';
const router = express.Router();

// controller
import {
	createStudent,
	addClassToStudent,
} from '../controllers/studentContoller.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

// router.route('/')
router.route('/').post(authMiddleware, createStudent);

router.route('/:id').post(authMiddleware, addClassToStudent);

export default router;
