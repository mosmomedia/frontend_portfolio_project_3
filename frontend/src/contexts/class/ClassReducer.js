function ClassReducer(state, action) {
	switch (action.type) {
		case 'GET_ALL_CLASSES':
			return {
				...state,
				allClassList: action.payload.allClassList,
				classDB: action.payload.classDB,
				isLoading: false,
			};

		case 'LOADING':
			return { ...state, isLoading: true };

		default:
			throw new Error();
	}
}

export default ClassReducer;
