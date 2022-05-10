import React, { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import ThemeContext from "../../context/ThemeContext";
type Props = {
	texts: any;
};
const Footer = () => {
	const { theme } = useContext(ThemeContext);
	const { language, texts, handleChangeSelect } = useContext(LanguageContext);

	return (
		<footer
			className={`${
				theme != "dark" ? "bg-indigo-100" : "bg-gray-200"
			} text-center lg:text-left mt-auto`}
		>
			<div className="text-gray-700 text-center p-4">
				<div>© 2021 Copyright: MOIVE</div>
				<div>
					<a href="/">{texts.textFooter.Privacy}</a> <span> / </span>
					<a href="/">{texts.textFooter.TermsOfService}</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
