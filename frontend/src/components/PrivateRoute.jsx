import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../config/firebase';

import Spinner from '../components/shared/Spinner';

const PrivateRoute = () => {
	const [user, loading] = useAuthState(firebase.auth);

	if (loading) return <Spinner />;
	return user ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
