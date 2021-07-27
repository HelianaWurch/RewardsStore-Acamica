import React, { useContext, useState } from "react";
import iconCoin from "../services/img/icons/coin.svg";
import img2 from "../services/img/aerolab-logo.svg";

import Modal from "./Modal";

import { UserContext } from "../contexts/UserContext";

function Nav() {
	const [isLoading, userInfo] = useContext(UserContext);

	const [openModal, setOpenModal] = useState(false);

	return (
		<nav className="container-fluid bg-dark text-light fixed-top">
			<div className="d-flex justify-content-between py-2 pl-2">
				<div className="py-4 pr-5 mr-5">
					<img src={img2} alt="web-logo" />
				</div>
				<div className="row pl-5 ml-5">
					<a className="grl-font-style nav-link-a">Home</a>
					<a className="grl-font-style nav-link-a">Historial</a>
					<button
						className="grl-font-style btn-buy-coins"
						onClick={() => {
							setOpenModal(true);
						}}
					>
						Buy Coins
					</button>
				</div>
				<div className="inline-block">
					<div className="container py-2">
						<span className="d-flex pt-3 ml-2 pl-3">
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
			</div>
			{openModal && <Modal closeModal={setOpenModal} />}
		</nav>
	);
}

export default Nav;
