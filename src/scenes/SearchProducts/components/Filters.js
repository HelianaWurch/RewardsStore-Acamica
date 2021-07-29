import React, { useContext } from "react";
import { FiltersContext } from "../../../contexts/FiltersContext";

function Filters() {
	const [filters, setFilters] = useContext(FiltersContext);

	function handleFilters(event) {
		let { name, value } = event.target;
		const newData = { ...filters, [name]: value };
		setFilters(newData);
	}

	return (
		<div className=" container-filters col-md-6 col-12 ml-4">
			<ul className="nav">
				<li className="nav-item">
					<h5 className="mt-2">SORT BY | </h5>
				</li>
				<li className="nav-item">
					<label className="btn btn-secondary">
						<input
							className="for-check-input mr-2"
							type="radio"
							name="price"
							id="all-products"
							value="all-products"
							onChange={handleFilters}
						/>
						All
					</label>
				</li>
				<li className="nav-item">
					<label className="btn btn-secondary">
						<input
							className="for-check-input mr-2"
							type="radio"
							name="price"
							id="lowest"
							value="lowest"
							onChange={handleFilters}
						/>
						Lowest Price
					</label>
				</li>
				<li className="nav-item">
					<label className="btn btn-secondary">
						<input
							className="for-check-input mr-2"
							type="radio"
							name="price"
							id="highest"
							value="highest"
							onChange={handleFilters}
						/>
						Highest Price
					</label>
				</li>
			</ul>
		</div>
	);
}

export default Filters;
