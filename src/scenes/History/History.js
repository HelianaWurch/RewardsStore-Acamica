import React, { useState, useEffect } from "react";
import Pagination from "../../components/Pagination";
import { getHistory } from "../../services/api/api";

function History() {
	const [productsPerPage] = useState(20);
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
			<div className="container row d-flex justify-content-center justify-content-md-between mt-4">
				<div className="flex-fill d-none d-lg-block mt-2">
					<h5>HISTORY |</h5>
				</div>
				<Pagination
					productsPerPage={productsPerPage}
					totalProducts={historyData.length}
					paginate={paginate}
				/>
			</div>
			<div className="container d-flex justify-content-center list-group my-3">
				<ul>
					{currentProducts.map((product) => (
						<li className="list-group-item" key={product.createDate}>
							{product.name}
						</li>
					))}
				</ul>
				<h6 className="text-right text-secondary">Page: {currentPage}</h6>
			</div>
		</section>
	);
}

export default History;
