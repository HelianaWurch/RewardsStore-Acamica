import React from "react";

function Pagination({ productsPerPage, totalProducts, paginate }) {
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div>
			<nav className="d-flex justify-content-center justify-content-md-end">
				<ul className="pagination">
					{pageNumbers.map((number) => (
						<li key={number} className="page-item">
							<a onClick={() => paginate(number)} href="#" className="page-link">
								{number}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}

export default Pagination;
