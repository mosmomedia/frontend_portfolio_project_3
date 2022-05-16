import Student from '../models/studentModel.js';
import Class from '../models/classModel.js';

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
	const { classId } = req.body;

	const findStudentById = await Student.findById(userObjectId);

	if (!findStudentById) {
		throw new Error('cannot find student db by user ID');
	}

	const { myClasses } = findStudentById;
	if (myClasses.length === 0) {
		myClasses.push(classId);
	} else {
		const findClassId = myClasses.findIndex((item) => item === classId);
		if (findClassId !== -1) {
			throw new Error('class already added');
		}

		myClasses.push(classId);
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
	console.log(myClasses[0]._id);
	const findClass = await Class.findById(myClasses[0]._id);
	console.log(findClass);
	// const test = await findStudentById.populate('myClasses.0._id');
	// console.log(test.myClasses);
	// console.log(myClasses);
	// myClasses.forEach(async (myClass) => {
	// 	console.log(myClass._id);
	// 	const findClass = await Class.findById(userObjectId);
	// 	console.log(findClass);
	// });

	res.status(200).json(myClasses);
};
