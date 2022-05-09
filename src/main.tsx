import React from "react";
import "./index.css";

import { createRoot } from "react-dom/client";
import MainContent from "./components/Layout/MainContent";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
	<React.StrictMode>
		<MainContent />
	</React.StrictMode>
);
