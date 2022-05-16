import mongoose from 'mongoose';

const classInfoSchema = new mongoose.Schema(
	{
		month: { type: Number, required: true },
		classList: [
			{
				title: { type: String, required: true },
				type: { type: String, required: true },
				shortdescription: {
					type: String,
					required: false,
					maxLength: 50,
				},
				description: {
					type: String,
					required: false,
				},
				status: { type: String, required: true },
				month: { type: Number, required: true },
				weeks: { type: Number, required: true },
				period: { type: String, required: true },
				hours: { type: String, required: true },
				tutor: { type: String, required: true },
				price: { type: Number, required: true },
				homwork: { type: Boolean, required: true, default: true },
				verifyClass: { type: String, required: true },
				students: [
					{
						type: mongoose.Schema.Types.ObjectId,
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
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Class', classInfoSchema);
