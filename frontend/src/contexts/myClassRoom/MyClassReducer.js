function MyClassReducer(state, action) {
	switch (action.type) {
		case 'GET_MY_CLASSES':
			return {
				...state,
				userObjectId: action.payload.userObjectId,
				myClassList: action.payload.myClasses,
				isAdmin: action.payload.isAdmin,
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
