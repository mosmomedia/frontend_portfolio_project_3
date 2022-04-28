import { createContext, useReducer, useContext } from 'react';
import BookReducer from './BookReducer';

const BookContext = createContext();

function BookProvider({ children }) {
	const initialState = {
		allBooksList: [],
		isLoading: false,
	};

	const [state, dispatch] = useReducer(BookReducer, initialState);

	return (
		<BookContext.Provider value={{ ...state, dispatch }}>
			{children}
		</BookContext.Provider>
	);
}

function useBookContext() {
	return useContext(BookContext);
}

export { BookProvider, useBookContext };
