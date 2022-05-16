import Class from '../models/classModel.js';

export const name = async (req, res) => {};

// @desc get all classes
// @route GET /api/class
// @access Public
export const getAllClasses = async (req, res) => {
	const allClasses = await Class.find();

	res.status(200).json(allClasses);
};

// @desc open a class
// @route Post /api/class
// @access Private
export const createClass = async (req, res) => {
	const { isAdmin } = req.user;

	if (!isAdmin) {
		res.status(400);
		throw new Error('admin issue - Unauthorized');
	}

	const { title, type, status, month, weeks, period, hours, tutor, price } =
		req.body;

	const classDetail = [];

	for (let i = 0; i < weeks; i++) {
		const tmpClass = {
			classOrder: i,
			isOpen: false,
			isCompleted: false,
			checkedInStudents: [],
		};
		classDetail.push(tmpClass);
	}

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
		classDetail,
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

		if (foundClass > -1) {
			res.status(400);
			throw new Error('db issue - this class already exists');
		}

		foundMonth.classList.push(newClass);
		await foundMonth.save();
	}

	res.status(201).json(newClass);
};

// @desc enroll student to ordered class
// @route Post /api/class/:id
// @access Private
export const enrollStudentToClass = async (req, res) => {
	const { userObjectId } = req.user;
	const month = req.body;
	const classId = req.params.id;

	const findClassByMonth = await Class.findOne(month);
	const findOrderedClassId = findClassByMonth.classList.findIndex(
		(item) => item._id.toString() === classId
	);

	if (findOrderedClassId === -1) {
		throw new Error('no ordered class');
	}

	const orderedClass = findClassByMonth.classList[findOrderedClassId];

	const findStudentId = orderedClass.students.findIndex(
		(std) => std.toString() === userObjectId
	);

	if (findStudentId !== -1) {
		throw new Error('student already exists');
	}

	orderedClass.students.push(userObjectId);

	await findClassByMonth.save();

	res.status(200).json(true);
};
