import React from "react";
import Filters from "./components/Filters";
import Product from "./components/Product";

function SearchProducts() {
	return (
		<section className="container">
			<div>
				<Filters />
			</div>
			<div className="justify-content-around my-3 row">
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</section>
	);
}

export default SearchProducts;
