import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';

import dotenv from 'dotenv';
dotenv.config();

const serviceAccount = {
	project_id: process.env.FIREBASE_PROJECT_ID,
	private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
	private_key:
		process.env.FIREBASE_PRIVATE_KEY &&
		process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
	client_email: process.env.FIREBASE_CLIENT_EMAIL,
	client_id: process.env.FIREBASE_CLIENT_ID,
	auth_uri: process.env.FIREBASE_AUTH_URI,
	token_uri: process.env.FIREBASE_TOKEN_URI,
	auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_CERT_URL,
	client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
};

const firebase = admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const modules = {
	auth: firebase.auth(),
	db: getFirestore(),
};

export default modules;
