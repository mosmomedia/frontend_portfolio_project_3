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
	const { isAdmin, userObjectId } = req.user;

	if (!isAdmin) {
		res.status(400);
		throw new Error('admin issue - Unauthorized');
	}

	const {
		title,
		type,
		status,
		month,
		weeks,
		startDate,
		startHour,
		endDate,
		endHour,
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

	const newClass = {
		tutorId: userObjectId,
		title,
		type,
		status,
		month,
		weeks,
		tutor,
		startDate,
		startHour,
		endDate,
		endHour,
		homework,
		isOnAir,
		completedAt,
		price,
		classDetail,
	};

	const payload = await Class.create(newClass);

	res.status(201).json(payload);
};

// @desc update class
// @route PUT /api/class/:id
// @access Private

export const updateClass = async (req, res) => {
	const { userObjectId } = req.user;
	const { id } = req.params;

	const getMyClassById = await Class.findById(id);

	if (userObjectId !== getMyClassById.tutorId.toString()) {
		throw new Error('unauthorized issue');
	}

	const updateItems = { ...req.body };

	await getMyClassById.updateOne(updateItems);

	res.status(200).json({ message: 'success' });
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
