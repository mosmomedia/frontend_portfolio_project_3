import Order from '../models/orderModel.js';

// @desc order a class
// @route Post /api/order
// @access Private

export const placeOrder = async (req, res) => {
	const { userObjectId, email } = req.user;
	const { title, type, tutor, price, classId, paymentMethod } = req.body;
	const orderedItem = {
		class: classId,
		title,
		type,
		tutor,
		price,
	};

	const findStudentByUserId = await Order.find({ user: userObjectId });

	const findClassIdx = findStudentByUserId.findIndex(
		(item) => item.orderedItem.class.toString() === classId
	);

	if (findClassIdx !== -1) {
		throw new Error('this student already ordered this class');
	}

	await Order.create({
		user: userObjectId,
		orderedItem,
		paymentMethod,
		paymentResult: {
			user_id: userObjectId,
			user_email: email,
		},
		totalPrice: price,
	});

	res.status(200).json(true);
};
