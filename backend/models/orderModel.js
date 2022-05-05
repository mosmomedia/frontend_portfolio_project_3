import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},

		orderItems: [
			{
				title: { type: String, required: true },
				price: { type: Number, required: true },
				class: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: 'Class',
				},
			},
		],

		paymentMethod: {
			type: String,
			required: true,
		},

		paymentResult: {
			id: { type: String },
			status: { type: String },
			update_time: { type: String },
			email_adress: { type: String },
		},

		totalPrice: {
			type: Number,
			required: true,
			default: 0,
		},

		paidAt: {
			type: Date,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Order', orderSchema);
