import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemons from "./Views/Pokemons";

import { createRoot } from "react-dom/client";
import Survey from "./Views/Survey";
const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/pokemons" element={<Pokemons />} />
				<Route path="/survey" element={<Survey />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
