import axios from 'axios';
import firebase from '../../config/firebase';

const API_URI = '/api/student/mywork/';

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

// @ add work to student db
// @ POST /api/student/mywork/:id
// @ private

export const addWorkToStudent = async (userId, myWork) => {
	try {
		const header = await createPayloadHeader();
		const res = await axios.post(API_URI + userId, { myWork }, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ get my works in student db
// @ GET /api/student/mywork/:id
// @ private

export const getMyWorks = async () => {
	try {
		const user = firebase.auth.currentUser;
		const header = await createPayloadHeader();

		const docSnap = firebase.doc(firebase.db, 'users', user.uid);
		const getUserDb = await firebase.getDoc(docSnap);
		const { userObjectId } = getUserDb.data();

		const res = await axios.get(API_URI + userObjectId, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
