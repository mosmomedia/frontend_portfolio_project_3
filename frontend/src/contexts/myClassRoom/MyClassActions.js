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

// @ create student
// @ POST /api/student/
// @ private

export const createStudent = async (formData) => {
	try {
		const header = await createPayloadHeader();
		const res = await axios.post(API_URI, formData, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ add class to student db
// @ POST /api/student/myclass/:id
// @ private

export const addClassToStudent = async (userId, myClass) => {
	try {
		const header = await createPayloadHeader();
		const res = await axios.post(
			API_URI + 'myclass/' + userId,
			{ myClass },
			header
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ get my classes in student db
// @ GET /api/student/myclass/:id
// @ private

export const getMyClasses = async () => {
	try {
		const user = firebase.auth.currentUser;
		const header = await createPayloadHeader();

		const docSnap = firebase.doc(firebase.db, 'users', user.uid);
		const getUserDb = await firebase.getDoc(docSnap);
		const { userObjectId } = getUserDb.data();

		const res = await axios.get(API_URI + 'myclass/' + userObjectId, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
