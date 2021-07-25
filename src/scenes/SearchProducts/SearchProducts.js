import React, { useContext } from "react";
import Filters from "./components/Filters";
import Product from "./components/Product";
import { AllProductsContext } from "../../contexts/AllProductsContext";

function SearchProducts() {
	const { isLoading, products } = useContext(AllProductsContext);

	console.log(products);
	return (
		<section className="container">
			<div>
				<Filters />
			</div>
			<div className="justify-content-around my-3 row">
				{products.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
		</section>
	);
}

export default SearchProducts;
