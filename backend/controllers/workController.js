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

// @desc get my works
// @route Post /api/work/:id
// @access Private
export const getMyWorks = async (req, res) => {
	const user = req.params.id;

	res.status(200).json(userObjectId);
};
