import React from "react";
import img1 from "../services/img/header-x1.png";

function Header() {
	return (
		<header className="d-flex justify-content-center ">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={img1} className="d-block w-100" alt="..." />
					<div className="carousel-caption d-none d-md-block text-left">
						<h1>REWARDS STORE</h1>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
