import React from "react";
import { Container } from "react-bootstrap";

function RedeemStatus({ redeemOk }) {
	return (
		<Container className="d-flex justify-content-center">
			{!redeemOk === true ? <h4>SUCCESS!</h4> : <h4>Error! Something happened! Try Again!</h4>}
		</Container>
	);
}

export default RedeemStatus;
