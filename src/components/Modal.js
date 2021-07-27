import React from "react";
import iconCoin from "../services/img/icons/coin.svg";
import "../styles/styles.css";

export function Modal({ closeModal }) {
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Buy more coins</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
								onClick={() => closeModal(false)}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body d-flex justify-content-center">
							<button type="button" className="btn btn-coins grl-font-style">
								1000
								<img className="ml-2 mt-1" src={iconCoin} alt="coin" />
							</button>
							<button type="button" className="btn btn-coins grl-font-style">
								5000 <img className="ml-2 mt-1" src={iconCoin} alt="coin" />
							</button>
							<button type="button" className="btn btn-coins grl-font-style">
								7000 <img className="ml-2 mt-1" src={iconCoin} alt="coin" />
							</button>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
								onClick={() => closeModal(false)}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
