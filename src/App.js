import "bootstrap/dist/css/bootstrap.min.css";
import NavHeader from "./components/NavHeader";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

import { UserContextProvider } from "./contexts/UserContext";

function App() {
	return (
		<Router>
			<div className="App">
				<UserContextProvider>
					<NavHeader />
					<Header />
					<Main />
				</UserContextProvider>
			</div>
		</Router>
	);
}

export default App;
