import mongoose from 'mongoose';

const bookInfoSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		author: { type: String, required: true },
		genre: { type: String, required: true },
		view: { type: Number, required: true },
		kkp_id: { type: Number, required: true },
		img_url: { type: String, required: true },
		complete: { type: Boolean, required: true },
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Book', bookInfoSchema);
