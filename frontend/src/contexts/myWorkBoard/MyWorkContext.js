import { createContext, useReducer, useContext } from 'react';
import MyWorkReducer from './MyWorkReducer';

const MyWorkContext = createContext();

function MyWorkProvider({ children }) {
	const initialState = {
		userObjectId: null,
		myWorkList: [],
		currentWork: null,
		isLoading: false,
		isAdmin: false,
		isTutor: false,
	};

	const [state, dispatch] = useReducer(MyWorkReducer, initialState);

	return (
		<MyWorkContext.Provider value={{ ...state, dispatch }}>
			{children}
		</MyWorkContext.Provider>
	);
}

function useMyWorkContext() {
	return useContext(MyWorkContext);
}

export { MyWorkProvider, useMyWorkContext };
