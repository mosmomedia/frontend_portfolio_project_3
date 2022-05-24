import express from 'express';
const router = express.Router();

// controller
import {
	createStudent,
	addClassToStudent,
	getMyClasses,
	getMyWorks,
	addWorkToStudent,
	removeMyWorkInStudentDb,
} from '../controllers/studentContoller.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

// student
router.route('/').post(authMiddleware, createStudent);

// student - class
router
	.route('/myclass/:id')
	.get(authMiddleware, getMyClasses)
	.post(authMiddleware, addClassToStudent);

// student - work

router
	.route('/mywork/:id')
	.get(authMiddleware, getMyWorks)
	.post(authMiddleware, addWorkToStudent)
	.put(authMiddleware, removeMyWorkInStudentDb);

export default router;
