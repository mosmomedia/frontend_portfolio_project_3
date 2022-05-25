import express from 'express';
const router = express.Router();

// controller
import {
	createWork,
	updateWork,
	removeWork,
	addSubWork,
} from '../controllers/workController.js';

// auth middleware
import authMiddleware from '../middleware/authMiddleware.js';

router.route('/').post(authMiddleware, createWork);

router
	.route('/:id')
	.put(authMiddleware, updateWork)
	.delete(authMiddleware, removeWork);

router.route('/sub/:id').post(authMiddleware, addSubWork);

export default router;
