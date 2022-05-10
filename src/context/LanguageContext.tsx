import { createContext, useState } from "react";

interface ILanguageContext {
	language: string;
	texts: any;
	handleChangeSelect: (v: string) => void;
}

const initialContext: ILanguageContext = {
	language: "en",
	texts: {},
	handleChangeSelect: (v) => console.log(v),
};

const LanguageContext = createContext<ILanguageContext>(initialContext);

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

const LanguageProvider = ({ children }: any) => {
	const [language, setLanguage] = useState("en");
	const [texts, setTexts] = useState(translations[language]);

	const handleChangeSelect = (val: string) => {
		setTexts(translations[val]);
		setLanguage(val);
	};

	const data = { language, texts, handleChangeSelect };

	return (
		<LanguageContext.Provider value={data}>
			{children}
		</LanguageContext.Provider>
	);
};

export { LanguageProvider };

export default LanguageContext;
