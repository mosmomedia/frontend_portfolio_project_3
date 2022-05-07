import axios from 'axios';
import firebase from '../../config/firebase';

const API_URI = '/api/student/';

const createPayloadHeader = async () => {
	const user = firebase.auth.currentUser;
	try {
		if (user) {
			const token = await user.getIdToken();

			if (!token) {
				throw new Error('no user token');
			}

			const payloadHolder = {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};

			return payloadHolder;
		}
	} catch (error) {
		console.log(error);
	}
};

export const ClassActions = async () => {};

export const createStudent = async (formData) => {
	try {
		const header = await createPayloadHeader();
		const res = await axios.post(API_URI, formData, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
