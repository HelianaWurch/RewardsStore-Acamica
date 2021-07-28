import React, { useContext, useState } from "react";
import iconCoin from "../services/img/icons/coin.svg";
import img2 from "../services/img/aerolab-logo.svg";
import { Link } from "react-router-dom";

import ModalCoins from "./ModalCoins";

import { UserContext } from "../contexts/UserContext";

function Nav() {
	const [isLoading, userInfo] = useContext(UserContext);
	const [openModal, setOpenModal] = useState(false);

	return (
		<div>
			{openModal && <ModalCoins closeModal={setOpenModal} />}
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="inline-block navbar-brand">
					<div className="container py-2">
						<span className="d-flex">
							<h6 className="pt-2">{userInfo.name}</h6>
							<span className="badge badge-light ml-2 pl-3">
								<button
									className="btn-user-coins"
									onClick={() => {
										setOpenModal(true);
									}}
								>
									{userInfo.points}{" "}
								</button>
								<img className="ml-2" src={iconCoin} alt="coin" />
							</span>
						</span>
					</div>
				</div>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
					<div className="navbar-nav nav-box">
						<Link className="grl-font-style nav-link-a" to="/">
							HOME
						</Link>
						<Link className="grl-font-style  nav-link-a" to="/history">
							HISTORY
						</Link>
						<button
							className="grl-font-style  nav-link-a btn-buy-coins"
							onClick={() => {
								setOpenModal(true);
							}}
						>
							BUY COINS
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Nav;
