import React, { useContext, useState, useEffect } from "react";
import Filters from "./components/Filters";
import Product from "./components/Product";
import ItemsPagination from "../../components/ItemsPagination";

import { Container, Row, Col } from "react-bootstrap";

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
		<Container className="mt-4 ">
			<Row className="text-center">
				<Col xs lg="2" sm={12} md={3}>
					<Container className="d-flex justify-content-center justify-content-md-start">
						<h5>SORT BY | </h5>
					</Container>
				</Col>
				<Col sm={12} md={6}>
					<Filters />
				</Col>
				<Col sm={12} md={3} lg={4}>
					<ItemsPagination
						productsPerPage={productsPerPage}
						totalProducts={products.length}
						paginate={paginate}
					/>
				</Col>
			</Row>
			<Container>
				<Row>
					{currentProducts.map((product) => (
						<Col key={product._id} className="mb-4 d-flex justify-content-center">
							<Product product={product} />
						</Col>
					))}
				</Row>
			</Container>
			<Container className="text-end">
				<p className="text-secondary mt-2" style={{ fontWeight: 700 }}>
					Page: {currentPage}
				</p>
			</Container>
		</Container>
	);
}

export default SearchProducts;
