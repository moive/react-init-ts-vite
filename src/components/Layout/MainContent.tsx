import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterNavigation from "../../router/RouterNavigation";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const initTheme = "dark";
const translations: any = {
	en: {
		nav: {
			Dashboard: "Dashboard",
			Contact: "Contact",
			SelectNested: "Select Nested",
			SongSearch: "Song Search",
		},
		textFooter: {
			Privacy: "Privacy",
			TermsOfService: "Terms of service",
		},
	},
	es: {
		nav: {
			Dashboard: "Escritorio",
			Contact: "Contacto",
			SelectNested: "Select Anidado",
			SongSearch: "Buscador de Canción",
		},
		textFooter: {
			Privacy: "Privacidad",
			TermsOfService: "Terminos de servicios",
		},
	},
};

const MainContent = () => {
	const [theme, setTheme] = useState(initTheme);
	const [language, setLanguage] = useState("en");
	const [texts, setTexts] = useState(translations[language]);

	const handleTheme = (theme: string) => {
		setTheme(theme);
	};

	const handleChangeSelect = (val: string) => {
		setTexts(translations[val]);
		setLanguage(val);
	};

	return (
		<>
			<BrowserRouter>
				<Navigation
					theme={theme}
					handleTheme={handleTheme}
					texts={texts}
					handleChangeSelect={handleChangeSelect}
					language={language}
				/>
				<RouterNavigation />
			</BrowserRouter>
			<Footer theme={theme} texts={texts} />
		</>
	);
};

export default MainContent;
