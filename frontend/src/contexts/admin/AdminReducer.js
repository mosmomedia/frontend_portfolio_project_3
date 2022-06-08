function AdminReducer(state, action) {
	switch (action.type) {
		case 'GET_MY_CLASSES':
			return {
				...state,
				admin: action.payload.userObjectId,
				myClassList: action.payload.myClassArr,
				isLoading: false,
			};

		case 'GET_MY_CURRENT_CLASS':
			return {
				...state,
				isLoading: false,
			};

		case 'LOADING':
			return {
				...state,
				isLoading: true,
			};
		default:
			return new Error();
	}
}

export default AdminReducer;
