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
				// myCheckIn: [
				// 	{
				// 		order: { type: Number, required: true },
				// 		isCheckedIn: { type: Boolean, required: true },
				// 	},
				// ],
				// myHomework: [
				// 	{
				// 		order: { type: Number, required: true },
				// 		isSubmitted: { type: Boolean, required: true },
				// 	},
				// ],
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Student', studentSchema);
