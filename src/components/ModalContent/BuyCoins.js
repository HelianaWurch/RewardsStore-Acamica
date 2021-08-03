import React, { useContext } from "react";
import iconCoin from "../../services/img/icons/coin.svg";
import { postCoins } from "../../services/api/api";

import { UserContext } from "../../contexts/UserContext";
import { Container, Button, Row, Col } from "react-bootstrap";

function BuyCoins() {
	const [userInfo, setUserInfo] = useContext(UserContext);
	function handleCoins(amount) {
		postCoins(amount, userInfo, setUserInfo);
	}

	return (
		<Container className="d-flex justify-content-center">
			<Row>
				<Col>
					<Button variant="outline-info" onClick={() => handleCoins(1000)}>
						1000 <img className="ml-2 mt-1" src={iconCoin} alt="coin" />
					</Button>
				</Col>
				<Col>
					<Button variant="outline-info" onClick={() => handleCoins(5000)}>
						5000 <img className="ml-2 mt-1" src={iconCoin} alt="coin" />
					</Button>
				</Col>
				<Col>
					<Button variant="outline-info" onClick={() => handleCoins(7500)}>
						7500 <img className="ml-2 mt-1" src={iconCoin} alt="coin" />
					</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default BuyCoins;
