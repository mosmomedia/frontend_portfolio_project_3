import express from 'express';
const router = express.Router();

// controller
import {
	createWork,
	updateWork,
	removeWork,
	addSubWork,
	updateSubWork,
	removeSubWork,
} from '../controllers/workController.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

router.route('/').post(authMiddleware, createWork);

router
	.route('/')
	.put(authMiddleware, updateWork)
	.delete(authMiddleware, removeWork);

router
	.route('/sub/:id')
	.post(authMiddleware, addSubWork)
	.put(authMiddleware, updateSubWork)
	.delete(authMiddleware, removeSubWork);

export default router;
