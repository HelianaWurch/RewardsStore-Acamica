import React, { useState } from "react";
import bagIcon from "../../../services/img/icons/buy-blue.svg";
import bagIconHover from "../../../services/img/icons/buy-white.svg";
import iconCoin from "../../../services/img/icons/coin.svg";

const HoverableProductCard = ({ productInfo }) => {
	return (
		<div>
			<div href={productInfo.imgUrl} className="icon-container">
				<img src={bagIcon} className="card-img-top icon-bag" alt="..." />
			</div>
			<div className="card-img">
				<img src={productInfo.imgUrl} className="card-img-top" alt="..." />
			</div>
			<div className="card-body">
				<hr></hr>
				<p className="card-text card-category">{productInfo.category}</p>
				<h5 className="card-title">{productInfo.name}</h5>
			</div>
		</div>
	);
};

const HoverProductCard = ({ productInfo }) => {
	return (
		<div className="card-hover">
			<div href={productInfo.imgUrl} className="icon-container">
				<img src={bagIconHover} className="card-img-top icon-bag-hover" alt="..." />
			</div>
			<div className="card-body-hover">
				<div className="card-container">
					<div>
						<h2 className="card-text">{productInfo.price}</h2>
					</div>
					<div>
						<img className="ml-2 card-hover-coin" src={iconCoin} alt="..." />
					</div>
				</div>
				<div className="card-container">
					<button className="card-btn">Redeem now</button>
				</div>
			</div>
		</div>
	);
};

function Product(props) {
	const [isHovering, setIsHovering] = useState(false);
	const handleMouseOver = () => {
		setIsHovering(true);
	};
	const handleMouseOut = () => {
		setIsHovering(false);
	};

	const productInfo = {
		id: props.product._id,
		name: props.product.name,
		imgUrl: props.product.img.url,
		price: props.product.cost,
		category: props.product.category,
	};

	return (
		<div
			className="card col-lg-3 col-md-5 col-12 m-2"
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			{isHovering ? (
				<div>
					<HoverableProductCard productInfo={productInfo} />
					<HoverProductCard productInfo={productInfo} />
				</div>
			) : (
				<div>
					<HoverableProductCard productInfo={productInfo} />
				</div>
			)}
		</div>
	);
}

export default Product;
