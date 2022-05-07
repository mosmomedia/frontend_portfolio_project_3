import firebaseAdmin from '../config/firebase.js';

const authMiddleware = async (req, res, next) => {
	let firebaseToken;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			firebaseToken = req.headers.authorization.split(' ')[1];
			let firebaseUser;
			// decode
			if (firebaseToken) {
				firebaseUser = await firebaseAdmin.auth.verifyIdToken(firebaseToken);
			}

			req.user = firebaseUser;

			// const docSnap = await firebaseAdmin.db
			// 	.collection('users')
			// 	.doc(firebaseUser.uid)
			// 	.get();

			// if (docSnap.exists) {
			// 	const userDB = docSnap.data();

			// 	req.user = { ...userDB };
			// }

			next();
		} catch (error) {
			res.status(401);
			throw new Error('Unauthorized');
		}
	}
	if (!firebaseToken) {
		res.status(401);
		throw new Error('Unauthorized');
	}
};

export default authMiddleware;
