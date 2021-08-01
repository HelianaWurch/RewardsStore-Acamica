import React, { useContext, useState, useEffect } from "react";
import Filters from "./components/Filters";
import Product from "./components/Product";
import Pagination from "../../components/Pagination";
import { AllProductsContext } from "../../contexts/AllProductsContext";
import { FiltersContext } from "../../contexts/FiltersContext";

function SearchProducts() {
	const [products] = useContext(AllProductsContext);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(12);
	const [filters] = useContext(FiltersContext);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	function sortPrice(a, b) {
		if (filters.price === "lowest") {
			return a.cost - b.cost;
		} else if (filters.price === "highest") {
			return b.cost - a.cost;
		} else {
			return 0;
		}
	}

	function handleFilters() {
		const productsToOrder = [...products];
		setFilteredProducts(productsToOrder.sort(sortPrice));
	}

	useEffect(() => {
		handleFilters();
		// eslint-disable-next-line
	}, [products, filters]);

	return (
		<section className="container">
			<div className="container d-flex row justify-content-md-between justify-content-center mt-4">
				<div className="d-none d-lg-block mt-2">
					<h5>SORT BY | </h5>
				</div>
				<Filters />
				<Pagination
					productsPerPage={productsPerPage}
					totalProducts={products.length}
					paginate={paginate}
				/>
			</div>
			<div className="justify-content-center my-3 row">
				{currentProducts.map((product) => (
					<Product key={product._id} product={product} />
				))}
			</div>
			<h6 className="text-right text-secondary">
				Page: <strong>{currentPage}</strong>
			</h6>
		</section>
	);
}

export default SearchProducts;
