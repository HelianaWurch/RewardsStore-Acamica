import React, { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api/api";

const AllProductsContext = createContext();

function AllProductsContextProvider({ children }) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts(setProducts);
	}, []);

	return <AllProductsContext.Provider value={[products]}>{children}</AllProductsContext.Provider>;
}

export { AllProductsContextProvider, AllProductsContext };
