import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ReactTopics = () => {
	return (
		<div>
			<h2 className="text-center text-xl font-bold">React Topics</h2>
			<ul className="mb-10">
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "text-rose-500" : "text-indigo-400"
						}
						to="jsx"
					>
						JSX
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "text-rose-500" : "text-indigo-400"
						}
						to="props"
					>
						Props
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "text-rose-500" : "text-indigo-400"
						}
						to="state"
					>
						State
					</NavLink>
				</li>
				<li>
					<NavLink
						className={({ isActive }) =>
							isActive ? "text-rose-500" : "text-indigo-400"
						}
						to="component"
					>
						Component
					</NavLink>
				</li>
			</ul>
			<Outlet />
		</div>
	);
};

export default ReactTopics;
