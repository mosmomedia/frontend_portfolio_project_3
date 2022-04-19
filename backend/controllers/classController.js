const name = async () => {};

// open a class
export const createClass = async (req, res) => {
	const { uid, isAdmin } = req.user;

	if (!isAdmin) {
		res.status(400);
		throw new Error('Unauthorized');
	}

	const { title, type, status, week, period, hours, tutor } = req.body;

	console.log(title, type, status, week, period, hours, tutor);
};
