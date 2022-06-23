import Tutor from '../models/tutorModel.js';

export const name = async (req, res) => {};

// @desc Create new tutor
// @route Post /api/tutor
// @access Private

export const createTutor = async (req, res) => {
	const { firebaseId, tutorId, classId } = req.body;
	let foundTutor = await Tutor.findOne({ firebaseId });

	if (!foundTutor) {
		foundTutor = await Tutor.create({ ...req.body, userObjectId: tutorId });
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

// @ get my classes in tutor db
// @ GET /api/tutor/myclass/:id
// @ private

export const getMyClasses = async (req, res) => {
	const { userObjectId } = req.user;
	const { id } = req.params;

	if (userObjectId !== id) {
		throw new Error('unauthorized issue');
	}
	const findTutorById = await Tutor.findOne({ userObjectId });
	if (findTutorById) {
		const { myClasses } = findTutorById;

		for (let i = 0; i < myClasses.length; i++) {
			await findTutorById.populate(`myClasses.${i}.myClass`);
		}

		res.status(200).json({ myClasses, userObjectId });
	} else {
		res.status(200).json({ myClasses: null, userObjectId });
	}
};

// @desc remove a class in tutor db
// @route Delete /api/tutor/myclass/:id
// @access Private

export const removeClassInTutorDb = async (req, res) => {
	const { userObjectId } = req.user;
	const { classId } = req.body;
	const findTutorById = await Tutor.findOne({ userObjectId });

	if (!findTutorById) {
		throw new Error('cannot find tutor db by user ID');
	}

	let { myClasses } = findTutorById;

	let filteredMyClass;
	if (myClasses.length === 0) {
		throw new Error('cannot find the work in this db');
	} else {
		filteredMyClass = myClasses.filter(
			({ myClass }) => myClass.toString() !== classId
		);
	}

	await Tutor.findOneAndUpdate(
		{ userObjectId },
		{
			myClasses: filteredMyClass,
		}
	);

	res.status(200).json({ message: 'success' });
};
