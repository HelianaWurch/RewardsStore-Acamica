import React from "react";
import { Pagination, Container } from "react-bootstrap";

function ItemsPagination({ productsPerPage, totalProducts, paginate }) {
	let pageNumbers = [];
	for (let number = 1; number <= Math.ceil(totalProducts / productsPerPage); number++) {
		pageNumbers.push(
			<Pagination.Item
				key={number}
				onClick={() => {
					paginate(number);
				}}
			>
				{number}
			</Pagination.Item>
		);
	}

	return (
		<Container className="d-flex justify-content-center justify-content-md-end">
			<Pagination>{pageNumbers}</Pagination>
		</Container>
	);
}

export default ItemsPagination;
