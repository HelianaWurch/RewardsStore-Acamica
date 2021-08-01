import React from "react";
import "../styles/styles.css";

export function Modal({ closeModal, title, content }) {
	return (
		<div className="modalBackground">
			<div className="modalContainer">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">{title}</h5>
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
						<div>{content}</div>
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
