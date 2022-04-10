import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../redux/users/userActions";
import { RootState } from "../../redux/store";

const Users = () => {
	const dispatch = useDispatch();
	const { data } = useSelector((state: RootState) => state.userReducer);

	useEffect(() => {
		dispatch(userActions.getUsers());
	}, [dispatch]);

	return data.map((user: any) => {
		return <h3 key={user.id}> {user.name}</h3>;
	});
};

export default Users;
