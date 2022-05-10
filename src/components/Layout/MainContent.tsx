import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "../../context/LanguageContext";
import { ThemeProvider } from "../../context/ThemeContext";
import RouterNavigation from "../../router/RouterNavigation";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const MainContent = () => {
	return (
		<>
			<ThemeProvider>
				<LanguageProvider>
					<BrowserRouter>
						<Navigation />
						<RouterNavigation />
					</BrowserRouter>
					<Footer />
				</LanguageProvider>
			</ThemeProvider>
		</>
	);
};

export default MainContent;
