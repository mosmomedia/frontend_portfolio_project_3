function MyWorkReducer(state, action) {
	switch (action.type) {
		case 'GET_MY_WORKS':
			return {
				...state,
				userObjectId: action.payload.userObjectId,
				myWorkList: action.payload.myWorksArr,
				isLoading: false,
			};

		case 'UPDATE_MY_WORKS':
			return {
				...state,
				myWorkList: action.payload,
				currentWork: null,
				isLoading: false,
			};

		case 'ADD_NEW_WORK':
			return {
				...state,
				myWorkList: action.payload,
				isLoading: false,
			};

		case 'GET_MY_CURRENT_WORK':
			return {
				...state,
				currentWork: action.payload,
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
