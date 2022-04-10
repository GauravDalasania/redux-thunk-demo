import { Route, Routes } from "react-router-dom";
import Users from "../components/users/Users";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Users />} />
		</Routes>
	);
};

export default AppRoutes;
