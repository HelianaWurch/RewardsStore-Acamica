import "./styles/styles.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import { UserContextProvider } from "./contexts/UserContext";

function App() {
	return (
		<div className="App">
			<UserContextProvider>
				<Nav />
			</UserContextProvider>
			<Header />
			<Main />
		</div>
	);
}

export default App;
