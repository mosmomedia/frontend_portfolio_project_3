import { createContext, useContext, useReducer } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import AuthReducer from './AuthReducer';
import firebase from '../../config/firebase';
import Spinner from '../../components/shared/Spinner';

const AuthContext = createContext();

function AuthProvider({ children }) {
	const [user, loading] = useAuthState(firebase.auth);

	const initialState = {
		myClassList: [],
		currentClass: null,
		isLoading: false,
		isAdmin: false,
		isTutor: false,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	if (loading) {
		return <Spinner />;
	}

	return (
		<AuthContext.Provider value={{ user, loading, ...state, dispatch }}>
			{children}{' '}
		</AuthContext.Provider>
	);
}

function useAuthContext() {
	return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
