import React from "react";
import SearchProducts from "../scenes/SearchProducts/SearchProducts";
import History from "../scenes/History/History";
import { AllProductsContextProvider } from "../contexts/AllProductsContext";
import { FiltersContextProvider } from "../contexts/FiltersContext";
import { Route, Switch } from "react-router-dom";

function Main() {
	return (
		<main>
			<Switch>
				<Route exact path={process.env.PUBLIC_URL + "/"}>
					<AllProductsContextProvider>
						<FiltersContextProvider>
							<SearchProducts />
						</FiltersContextProvider>
					</AllProductsContextProvider>
				</Route>
				<Route path={process.env.PUBLIC_URL + "/"}>
					<History />
				</Route>
			</Switch>
		</main>
	);
}

export default Main;
