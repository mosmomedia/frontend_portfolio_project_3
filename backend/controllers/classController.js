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

	const {
		tutorId,
		title,
		type,
		status,
		month,
		weeks,
		period,
		hours,
		tutor,
		price,
		homework,
		isOnAir,
		completedAt,
	} = req.body;

	const classDetail = [];

	for (let i = 0; i < weeks; i++) {
		const tmpClass = {
			classOrder: i,
			isOpen: false,
			checkedInStudents: [],
		};
		classDetail.push(tmpClass);
	}

	const verifyClass = tutorId + month + weeks + type + period + hours + tutor;

	const newClass = {
		tutorId,
		title,
		type,
		status,
		month,
		weeks,
		period,
		hours,
		tutor,
		homework,
		isOnAir,
		completedAt,
		price,
		verifyClass,
		classDetail,
	};

	// if (foundClass > -1) {
	// 	res.status(400);
	// 	throw new Error('db issue - this class already exists');
	// }

	// foundMonth.classList.push(newClass);
	await Class.create(newClass);

	res.status(201).json(newClass);
};

// @desc enroll student to ordered class
// @route Post /api/class/:id
// @access Private
export const enrollStudentToClass = async (req, res) => {
	const { userObjectId } = req.user;
	const classId = req.params.id;

	const findOrderedClass = await Class.findById(classId);
	if (!findOrderedClass) {
		throw new Error('no ordered class');
	}

	const findStudentId = findOrderedClass.students.findIndex(
		(std) => std.toString() === userObjectId
	);

	if (findStudentId !== -1) {
		throw new Error('student already exists');
	}

	findOrderedClass.students.push(userObjectId);

	await findOrderedClass.save();

	res.status(200).json(true);
};
