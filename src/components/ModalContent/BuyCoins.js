import React from "react";
import iconCoin from "../../services/img/icons/coin.svg";
import { postCoins } from "../../services/api/api";

function BuyCoins(userInfo, setUserInfo) {
	function handleCoins(amount) {
		postCoins(amount, userInfo, setUserInfo);
	}

	return (
		<div className="modal-body d-flex justify-content-center">
			<button type="button" className="btn btn-coins grl-font-style" onClick={() => handleCoins(1000)}>
				1000
				<img className="ml-2 mt-1" src={iconCoin} alt="coin" />
			</button>
			<button type="button" className="btn btn-coins grl-font-style" onClick={() => handleCoins(5000)}>
				5000 <img className="ml-2 mt-1" src={iconCoin} alt="coin" />
			</button>
			<button type="button" className="btn btn-coins grl-font-style" onClick={() => handleCoins(7500)}>
				7500 <img className="ml-2 mt-1" src={iconCoin} alt="coin" />
			</button>
		</div>
	);
}

export default BuyCoins;
