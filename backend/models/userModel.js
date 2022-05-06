import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		firebaseId: { type: String, required: true },
		myClassList: [
			{
				classId: {
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

export default mongoose.model('User', userSchema);
