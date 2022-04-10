import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk/es/types";
import { RootState } from "../store";

const FAKE_API_URL = "https://jsonplaceholder.typicode.com/users";

const userActions = {
	GET_USERS: "GET_USERS",
	GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
	GET_USERS_ERROR: "GET_USERS_ERROR",

	getUsers: () => {
		return (dispatch: ThunkDispatch<RootState, void, Action>) => {
			dispatch({ type: userActions.GET_USERS });
			return fetch(FAKE_API_URL)
				.then((users) => users.json())
				.then((users) => dispatch({ type: userActions.GET_USERS_SUCCESS, payload: users }))
				.catch((err) => dispatch({ type: userActions.GET_USERS_ERROR, payload: err }));
		};
	},
};

export default userActions;
