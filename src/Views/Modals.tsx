import React from "react";
import Modal from "../components/Modal/Modal";
import ModalPortal from "../components/Modal/ModalPortal";
import { useModal } from "../hooks/useModal";

const Modals = () => {
	const [isOpenModal1, openModal1, closeModal1] = useModal(false);
	const [isOpenModal2, openModal2, closeModal2] = useModal(false);
	const [isOpenPortal, openModalPortal, closeModalPortal] = useModal(false);
	return (
		<div className="mt-10">
			<Modal
				isOpen={isOpenModal1 as boolean}
				closeModal={closeModal1 as () => void}
			>
				<h3>Modal 1</h3>
				<p>Hi, that is the content modal 1</p>
				<img
					src="https://placeimg.com/400/200/animals"
					alt="animals"
					className="w-full"
				/>
			</Modal>
			<Modal
				isOpen={isOpenModal2 as boolean}
				closeModal={closeModal2 as () => void}
			>
				<h3>Modal 2</h3>
				<p>Other modal</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Harum odio quis est ea neque possimus temporibus aspernatur
					id placeat! Adipisci quod officia incidunt similique eius?
					Error maxime dolores commodi hic!
				</p>
			</Modal>
			<ModalPortal isOpen={isOpenPortal} closeModal={closeModalPortal}>
				<h3>Modal Portal</h3>
				<p>Este es un modal portal que se renderiza fuera del #root</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Harum odio quis est ea neque possimus temporibus aspernatur
					id placeat! Adipisci quod officia incidunt similique eius?
					Error maxime dolores commodi hic!
				</p>
			</ModalPortal>
			<button
				onClick={openModal1}
				type="button"
				className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-3"
			>
				Modal 1
			</button>
			<button
				onClick={openModal2}
				type="button"
				className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mr-3"
			>
				Modal 2
			</button>
			<button
				onClick={openModalPortal}
				type="button"
				className="px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
			>
				Modal Portal
			</button>
		</div>
	);
};

export default Modals;
