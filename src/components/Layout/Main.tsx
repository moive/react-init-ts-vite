import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterNavigation from "../../router/RouterNavigation";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Main = () => {
	const initTheme = "dark";

	const [theme, setTheme] = useState(initTheme);
	const handleTheme = (theme: string) => {
		setTheme(theme);
	};
	return (
		<>
			<BrowserRouter>
				<Navigation theme={theme} handleTheme={handleTheme} />
				<RouterNavigation />
			</BrowserRouter>
			<Footer theme={theme} />
		</>
	);
};

export default Main;
