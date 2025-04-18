import { RouterProvider } from "react-router";
import "./App.css";
import router from "./Routing";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
	return (
		<>
			<ThemeProvider>
				<RouterProvider router={router} />
			</ThemeProvider>
		</>
	);
}

export default App;
