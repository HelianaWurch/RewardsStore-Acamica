import React, { useContext, useState } from "react";

import { getReedemProducts } from "../../../services/api/api";
import { UserContext } from "../../../contexts/UserContext";

import ModalMain from "../../../components/ModalMain";
import RedeemStatus from "../../../components/ModalContent/RedeemStatus";

import { Card, Button, Container, Row, Col } from "react-bootstrap";

import bagIcon from "../../../services/img/icons/buy-blue.svg";
import bagIconHover from "../../../services/img/icons/buy-white.svg";
import iconCoin from "../../../services/img/icons/coin.svg";

const HoverProductCard = ({ productInfo, setOpenModal, userInfo, setUserInfo, setRedeemOk }) => {
	return (
		<Card.Body
			style={{
				width: "100%",
				opacity: "90%",
				position: "absolute",
				left: 0,
				top: 0,
				bottom: 0,
				backgroundColor: "#0ad4fa",
			}}
		>
			{userInfo.points >= productInfo.price ? (
				<Container className="py-5">
					<Row>
						<Col
							style={{
								width: "25%",
								opacity: "90%",
								position: "absolute",
								top: 5,
								right: -10,
							}}
						>
							{" "}
							<img src={bagIconHover} alt="icon-bag" />
						</Col>
						<Col className="d-flex justify-content-center">
							<Card.Title>
								{productInfo.price}
								{""} <img src={iconCoin} alt="coins" />
							</Card.Title>
						</Col>
					</Row>
					<Row>
						<Button
							variant="secondary"
							onClick={() => {
								const redeemStatus = getReedemProducts(productInfo.id);
								let newPoints = userInfo.points - productInfo.price;
								setUserInfo({ ...userInfo, points: newPoints });
								setRedeemOk(redeemStatus);
								setOpenModal(true);
							}}
						>
							Redeem now
						</Button>
					</Row>{" "}
				</Container>
			) : (
				<Container className="py-5 ">
					<Row>
						<Col className="d-flex justify-content-center">
							<Card.Title>
								You Need: {""}
								{Math.abs(userInfo.points - productInfo.price)} {""}
								<img src={iconCoin} alt="coins" />
							</Card.Title>
						</Col>
					</Row>
				</Container>
			)}
		</Card.Body>
	);
};

function Product(props) {
	const [userInfo, setUserInfo] = useContext(UserContext);

	const [isHovering, setIsHovering] = useState(false);
	const [redeemOk, setRedeemOk] = useState(false);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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

	return (
		<Card
			style={{ width: "18rem", cursor: "pointer" }}
			onMouseEnter={handleMouseOver}
			onMouseLeave={handleMouseOut}
		>
			{isHovering && (
				<HoverProductCard
					productInfo={productInfo}
					setOpenModal={handleShow}
					userInfo={userInfo}
					setUserInfo={setUserInfo}
					setRedeemOk={setRedeemOk}
				/>
			)}
			<Card.Img variant="top" src={productInfo.imgUrl} />
			<Card.Body>
				{!isHovering && (
					<Col
						style={{
							width: "25%",
							opacity: "90%",
							position: "absolute",
							top: 5,
							right: -25,
						}}
					>
						{" "}
						<img src={bagIcon} alt="icon-bag" />
					</Col>
				)}
				<Card.Text style={{ marginBottom: "-0.1rem" }}>{productInfo.category}</Card.Text>
				<Card.Title>{productInfo.name}</Card.Title>
			</Card.Body>
			{show && (
				<ModalMain show={show} onHide={handleClose} title="Redeem Product" content={modalContent()} />
			)}
		</Card>
	);
}

export default Product;
