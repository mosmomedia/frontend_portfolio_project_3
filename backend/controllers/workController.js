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
// @route DELETE /api/work/:id
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

// @desc add a subwork
// @route POST /api/work/sub/:id
// @access Private
export const addSubWork = async (req, res) => {
	const { userObjectId } = req.user;
	const { id } = req.params;
	const { subTitle, subContentHtml } = req.body;
	const findWork = await Work.findById(id);

	if (!findWork || findWork.user.toString() !== userObjectId) {
		throw new Error('cannot find work');
	}

	findWork.contentList.push({ subTitle, subContentHtml });

	await findWork.save();

	res.status(200).json(findWork);
};

// @desc update my subwork
// @route POST /api/work/sub/:id
// @access Private
export const updateSubWork = async (req, res) => {
	const { userObjectId } = req.user;
	const { id } = req.params;
	const { formData, subWorkId } = req.body;
	const findWork = await Work.findById(id);

	if (!findWork || findWork.user.toString() !== userObjectId) {
		throw new Error('cannot find work');
	}

	const updatedList = findWork.contentList.map((item) => {
		if (item._id == subWorkId) {
			return formData;
		} else {
			return item;
		}
	});

	findWork.contentList = updatedList;

	await findWork.save();

	res.status(200).json(findWork);
};

// @desc remove my sub work
// @route DELETE /api/work/sub/:id
// @access Private

export const removeSubWork = async (req, res) => {
	const { userObjectId } = req.user;

	const { id } = req.params;
	const { workId, subWorkId } = req.body;

	if (id !== workId) {
		throw new Error('doesnt match id and workId');
	}
	const findWork = await Work.findById(id);

	if (!findWork || findWork.user.toString() !== userObjectId) {
		throw new Error('cannot find work');
	}
	let { contentList } = findWork;

	let filteredMySubWorks;
	if (contentList.length === 0) {
		throw new Error('cannot find the sub work in this db');
	} else {
		filteredMySubWorks = contentList.filter(
			({ _id }) => _id.toString() !== subWorkId
		);
	}

	findWork.contentList = filteredMySubWorks;

	await findWork.save();

	res.status(200).json({ message: 'success' });
};
