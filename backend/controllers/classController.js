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

	const { title, type, status, week, period, hours, tutor } = req.body;

	const verifyClass = week + type + period + hours + tutor;

	const foundClass = await Class.findOne({ verifyClass });

	if (foundClass) {
		res.status(400);
		throw new Error('this class already exists');
	}

	const newClass = await Class.create({
		title,
		type,
		status,
		week,
		period,
		hours,
		tutor,
		verifyClass,
	});

	res.status(201).json(newClass);
};
