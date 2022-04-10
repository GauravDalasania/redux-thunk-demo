import userActions from "./userActions";

const initState = {
	data: [],
};

interface TAction {
	type: string;
	payload: any;
}

const reducer = (state = initState, action: TAction) => {
	switch (action.type) {
		case userActions.GET_USERS_SUCCESS:
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
