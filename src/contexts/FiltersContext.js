import React, { useState, createContext } from "react";

const FiltersContext = createContext();

function FiltersContextProvider({ children }) {
	const [filters, setFilters] = useState({
		price: "all-products",
	});

	return <FiltersContext.Provider value={[filters, setFilters]}>{children}</FiltersContext.Provider>;
}

export { FiltersContextProvider, FiltersContext };
