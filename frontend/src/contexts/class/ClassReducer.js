function ClassReducer(state, action) {
	switch (action.type) {
		case 'GET_ALL_CLASSES':
			return {
				...state,
				classDB: action.payload,
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

export default ClassReducer;
