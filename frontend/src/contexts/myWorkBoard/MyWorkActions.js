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

// @ create new work
// @ POST /api/student/mywork/
// @ private

export const createNewWork = async (formData) => {
	try {
		const header = await createPayloadHeader();
		const res = await axios.post('/api/work', formData, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ update myWork
// @ POST /api/work/
// @ private

export const updateMyWork = async (formData, workId) => {
	try {
		const header = await createPayloadHeader();
		const res = await axios.put('/api/work/', { formData, workId }, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ add work to student db
// @ POST /api/student/mywork/:id
// @ private

export const addWorkToStudent = async (myWork) => {
	try {
		const header = await createPayloadHeader();
		const res = await axios.post(API_URI, { myWork }, header);
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
		// const user = firebase.auth.currentUser;
		const header = await createPayloadHeader();

		// const docSnap = firebase.doc(firebase.db, 'users', user.uid);
		// const getUserDb = await firebase.getDoc(docSnap);
		// const { userObjectId } = getUserDb.data();

		const res = await axios.get(API_URI, header);
		// const res = await axios.get(API_URI + userObjectId, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ remove myWork
// @ DELTE /api/work
// @ private

export const removeMyWork = async (workId) => {
	try {
		const { headers } = await createPayloadHeader();
		const res = await axios.delete('/api/work/', {
			headers,
			data: { workId },
		});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ remove a work in student db
// @ PUT /api/student/mywork
// @ private

export const removeWorkInStudentDb = async (workId) => {
	try {
		const header = await createPayloadHeader();
		const res = await axios.put(API_URI, { workId }, header);

		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ add a subwork
// @ POST /api/work/sub/:id
// @ private

export const addSubWork = async (formData, classId) => {
	try {
		const header = await createPayloadHeader();
		const res = await axios.post(`/api/work/sub/${classId}`, formData, header);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ update my subwork
// @ POST /api/work/sub/:id
// @ private

export const updateSubWork = async (formData, workId, subWorkId) => {
	try {
		const header = await createPayloadHeader();
		const res = await axios.put(
			`/api/work/sub/${workId}`,
			{ formData, subWorkId },
			header
		);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};

// @ remove a work in student db
// @ PUT  /api/work/sub/:id
// @ private

export const removeSubWork = async (workId, subWorkId) => {
	try {
		const { headers } = await createPayloadHeader();

		const res = await axios.delete(`/api/work/sub/${workId}`, {
			headers,
			data: { workId, subWorkId },
		});

		return res.data;
	} catch (error) {
		console.log(error);
	}
};
