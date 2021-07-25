import React from "react";
import SearchProducts from "../scenes/SearchProducts/SearchProducts";
import { AllProductsContextProvider } from "../contexts/AllProductsContext";

function Main() {
	return (
		<main>
			<AllProductsContextProvider>
				<SearchProducts />
			</AllProductsContextProvider>
		</main>
	);
}

export default Main;
