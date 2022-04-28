import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemons from "./Views/Pokemons";

import { createRoot } from "react-dom/client";
import Survey from "./Views/Survey";
import CrudApp from "./Views/CrudApp";
import CrudApiJsonServer from "./Views/CrudApiJsonServer";
import SongSearch from "./Views/SongSearch";
import SelectNested from "./Views/SelectNested";
import Contact from "./Views/Contact";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Contact />} />
				<Route path="/select-nested" element={<SelectNested />} />
				<Route path="/song-search" element={<SongSearch />} />
				<Route path="/crud-app" element={<CrudApp />} />
				<Route
					path="/crud-api-jsonserver"
					element={<CrudApiJsonServer />}
				/>
				<Route path="/basic" element={<App />} />
				<Route path="/pokemons" element={<Pokemons />} />
				<Route path="/survey" element={<Survey />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
