import React from "react";
import SearchProducts from "../scenes/SearchProducts/SearchProducts";
import History from "../scenes/History/History";
import { AllProductsContextProvider } from "../contexts/AllProductsContext";
import { Route, Switch } from "react-router-dom";

function Main() {
	return (
		<main>
			<Switch>
				<Route exact path="/">
					<AllProductsContextProvider>
						<SearchProducts />
					</AllProductsContextProvider>
				</Route>
				<Route path="/history">
					<History />
				</Route>
			</Switch>
		</main>
	);
}

export default Main;
