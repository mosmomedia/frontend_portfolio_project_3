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
// @ GET /api/student/:id
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
