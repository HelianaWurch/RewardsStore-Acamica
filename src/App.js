import "./styles/styles.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

import { UserContextProvider } from "./contexts/UserContext";

function App() {
	return (
		<Router>
			<div className="App">
				<UserContextProvider>
					<Nav />
				</UserContextProvider>
				<Header />
				<Main />
			</div>
		</Router>
	);
}

export default App;
