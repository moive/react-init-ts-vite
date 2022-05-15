import { useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CrudProvider } from "../../context/CrudContext";
import { LanguageProvider } from "../../context/LanguageContext";
import { ThemeProvider } from "../../context/ThemeContext";
import RouterNavigation from "../../router/RouterNavigation";
import store from "../../store";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const MainContent = () => {
	return (
		<>
			<Provider store={store}>
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
			</Provider>
		</>
	);
};

export default MainContent;
