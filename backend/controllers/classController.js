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

	const { title, type, status, month, weeks, period, hours, tutor, price } =
		req.body;

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
		price,
		verifyClass,
	};

	const foundMonth = await Class.findOne({ month });

	if (!foundMonth) {
		const doc = new Class({
			month,
			classList: [newClass],
		});
		await doc.save();
	} else {
		const foundClass = foundMonth.classList.findIndex(
			(obj) => obj.verifyClass === verifyClass
		);
		console.log(foundClass);
		if (foundClass > -1) {
			res.status(400);
			throw new Error('db issue - this class already exists');
		}

		foundMonth.classList.push(newClass);
		await foundMonth.save();
	}

	res.status(201).json(newClass);
};
