import React from "react";
type Props = {
	theme: string;
};
const Footer = ({ theme }: Props) => {
	return (
		<footer
			className={`${
				theme != "dark" ? "bg-indigo-100" : "bg-gray-200"
			} text-center lg:text-left mt-auto`}
		>
			<div className="text-gray-700 text-center p-4">
				© 2021 Copyright: MOIVE
			</div>
		</footer>
	);
};

export default Footer;
