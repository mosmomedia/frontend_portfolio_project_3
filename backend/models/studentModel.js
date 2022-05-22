import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
	{
		firebaseId: { type: String, required: true },
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
		myWorks: [
			{
				myWork: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Work',
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Student', studentSchema);
