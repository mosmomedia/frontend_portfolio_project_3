import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../config/firebase';

import Spinner from './shared/Spinner';

const AdminRoute = () => {
	const [user] = useAuthState(firebase.auth);

	const [isAdmin, setIsAdmin] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const checkAdmin = async () => {
			const docRef = firebase.doc(firebase.db, 'users', user.uid);
			const docSnap = await firebase.getDoc(docRef);
			if (docSnap.data().isAdmin) {
				setIsAdmin(true);
			}
			setIsLoading(false);
		};

		if (user) {
			checkAdmin();
		}
	}, [user]);

	if (isLoading) return <Spinner />;
	return user && isAdmin ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default AdminRoute;
