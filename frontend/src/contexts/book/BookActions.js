import axios from 'axios';

const API_URI = '/api/book/';

export const ClassActions = async () => {};

// get all classes

export const getAllbooks = async () => {
	try {
		const res = await axios.get(API_URI);
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
