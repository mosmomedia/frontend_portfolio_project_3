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
	const { _id, title, hours, month } = req.body;

	// const newClass {}

	const findStudentById = await Student.findById(userObjectId);

	if (!findStudentById) {
		throw new Error('cannot find student db by user ID');
	}

	const { myClasses } = findStudentById;

	// if (myClasses.length === 0) {
	// 	myClasses.push(classId);
	// } else {
	// 	const findClassId = myClasses.findIndex((item) => item === classId);
	// 	if (findClassId !== -1) {
	// 		throw new Error('class already added');
	// 	}

	// 	myClasses.push(classId);
	// }

	// await findStudentById.save();

	res.status(200).json(myClasses);
};

// export const addClassToStudent = async (req, res) => {
// 	const { userObjectId } = req.user;
// 	const { classId } = req.body;

// 	const findStudentById = await Student.findById(userObjectId);

// 	if (!findStudentById) {
// 		throw new Error('cannot find student db by user ID');
// 	}

// 	const { myClasses } = findStudentById;

// 	if (myClasses.length === 0) {
// 		myClasses.push(classId);
// 	} else {
// 		const findClassId = myClasses.findIndex((item) => item === classId);
// 		if (findClassId !== -1) {
// 			throw new Error('class already added');
// 		}

// 		myClasses.push(classId);
// 	}

// 	await findStudentById.save();

// 	res.status(200).json(true);
// };

// @ get my classes in student db
// @ GET /api/student/:id
// @ private

export const getMyClasses = async (req, res) => {
	const { userObjectId } = req.user;

	const findStudentById = await Student.findById(userObjectId);

	if (findStudentById) {
		const { myClasses } = findStudentById;
		res.status(200).json(myClasses);
	} else {
		res.status(200).json(null);
		console.log('CHECK_POINT : cannot find student db by user ID');
	}
};
