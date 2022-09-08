import { createContext, useReducer, useContext } from 'react';
import AuthReducer from './AuthReducer';

const AuthContext = createContext();

function AuthProvider({ children }) {
	const initialState = {
		user: null,
		myClasses: [],
		isAdmin: null,
		isLoading: false,
	};

	const [state, dispatch] = useReducer(AuthReducer, initialState);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuthContext() {
	return useContext(AuthContext);
}

export { AuthProvider, useAuthContext };
