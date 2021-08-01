import React, { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import { getHistory } from "../../services/api/api";

function History() {
	const [productsPerPage, setProductsPerPage] = useState(10);
	const [currentPage, setCurrentPage] = useState(1);
	const [historyData, setHistoryData] = useState([]);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = historyData.slice(indexOfFirstProduct, indexOfLastProduct);

	const paginate = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	useEffect(() => {
		getHistory(setHistoryData);
	}, []);

	return (
		<section className="container">
			<div className="container row d-flex justify-content-between mt-4">
				<div className="flex-fill d-none d-lg-block mt-2">
					<h5>HISTORY |</h5>
				</div>
				<Pagination
					className="flex-grow-1"
					productsPerPage={productsPerPage}
					totalProducts={historyData.length}
					paginate={paginate}
				/>
			</div>

			<div className="my-3 row">
				<ul>
					{currentProducts.map((product) => (
						<li key={product.createDate}>{product.name}</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default History;
