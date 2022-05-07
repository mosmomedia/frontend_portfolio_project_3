import Student from '../models/studentModel.js';

export const name = async (req, res) => {};

// @desc Create new student
// @route Post /api/student
// @access Private
export const createStudent = async (req, res) => {
	const newStudent = await Student.create({ ...req.body });
	res.status(200).json(newStudent);
};
