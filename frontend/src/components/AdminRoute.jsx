import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../config/firebase';

import Spinner from './shared/Spinner';

const AdminRoute = () => {
	const [user, loading] = useAuthState(firebase.auth);

	const [isAdmin, setIsAdmin] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const checkAdmin = async () => {
			if (user) {
				try {
					const docRef = firebase.doc(firebase.db, 'users', user.uid);
					const docSnap = await firebase.getDoc(docRef);
					if (docSnap.data().isAdmin) {
						setIsAdmin(true);
					} else {
						setIsAdmin(false);
					}
				} catch (error) {
					console.log(error);
				}
			} else {
				setIsAdmin(false);
			}

			setIsLoading(false);
		};

		if (!loading) {
			checkAdmin();
		}
	}, [loading]);

	if (isLoading || loading) return <Spinner />;

	return user && isAdmin ? <Outlet /> : <Navigate to="/admin/sign-in" />;
};

export default AdminRoute;
