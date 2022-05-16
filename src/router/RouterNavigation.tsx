import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import App from "../App";
import PrivateRoute from "../components/Private/PrivateRoute";
import ShoppingCartRedux from "../components/ShoppingCardRedux/ShoppingCartRedux";
import Contact from "../Views/Contact";
import CounterRedux from "../Views/CounterRedux";
import CrudApiJsonServer from "../Views/CrudApiJsonServer";
import CrudApp from "../Views/CrudApp";
import Dashboard from "../Views/Dashboard";
import Error404 from "../Views/Error404";
import Login from "../Views/Login";
import Modals from "../Views/Modals";
import Pokemons from "../Views/Pokemons";
import Product from "../Views/Product";
import ReactTopics from "../Views/ReactTopics";
import Reducers from "../Views/Reducers";
import SelectNested from "../Views/SelectNested";
import ShoppingReducers from "../Views/ShoppingReducers";
import SongSearch from "../Views/SongSearch";
import Survey from "../Views/Survey";
import Topic from "../Views/Topic";
import User from "../Views/User";

const RouterNavigation = () => {
	return (
		<Routes>
			<Route
				path="/shopping-cart-redux"
				element={<ShoppingCartRedux />}
			/>
			<Route path="/counter-redux" element={<CounterRedux />} />
			<Route path="/reducers" element={<Reducers />} />
			<Route path="/shopping-cart" element={<ShoppingReducers />} />
			<Route path="/modals" element={<Modals />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/select-nested" element={<SelectNested />} />
			<Route path="/song-search" element={<SongSearch />} />
			<Route path="/crud-app" element={<CrudApp />} />
			<Route path="/crud-api-jsonserver" element={<CrudApiJsonServer />}>
				<Route path="add" element={<CrudApiJsonServer />} />
				<Route path=":id/edit" element={<CrudApiJsonServer />} />
			</Route>
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
				<Route
					index
					element={
						<p className="text-teal-500 uppercase font-bold">
							Select an item
						</p>
					}
				/>
				<Route path=":topic" element={<Topic />} />
			</Route>
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<PrivateRoute />}>
				<Route index element={<Dashboard />} />
			</Route>
			<Route path="*" element={<Error404 />} />
		</Routes>
	);
};

export default RouterNavigation;
