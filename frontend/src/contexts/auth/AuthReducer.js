function AuthReducer(state, action) {
	switch (action.type) {
		case 'Set_LoggedIn':
			return {
				...state,
				user: action.payload.user,
				isAdmin: action.payload.isAdmin,
				myClasses: action.payload.myClasses,
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

export default AuthReducer;
