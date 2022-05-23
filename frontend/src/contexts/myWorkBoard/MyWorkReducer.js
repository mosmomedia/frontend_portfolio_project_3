function MyWorkReducer(state, action) {
	switch (action.type) {
		case 'GET_MY_WORKS':
			return {
				...state,
				userObjectId: action.payload.userObjectId,
				myWorkList: action.payload.myWorks,
				isLoading: false,
			};

		case 'GET_MY_CURRENT_WORK':
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

export default MyWorkReducer;
