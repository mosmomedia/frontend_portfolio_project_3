import { createContext, useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../../config/firebase';
import Spinner from '../../components/shared/Spinner';

const AuthContext = createContext();

function AuthProvider({ children }) {
	const [user, loading] = useAuthState(firebase.auth);

	if (loading) {
		return <Spinner />;
	}

	return <AuthContext.Provider value={user}>{children} </AuthContext.Provider>;
}

function useAuthContext() {
	return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
