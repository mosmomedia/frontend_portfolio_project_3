import { createContext, useReducer, useContext } from 'react';
import AdminReducer from './AdminReducer';

const AdminContext = createContext();

function AdminProvider({ children }) {
	const initialState = {
		admin: null,
		myClassList: [],
		isLoading: false,
	};

	const [state, dispatch] = useReducer(AdminReducer, initialState);

	return (
		<AdminContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AdminContext.Provider>
	);
}

function useAdminContext() {
	return useContext(AdminContext);
}

export { AdminProvider, useAdminContext };
