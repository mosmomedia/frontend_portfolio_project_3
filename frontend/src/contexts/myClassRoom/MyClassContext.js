import { createContext, useReducer, useContext } from 'react';
import MyClassReducer from './MyClassReducer';

const MyClassContext = createContext();

function MyClassProvider({ children }) {
	const initialState = {
		myClassList: [],
		currentClass: null,
		isLoading: false,
		isAdmin: false,
		isTutor: false,
	};

	const [state, dispatch] = useReducer(MyClassContext, initialState);

	return (
		<MyClassContext.Provider value={{ ...state, dispatch }}>
			{children}
		</MyClassContext.Provider>
	);
}

function useClassContext() {
	return useContext(MyClassReducer);
}

export { MyClassProvider, useClassContext };
