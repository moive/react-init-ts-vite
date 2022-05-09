import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterNavigation from "../../router/RouterNavigation";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

const Main = () => {
	return (
		<>
			<BrowserRouter>
				<Navigation />
				<RouterNavigation />
			</BrowserRouter>
			<Footer />
		</>
	);
};

export default Main;
