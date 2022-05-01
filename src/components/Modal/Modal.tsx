import React, { FC } from "react";

type Props = {
	children?: React.ReactNode;
};

const Modal = ({ children }: Props) => {
	return (
		<div className="modal is-open">
			<div className="modal-container">
				<button className="modal-close">X</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
