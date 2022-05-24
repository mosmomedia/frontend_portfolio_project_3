import Work from '../models/workModel.js';

export const name = async (req, res) => {};

// @desc create a work
// @route Post /api/work
// @access Private
export const createWork = async (req, res) => {
	const { userObjectId } = req.user;
	const { title, genre, shortDesc } = req.body;
	const newWork = { user: userObjectId, title, genre, shortDesc };
	const createdWork = await Work.create(newWork);
	res.status(200).json(createdWork);
};

// @desc update a work
// @route PUT /api/work/:id
// @access Private
export const updateWork = async (req, res) => {
	const { userObjectId } = req.user;
	const { formData, workId } = req.body;

	const { title, genre, shortDesc } = formData;
	const findWork = await Work.findById(workId);

	if (!findWork || findWork.user.toString() !== userObjectId) {
		throw new Error('cannot find work');
	}

	findWork.title = title;
	findWork.genre = genre;
	findWork.shortDesc = shortDesc;

	await findWork.save();

	res.status(200).json({ findWork, message: 'success' });
};

// @desc remove my work
// @route PUT /api/work/:id
// @access Private
export const removeWork = async (req, res) => {
	const { userObjectId } = req.user;
	const { workId } = req.body;
	const findWork = await Work.findById(workId);

	if (!findWork || findWork.user.toString() !== userObjectId) {
		throw new Error('cannot find work');
	}

	await findWork.remove();

	res.status(200).json({ message: 'success' });
};
