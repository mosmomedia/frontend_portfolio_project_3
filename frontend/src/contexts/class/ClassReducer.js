function ClassReducer(state, action) {
	switch (action.type) {
		case 'FETCH_INIT_ALLCLASSES_USER':
			return {
				...state,
				classDB: action.payload.classDB,
				filteredList: action.payload.filteredClassDB,
				stateClassList: {
					...state.stateClassList,
					...action.payload.classState,
				},
				initStateClassList: {
					...state.stateClassList,
					...action.payload.classState,
				},
				adminInfo:
					action.payload.adminInfo && action.payload.adminInfo.isAdmin
						? action.payload.adminInfo
						: state.adminInfo,
				monthList: action.payload.monthsArr,

				isLoading: false,
			};

		case 'GET_INIT_FILTERED_LIST':
			return { ...state, stateClassList: state.initStateClassList };

		case 'SET_FILTERED_LIST':
			return { ...state, filteredList: action.payload };

		case 'SET_STATECLASSLIST':
			return {
				...state,
				stateClassList: {
					...state.stateClassList,
					[action.payload]: !state.stateClassList[action.payload],
				},
			};

		case 'SET_STATEDATELIST':
			return {
				...state,
				stateClassList: {
					...state.stateClassList,
					[action.payload.name]: +action.payload.value,
					...action.payload.getClassState,
				},
			};

		case 'SET_ADMIN':
			return { ...state, adminInfo: action.payload };

		case 'LOADING':
			return { ...state, isLoading: true };

		case 'OFF_LOADING':
			return { ...state, isLoading: false };

		default:
			throw new Error();
	}
}

export default ClassReducer;
