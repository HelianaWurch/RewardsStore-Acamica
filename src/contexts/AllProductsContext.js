import React, { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api/api";

const AllProductsContext = createContext();

function AllProductsContextProvider({ children }) {
	const [isLoading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setLoading(true);
		getProducts(setProducts);
	}, []);

	return (
		<AllProductsContext.Provider value={[isLoading, products]}>
			{children}
		</AllProductsContext.Provider>
	);
}

export { AllProductsContextProvider, AllProductsContext };
