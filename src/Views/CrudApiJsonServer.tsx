import { useContext } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import CrudForm from "../components/CrudApp/CrudForm";
import CrudTable from "../components/CrudApp/CrudTable";
import Loading from "../components/Loader/Loader";
import Message from "../components/Loader/Message";
import CrudContext from "../context/CrudContext";

const CrudApiJsonServer = () => {
	const { dataToEdit, loading, error, db } = useContext(CrudContext);

	const { pathname } = useLocation();
	let isPageAdd = pathname.includes("add") || pathname.includes("edit");
	// console.log(isPageAdd);

	return (
		<>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Crud Api json-server
			</h2>
			<nav>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-orange-500 font-bold uppercase mr-5"
							: "text-blue-500 font-bold uppercase mr-5"
					}
					to="/crud-api-jsonserver/"
				>
					All
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						isActive
							? "text-orange-500 font-bold uppercase mr-5"
							: "text-blue-500 font-bold uppercase mr-5"
					}
					to="/crud-api-jsonserver/add"
				>
					Add
				</NavLink>
			</nav>

			<div className="wrapper-content">
				{isPageAdd && (
					<div>
						<h3 className="text-center text-xl font-bold">
							{dataToEdit ? "Edit" : "Add"}
						</h3>
						<section className="p-4 shadow bg-white rounded-md mt-10">
							<CrudForm />
						</section>
					</div>
				)}
				{!isPageAdd && (
					<div>
						<h3 className="text-center text-xl font-bold">
							Data list
						</h3>
						<section className="p-4 shadow bg-white rounded-md mt-10">
							{loading && <Loading />}
							{error && (
								<Message
									msg={`Error ${error.status} : ${error.statusText}`}
									bgColor="bg-red-400 text-white font-bold p-3"
								/>
							)}
							{db && <CrudTable />}
						</section>
					</div>
				)}
			</div>
		</>
	);
};

export default CrudApiJsonServer;
