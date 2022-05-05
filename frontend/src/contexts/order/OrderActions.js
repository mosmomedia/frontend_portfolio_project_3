import axios from 'axios';
import firebase from '../../config/firebase';

const API_URI = '/api/order/';

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

//  place order

export const placeOrder = async () => {
	try {
		const header = await createPayloadHeader;
		return header;
		// const res = await axios.post(API_URI);
		// return res.data;
	} catch (error) {
		console.log(error);
	}
};
