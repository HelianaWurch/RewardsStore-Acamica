import React from "react";

function RedeemStatus({ redeemOk }) {
	return (
		<div className="modal-body d-flex justify-content-center">
			{!redeemOk === true ? <h4>SUCCESS!</h4> : <h4>Error! Something happened! Try Again!</h4>}
		</div>
	);
}

export default RedeemStatus;
