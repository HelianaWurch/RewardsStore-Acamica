import React, { useContext } from "react";
import { FiltersContext } from "../../../contexts/FiltersContext";

import { Form } from "react-bootstrap";

function Filters() {
	const [filters, setFilters] = useContext(FiltersContext);

	function handleFilters(event) {
		let { name, value } = event.target;
		const newData = { ...filters, [name]: value };
		setFilters(newData);
	}

	return (
		<Form onChange={handleFilters}>
			<Form.Check
				inline
				label="All"
				name="price"
				type="radio"
				id="all-products"
				value="all-products"
			/>
			<Form.Check inline label="Lowest Price" name="price" type="radio" id="lowest" value="lowest" />
			<Form.Check
				inline
				label="Highest Price"
				name="price"
				type="radio"
				id="highest"
				value="highest"
			/>
		</Form>
	);
}

export default Filters;
