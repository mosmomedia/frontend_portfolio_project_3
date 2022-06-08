function AdminReducer(state, action) {
	switch (action.type) {
		case 'GET_MY_CLASSES':
			return {
				...state,
				admin: action.payload.userObjectId,
				myClassList: action.payload.myClassArr,
				isLoading: false,
			};

		case 'ADD_NEW_CLASS':
			return {
				...state,
				myClassList: action.payload,
				isLoading: false,
			};

		case 'GET_MY_CURRENT_CLASS':
			return {
				...state,
				isLoading: false,
			};

		case 'LOADING':
			return { ...state, isLoading: true };

		case 'OFF_LOADING':
			return { ...state, isLoading: false };

		default:
			return new Error();
	}
}

export default AdminReducer;
