import React, { useContext, useState } from "react";
import Filters from "./components/Filters";
import Product from "./components/Product";
import Pagination from "../../components/Pagination";
import { AllProductsContext } from "../../contexts/AllProductsContext";

function SearchProducts() {
	const [isLoading, products] = useContext(AllProductsContext);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(9);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<section className="container">
			<div className="container-fluid d-flex justify-content-center mt-4">
				<Pagination
					productsPerPage={productsPerPage}
					totalProducts={products.length}
					paginate={paginate}
				/>
			</div>
			<div className="justify-content-around my-3 row">
				{currentProducts.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
		</section>
	);
}

export default SearchProducts;
