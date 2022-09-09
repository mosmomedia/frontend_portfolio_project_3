import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	doc,
	setDoc,
	getDoc,
	updateDoc,
	collection,
	serverTimestamp,
} from 'firebase/firestore';

import {
	getAuth,
	onAuthStateChanged,
	updateProfile,
	updatePassword,
	signInWithPopup,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	reauthenticateWithCredential,
	EmailAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
	appId: process.env.REACT_APP_FIREBASE_APPID,
};

const createMongoObjectId = function () {
	const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
	return (
		timestamp +
		'xxxxxxxxxxxxxxxx'
			.replace(/[x]/g, function () {
				return ((Math.random() * 16) | 0).toString(16);
			})
			.toLowerCase()
	);
};

// Initialize Firebase
initializeApp(firebaseConfig);

const firebase = {
	auth: getAuth(),
	db: getFirestore(),
	onAuthStateChanged,
	updateProfile,
	updatePassword,
	signInWithPopup,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	GoogleAuthProvider,
	EmailAuthProvider,
	createUserWithEmailAndPassword,
	reauthenticateWithCredential,
	createMongoObjectId,
	doc,
	getDoc,
	setDoc,
	updateDoc,
	collection,
	serverTimestamp,
};

export default firebase;
