import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
	{
		firebaseId: { type: String, required: true },
		name: { type: String, required: true },
		email: { type: String, required: true },
		myClasses: [],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Student', studentSchema);
