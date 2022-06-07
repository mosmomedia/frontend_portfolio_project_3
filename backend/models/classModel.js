import mongoose from 'mongoose';

const classInfoSchema = new mongoose.Schema(
	{
		tutorId: {
			type: mongoose.Schema.Types.ObjectId,
		},
		title: { type: String, required: true },
		type: { type: String, required: true },
		status: { type: String, required: true },
		month: { type: Number, required: true },
		weeks: { type: Number, required: true },
		startDate: { type: Date, required: true },
		endDate: { type: Date, required: true },
		startHour: { type: Date, required: true },
		endHour: { type: Date, required: true },
		tutor: { type: String, required: true },
		price: { type: Number, required: true },
		homework: { type: Boolean, required: true, default: true },
		isOnAir: { type: Boolean, default: false },
		completedAt: { type: Number, default: 0 },
		students: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],

		classDetail: [
			{
				classOrder: { type: Number, required: true },
				isOpen: { type: Boolean, required: true, default: false },
				isCompleted: { type: Boolean, required: true, default: false },
				checkedInStudents: [
					{
						type: mongoose.Schema.Types.ObjectId,
					},
				],
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Class', classInfoSchema);
