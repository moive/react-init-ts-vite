import React from "react";
import Modal from "../components/Modal/Modal";
import { useModal } from "../hooks/useModal";

const Modals = () => {
	const [isOpenModal1, openModal1, closeModal1] = useModal(false);
	return (
		<div>
			<Modal>
				<h3>Modal 1</h3>
				<p>Hi, that is the content modal 1</p>
				<img src="https://placeimg.com/400/400/animals" alt="animals" />
			</Modal>
			<button
				type="button"
				className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			>
				Launch demo modal
			</button>
			{false && <div className="modal-backdrop fade show"></div>}
		</div>
	);
};

export default Modals;
