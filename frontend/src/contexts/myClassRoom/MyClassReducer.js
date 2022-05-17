function MyClassReducer(state, action) {
	switch (action.type) {
		case 'GET_MY_CLASSES':
			return {
				...state,
				myClassList: action.payload,
				isLoading: false,
			};

		case 'GET_MY_CURRENT_CLASS':
			return {
				...state,
				currentClass: action.payload,
				isLoading: false,
			};

		case 'LOADING':
			return { ...state, isLoading: true };

		case 'OFF_LOADING':
			return { ...state, isLoading: false };

		default:
			throw new Error();
	}
}

export default MyClassReducer;
