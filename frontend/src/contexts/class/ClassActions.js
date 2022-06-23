import axios from 'axios';
import firebase from '../../config/firebase';

const API_URI = '/api/class/';

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

// @ create class
// @ POST /api/class/
// @ private

export const createNewClass = async (formData) => {
	try {
		const header = await createPayloadHeader();
		const res = await axios.post(API_URI, formData, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ get all classes
// @ GET /api/class/
// @ public

export const getAllClasses = async () => {
	try {
		const res = await axios.get(API_URI);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @desc update class
// @route PUT /api/class/:id
// @access Private
export const updateClass = async (classId, formData) => {
	const header = await createPayloadHeader();

	try {
		const res = await axios.put(API_URI + classId, formData, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ enroll student to ordered class
// @ POST /api/class/
// @ private

export const enrollStudentToClass = async (classId) => {
	const header = await createPayloadHeader();

	try {
		const res = await axios.post(API_URI + classId, { classId }, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ remove class
// @ DELTE /api/class/:id
// @ private

export const removeClass = async (classId) => {
	try {
		const { headers } = await createPayloadHeader();
		const res = await axios.delete(API_URI + classId, {
			headers,
			data: { classId },
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
