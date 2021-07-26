import React, { useContext } from "react";
import iconCoin from "../services/img/icons/coin.svg";
import img2 from "../services/img/aerolab-logo.svg";

import { UserContext } from "../contexts/UserContext";

function Nav() {
	const [isLoading, userInfo] = useContext(UserContext);

	console.log(userInfo);

	return (
		<nav className="container-fluid bg-dark text-light fixed-top">
			<div className="d-flex justify-content-between py-1 pl-2">
				<div className="py-3">
					<img src={img2} alt="..." />
				</div>
				<div className="row menu">
					<h6>Historial</h6>
					<h6>Buy Coins</h6>
				</div>
				<div className="inline-block">
					<div className="container py-2">
						<span className="d-flex pt-2 ml-2 pl-3">
							<h6 className="pt-2">{userInfo.name}</h6>
							<span className="badge badge-light ml-2 pl-3">
								{userInfo.points}
								<img className="ml-2" src={iconCoin} alt="..." />
							</span>
						</span>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
