import mongoose from 'mongoose';

const workSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		title: { type: String, required: true },
		genre: { type: String, required: true },
		shortDesc: { type: String, required: true },
		contentList: [
			{
				order: { type: Number, required: true },
				content: { type: String, required: true },
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model('Work', workSchema);
