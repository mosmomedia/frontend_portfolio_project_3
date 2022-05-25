import Student from '../models/studentModel.js';

export const name = async (req, res) => {};

// @desc Create new student
// @route Post /api/student
// @access Private
export const createStudent = async (req, res) => {
	const newStudent = await Student.create({ ...req.body });
	res.status(200).json(newStudent);
};

// @desc add class to student db
// @route Post /api/student/:id
// @access Private

export const addClassToStudent = async (req, res) => {
	const { userObjectId } = req.user;
	const { myClass } = req.body;

	const findStudentById = await Student.findById(userObjectId);

	if (!findStudentById) {
		throw new Error('cannot find student db by user ID');
	}

	const { myClasses } = findStudentById;

	if (myClasses.length === 0) {
		myClasses.push({ myClass });
	} else {
		const findClassId = myClasses.findIndex((item) => item === myClass);
		if (findClassId !== -1) {
			throw new Error('class already added');
		}

		myClasses.push({ myClass });
	}

	await findStudentById.save();

	res.status(200).json(myClasses);
};

// @ get my classes in student db
// @ GET /api/student/myclass/:id
// @ private

export const getMyClasses = async (req, res) => {
	const { userObjectId } = req.user;
	const findStudentById = await Student.findById(userObjectId);
	if (!findStudentById) {
		throw new Error('cannot find student db by user ID');
	}

	const { myClasses } = findStudentById;

	for (let i = 0; i < myClasses.length; i++) {
		await findStudentById.populate(`myClasses.${i}.myClass`);
	}

	res.status(200).json({ myClasses, userObjectId });
};

// @desc add work to student db
// @route Post /api/student/mywork/:id
// @access Private

export const addWorkToStudent = async (req, res) => {
	const { userObjectId } = req.user;
	const { myWork } = req.body;
	const findStudentById = await Student.findById(userObjectId);

	if (!findStudentById) {
		throw new Error('cannot find student db by user ID');
	}

	const { myWorks } = findStudentById;

	if (myWorks.length === 0) {
		myWorks.push({ myWork });
	} else {
		const findClassId = myWorks.findIndex((item) => item === myWork);
		if (findClassId !== -1) {
			throw new Error('work already added');
		}

		myWorks.push({ myWork });
	}

	await findStudentById.save();

	res.status(200).json({ message: 'success' });
};

// @ get my works in student db
// @ GET /api/student/mywork/:id
// @ private

export const getMyWorks = async (req, res) => {
	const { userObjectId } = req.user;

	const findStudentById = await Student.findById(userObjectId);

	if (!findStudentById) {
		throw new Error('cannot find student db by user ID');
	}

	const { myWorks } = findStudentById;

	for (let i = 0; i < myWorks.length; i++) {
		await findStudentById.populate(`myWorks.${i}.myWork`);
	}
	res.status(200).json({ myWorks, userObjectId });
};

// @desc remove my work in student db
// @route Delete /api/student/mywork/:id
// @access Private

export const removeMyWorkInStudentDb = async (req, res) => {
	const { userObjectId } = req.user;
	const { workId } = req.body;
	const findStudentById = await Student.findById(userObjectId);

	if (!findStudentById) {
		throw new Error('cannot find student db by user ID');
	}

	let { myWorks } = findStudentById;

	let filteredMyWorks;
	if (myWorks.length === 0) {
		throw new Error('cannot find the work in this db');
	} else {
		filteredMyWorks = myWorks.filter(
			({ myWork }) => myWork.toString() !== workId
		);
	}

	await Student.findByIdAndUpdate(userObjectId, {
		myWorks: filteredMyWorks,
	});

	res.status(200).json({ message: 'success' });
};
