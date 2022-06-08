import mongoose from 'mongoose';

const tutorSchema = new mongoose.Schema(
	{
		firebaseId: { type: String, required: true },
		userObjectId: {
			type: mongoose.Schema.Types.ObjectId,
		},
		name: { type: String, required: true },
		email: { type: String, required: true },
		myClasses: [
			{
				myClass: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Class',
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Tutor', tutorSchema);
