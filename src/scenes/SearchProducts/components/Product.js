import React, { useContext, useState } from "react";

import { getReedemProducts } from "../../../services/api/api";
import { UserContext } from "../../../contexts/UserContext";

import Modal from "../../../components/Modal";
import RedeemStatus from "../../../components/ModalContent/RedeemStatus";

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

const HoverProductCard = ({ productInfo, redeemProduct, setOpenModal, userCoins }) => {
	return (
		<div className="card-hover" id="card-btn-container">
			{userCoins >= productInfo.price ? (
				<div className="card-body-hover">
					<div href={productInfo.imgUrl} className="icon-container">
						<img src={bagIconHover} className="card-img-top icon-bag-hover" alt="icon-bag" />
					</div>
					<div className="card-container">
						<div>
							<h2 className="card-text">{productInfo.price}</h2>
						</div>
						<div>
							<img className="ml-2 card-hover-coin" src={iconCoin} alt="coins" />
						</div>
					</div>
					<div className="card-container">
						<button
							className="card-btn"
							type="button"
							onClick={() => {
								redeemProduct(productInfo.id, productInfo.price, userCoins);
								setOpenModal(true);
							}}
						>
							Redeem now
						</button>
					</div>
				</div>
			) : (
				<div className="card-body-hover bg-dark">
					<div className="card-container">
						<div className="card-btn text-center">You need:</div>
					</div>
					<div className="card-container">
						<div>
							<h2 className="card-text">{Math.abs(userCoins - productInfo.price)}</h2>
						</div>
						<div>
							<img className="ml-2 card-hover-coin" src={iconCoin} alt="coins" />
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

function Product(props) {
	const [userInfo, setUserInfo, userCoins] = useContext(UserContext);

	const [isHovering, setIsHovering] = useState(false);
	const [redeemOk, setRedeemOk] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	function modalContent() {
		return <RedeemStatus redeemOk={redeemOk} />;
	}

	const productInfo = {
		id: props.product._id,
		name: props.product.name,
		imgUrl: props.product.img.url,
		price: props.product.cost,
		category: props.product.category,
	};

	const handleMouseOver = () => {
		setIsHovering(true);
	};
	const handleMouseOut = () => {
		setIsHovering(false);
	};

	function redeemProduct(id, cost, userCoins) {
		const redeemStatus = getReedemProducts(id);
		const userNewCoins = userCoins - cost;
		setUserInfo({ ...userInfo, points: userNewCoins });
		setRedeemOk(redeemStatus);
	}

	return (
		<div
			className="card col-lg-3 col-md-5 col-12 m-2"
			onMouseEnter={handleMouseOver}
			onMouseLeave={handleMouseOut}
		>
			{openModal && <Modal title="Product" closeModal={setOpenModal} content={modalContent()} />}
			{isHovering && (
				<HoverProductCard
					productInfo={productInfo}
					redeemProduct={redeemProduct}
					redeemOk={redeemOk}
					setOpenModal={setOpenModal}
					userCoins={userCoins}
				/>
			)}
			<HoverableProductCard productInfo={productInfo} />
		</div>
	);
}

export default Product;
