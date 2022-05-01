import { useState } from "react";

export const useModal = (initilValue = false) => {
	const [isOpen, setIsOpen] = useState(initilValue);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	return [isOpen, openModal, closeModal];
};
