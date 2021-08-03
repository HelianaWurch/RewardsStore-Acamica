import React, { useState, useEffect } from "react";
import ItemsPagination from "../../components/ItemsPagination";
import { getHistory } from "../../services/api/api";

import { Container, Row, Col, ListGroup } from "react-bootstrap";

function History() {
	const [productsPerPage] = useState(25);
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
		<Container className="mt-4 ">
			<Row className="text-center">
				<Col sm={12} md={6} lg={6}>
					<Container className="d-flex justify-content-center justify-content-md-start">
						<h5>HISTORY | </h5>
					</Container>
				</Col>

				<Col sm={12} md={6} lg={6}>
					<ItemsPagination
						productsPerPage={productsPerPage}
						totalProducts={historyData.length}
						paginate={paginate}
					/>
				</Col>
			</Row>
			<Container>
				<Row>
					<ListGroup>
						{currentProducts.map((product) => (
							<ListGroup.Item key={product.createDate}>
								<Row>
									<Col xs lg="10">
										{product.name}
									</Col>
									<Col className="text-end">${product.cost}</Col>
								</Row>
							</ListGroup.Item>
						))}
					</ListGroup>
				</Row>
				<Container className="text-end">
					<p className="text-secondary mt-2" style={{ fontWeight: 700 }}>
						Page: {currentPage}
					</p>
				</Container>
			</Container>
		</Container>
	);
}

export default History;
