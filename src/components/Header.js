import React from "react";
import img1 from "../services/img/header-x1.png";

function Header() {
	return (
		<header className="">
			<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
					<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img src={img1} className="d-block w-100" alt="..." />
						<div className="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>Some representative placeholder content for the first slide.</p>
						</div>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleCaptions"
					role="button"
					data-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleCaptions"
					role="button"
					data-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</header>
	);
}

export default Header;