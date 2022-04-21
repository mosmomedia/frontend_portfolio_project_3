import mongoose from 'mongoose';

const classInfoSchema = new mongoose.Schema(
	{
		month: { type: Number, required: false },
		classList: [
			{
				title: { type: String, required: false },
				type: { type: String, required: false },
				status: { type: String, required: false },
				month: { type: Number, required: false },
				weeks: { type: Number, required: false },
				period: { type: String, required: false },
				hours: { type: String, required: false },
				tutor: { type: String, required: false },
				verifyClass: { type: String, required: false },
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Class', classInfoSchema);
