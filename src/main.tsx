import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import RouterNavigation from "./router/RouterNavigation";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navigation />
			<RouterNavigation />
		</BrowserRouter>
		<Footer />
	</React.StrictMode>
);
