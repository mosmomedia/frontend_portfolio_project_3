import { createContext, useReducer, useContext } from 'react';
import MyClassReducer from './MyClassReducer';

const MyClassContext = createContext();

function MyClassProvider({ children }) {
	const initialState = {
		userObjectId: null,
		isAdmin: null,
		myClassList: [],
		currentClass: null,
		isLoading: false,
	};

	const [state, dispatch] = useReducer(MyClassReducer, initialState);

	return (
		<MyClassContext.Provider value={{ ...state, dispatch }}>
			{children}
		</MyClassContext.Provider>
	);
}

function useMyClassContext() {
	return useContext(MyClassContext);
}

export { MyClassProvider, useMyClassContext };
