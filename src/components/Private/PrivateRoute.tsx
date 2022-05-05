import React from "react";
import { Navigate, Outlet, Route } from "react-router-dom";

const PrivateRoute = () => {
	let auth;
	auth = null;
	auth = true;

	return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
