import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
		},

		orderedItem: {
			title: { type: String, required: true },
			type: { type: String, required: true },
			tutor: { type: String, required: true },
			price: { type: Number, required: true },
			class: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
				ref: 'Class',
			},
		},

		// orderedItems: [
		// 	{
		// 		title: { type: String, required: true },
		// 		type: { type: String, required: true },
		// 		tutor: { type: String, required: true },
		// 		price: { type: Number, required: true },
		// 		class: {
		// 			type: mongoose.Schema.Types.ObjectId,
		// 			required: true,
		// 			ref: 'Class',
		// 		},
		// 	},
		// ],

		paymentMethod: {
			type: String,
			required: true,
		},

		paymentResult: {
			user_id: { type: String },
			user_email: { type: String },
			updatedAt: { type: Date },
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
