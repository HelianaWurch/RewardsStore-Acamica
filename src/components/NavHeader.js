import React, { useContext, useState } from "react";
import iconCoin from "../services/img/icons/coin.svg";
import { Link } from "react-router-dom";

import { Nav, Navbar, Container, Badge, Button } from "react-bootstrap";

import ModalMain from "./ModalMain";
import BuyCoins from "./ModalContent/BuyCoins";

import { UserContext } from "../contexts/UserContext";

function NavHeader() {
	const [userInfo] = useContext(UserContext);
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	function modalContent() {
		return <BuyCoins />;
	}

	return (
		<Navbar fixed="top" bg="dark" variant="dark" expand="lg">
			<ModalMain show={show} onHide={handleClose} title="Buy More Coins..." content={modalContent()} />

			<Container>
				<Navbar.Brand href={process.env.PUBLIC_URL + "/"}>{userInfo.name}</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Badge bg="light">
					<Button variant="light" onClick={handleShow}>
						{userInfo.points}
					</Button>
					<img className="ml-2" src={iconCoin} alt="coin" />
				</Badge>
				<Navbar.Collapse id="basic-navbar-nav">
					<Container>
						<Nav className="me-auto text-center justify-content-end">
							<Nav.Link as={Link} to={process.env.PUBLIC_URL + "/"}>
								Home
							</Nav.Link>
							<Nav.Link as={Link} to={process.env.PUBLIC_URL + "/history"}>
								History
							</Nav.Link>
							<Nav.Link variant="dark" onClick={handleShow}>
								Buy Coins
							</Nav.Link>
						</Nav>
					</Container>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavHeader;
