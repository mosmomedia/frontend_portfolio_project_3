import { createContext, useReducer, useContext } from 'react';
import ClassReducer from './ClassReducer';

const ClassContext = createContext();

function ClassProvider({ children }) {
	const initialState = {
		classDB: [],
		allClassList: [],
		currentClass: null,
		isLoading: true,
	};

	const [state, dispatch] = useReducer(ClassReducer, initialState);

	return (
		<ClassContext.Provider value={{ ...state, dispatch }}>
			{children}
		</ClassContext.Provider>
	);
}

function useClassContext() {
	return useContext(ClassContext);
}

export { ClassProvider, useClassContext };
