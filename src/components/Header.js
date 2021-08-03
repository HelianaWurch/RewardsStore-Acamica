import React from "react";
import img1 from "../services/img/header-x1.png";

import { Image } from "react-bootstrap";

function Header() {
	return (
		<header>
			<h1
				className="d-none d-lg-block text-white"
				style={{ position: "absolute", top: "16rem", left: "15rem", fontSize: "3.5rem" }}
			>
				Rewards Store
			</h1>
			<Image src={img1} fluid />
		</header>
	);
}

export default Header;
