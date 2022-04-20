import mongoose from 'mongoose';

const classSchema = new mongoose.Schema(
	{
		title: { type: String, required: false },
		type: { type: String, required: false },
		status: { type: String, required: false },
		week: { type: Number, required: false },
		period: { type: String, required: false },
		hours: { type: String, required: false },
		tutor: { type: String, required: false },
		verifyClass: { type: String, required: false },
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Class', classSchema);
