import axios from 'axios';
const API_URI = '/api/student/';

const createPayloadHeader = async (user) => {
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

// @ create student
// @ POST /api/student/
// @ private

export const createStudent = async (formData, user) => {
	try {
		const header = await createPayloadHeader(user);
		const res = await axios.post(API_URI, formData, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ add class to student db
// @ POST /api/student/myclass/:id
// @ private

export const addClassToStudent = async (myClass, user) => {
	try {
		const header = await createPayloadHeader(user);
		const res = await axios.post(API_URI + 'myclass/', { myClass }, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ get my classes in student db
// @ GET /api/student/myclass/
// @ private

export const getMyClasses = async (user) => {
	try {
		const header = await createPayloadHeader(user);
		const res = await axios.get(API_URI + 'myclass/', header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
