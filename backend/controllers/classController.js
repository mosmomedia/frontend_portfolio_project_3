import Class from '../models/classModel.js';

export const name = async (req, res) => {};

// get all classes
export const getAllClasses = async (req, res) => {
	const allClasses = await Class.find();

	res.status(200).json(allClasses);
};

// open a class
export const createClass = async (req, res) => {
	const { isAdmin } = req.user;

	if (!isAdmin) {
		res.status(400);
		throw new Error('admin issue - Unauthorized');
	}

	const { title, type, status, month, weeks, period, hours, tutor } = req.body;

	const verifyClass = month + weeks + type + period + hours + tutor;

	const newClass = {
		title,
		type,
		status,
		month,
		weeks,
		period,
		hours,
		tutor,
		verifyClass,
	};

	const foundMonth = await Class.findOne({ month });
	const foundClass = await Class.findOne({ classInfo: { verifyClass } });

	if (foundClass) {
		res.status(400);
		throw new Error('this class already exists');
	}

	if (!foundMonth) {
	}

	res.status(201).json(newClass);
};
