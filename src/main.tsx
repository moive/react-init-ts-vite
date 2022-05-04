import React from "react";
import "./index.css";
import App from "./App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Pokemons from "./Views/Pokemons";

import { createRoot } from "react-dom/client";
import Survey from "./Views/Survey";
import CrudApp from "./Views/CrudApp";
import CrudApiJsonServer from "./Views/CrudApiJsonServer";
import SongSearch from "./Views/SongSearch";
import SelectNested from "./Views/SelectNested";
import Contact from "./Views/Contact";
import Modals from "./Views/Modals";
import Error404 from "./Views/Error404";
import Navigation from "./components/Navigation/Navigation";
import User from "./Views/User";
import Product from "./Views/Product";
import ReactTopics from "./Views/ReactTopics";
import Topic from "./Views/Topic";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route path="/" element={<Modals />} />
				<Route path="/contact" element={<Contact />} />
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
				<Route path="/user/:username" element={<User />} />
				<Route path="/product" element={<Product />} />
				<Route
					path="/category"
					element={<Navigate replace to="/product" />}
				/>
				<Route path="/react" element={<ReactTopics />}>
					<Route path=":topic" element={<Topic />} />
				</Route>
				<Route path="*" element={<Error404 />} />
			</Routes>
		</BrowserRouter>
		<div>898989898</div>
	</React.StrictMode>
);
