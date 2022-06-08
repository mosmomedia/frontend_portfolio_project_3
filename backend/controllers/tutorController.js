import Tutor from '../models/tutorModel.js';

export const name = async (req, res) => {};

// @desc Create new tutor
// @route Post /api/admin
// @access Private

export const createTutor = async (req, res) => {
	const { firebaseId, email, name, tutorId, classId } = req.body;
	let foundTutor = await Tutor.findOne({ firebaseId });

	if (!foundTutor) {
		foundTutor = await Tutor.create({ ...req.body });
	}

	const { myClasses } = foundTutor;

	if (myClasses.length === 0) {
		myClasses.push({ myClass: classId });
	} else {
		const findClassId = myClasses.findIndex((item) => item === classId);
		if (findClassId !== -1) {
			throw new Error('class already exists');
		}

		myClasses.push({ myClass: classId });
	}

	await foundTutor.save();

	res.status(200).json({ message: 'success' });
};
