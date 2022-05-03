function MyClassReducer(state, action) {
	switch (action.type) {
		case 'GET_MY_CLASSES':
			return {
				...state,
				myClassList: action.payload.allClassList,
				isLoading: false,
			};

		case 'LOADING':
			return { ...state, isLoading: true };

		default:
			throw new Error();
	}
}

export default MyClassReducer;
