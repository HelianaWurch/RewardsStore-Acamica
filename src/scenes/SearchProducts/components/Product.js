import React from "react";

function Product(props) {
	const productInfo = {
		id: props.product._id,
		name: props.product.name,
		imgUrl: props.product.img.url,
		price: props.product.cost,
		category: props.product.category,
	};

	return (
		<div className="card col-lg-3 col-md-5 col-12 m-2">
			<img src={productInfo.imgUrl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{productInfo.name}</h5>
				<p className="card-text">{productInfo.imgUrl}</p>
				<p className="card-text">{productInfo.id}</p>
				<p className="card-text">{productInfo.price}</p>
				<p className="card-text">{productInfo.category}</p>
				<a href={productInfo.imgUrl} className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export default Product;
