import mongoose from 'mongoose';

const classSchema = new mongoose.Schema(
	{
		month: { type: Number, required: false },
		classList: [],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Class', classSchema);
