import Class from '../models/classModel.js';

const name = async () => {};

// open a class
export const createClass = async (req, res) => {
	const { uid, isAdmin } = req.user;

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
