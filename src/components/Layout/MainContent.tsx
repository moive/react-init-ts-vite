import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { CrudProvider } from "../../context/CrudContext";
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
					<CrudProvider>
						<BrowserRouter>
							<Navigation />
							<RouterNavigation />
						</BrowserRouter>
					</CrudProvider>
					<Footer />
				</LanguageProvider>
			</ThemeProvider>
		</>
	);
};

export default MainContent;
