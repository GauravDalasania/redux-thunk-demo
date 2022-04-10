import { Provider } from "react-redux";
import store from "../redux/store";
import AppRoutes from "../routes/Routes";
import "./App.css";

function App() {
	return (
		<>
			<h1>This is Redux thunk demo with typescript</h1>
			<Provider store={store}>
				<AppRoutes />
			</Provider>
		</>
	);
}

export default App;
