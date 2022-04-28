function BookReducer(state, action) {
	switch (action.type) {
		case 'GET_ALL_LIST':
			return {
				...state,
				allBooksList: action.payload,
				isLoading: false,
			};

		case 'LOADING':
			return { ...state, isLoading: true };

		default:
			throw new Error();
	}
}

export default BookReducer;
