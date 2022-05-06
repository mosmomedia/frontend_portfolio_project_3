import Order from '../models/orderModel.js';

// @desc order a class
// @route Post /api/order
// @access Private

export const placeOrder = async (req, res) => {
	const { userObjectId, email } = req.user;
	const { title, type, tutor, price, classId, paymentMethod } = req.body;
	const orderItem = {
		class: classId,
		title,
		type,
		tutor,
		price,
	};

	console.log({
		user: userObjectId,
		orderItem,
		paymentMethod,
		paymentResult: {
			user_id: userObjectId,
			user_email: email,
		},
		totalPrice: price,
	});

	const newOrder = await Order.create({
		user: userObjectId,
		orderItem,
		paymentMethod,
		paymentResult: {
			user_id: userObjectId,
			user_email: email,
		},
		totalPrice: price,
	});

	res.status(200).json(newOrder);
};
