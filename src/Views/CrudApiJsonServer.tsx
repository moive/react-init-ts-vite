import React, { useEffect, useState } from "react";
import CrudForm from "../components/CrudApp/CrudForm";
import CrudTable from "../components/CrudApp/CrudTable";
import Loading from "../components/Loader/Loader";
import Message from "../components/Loader/Message";
import { helpHttp } from "../helpers/helpHttp";
import { TypeCrudApp } from "../utils/TypeCrudApp";
import { TypeError } from "../utils/TypeError";

const CrudApiJsonServer = () => {
	const [db, setDb] = useState<TypeCrudApp[] | null>(null);
	const [dataToEdit, setDataToEdit] = useState<TypeCrudApp | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<TypeError | null>(null);

	let api = helpHttp();
	let url = "http://localhost:5000/saintseiya";

	useEffect(() => {
		setLoading(true);
		api.get(url)
			.then((res) => {
				if (res != undefined && res.name == undefined && !res.err) {
					setDb(res);
					setError(null);
				} else {
					if (res.name == "TypeError" || res.name == "AbortError") {
						res.status = res.name;
						res.statusText = res.message;
					}
					setDb(null);
					setError(res);
				}
			})
			.catch((e) => console.log("e", e));
		setLoading(false);
	}, []);

	const createData = (item: TypeCrudApp) => {
		item.id = Date.now();
		setDb([...db!, item]);
	};
	const updateData = (item: TypeCrudApp) => {
		let newData = db!.map((el) => (el.id == item.id ? item : el));
		setDb(newData);
	};
	const deleteData = (id: number) => {
		let isDelete = window.confirm("Are you sure to eliminate " + id);
		if (isDelete) {
			let newData = db!.filter((item) => item.id != id);
			setDb(newData);
		}
		return;
	};

	return (
		<>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Crud Api json-server
			</h2>
			<div className="wrapper-content">
				<div>
					<h3 className="text-center text-xl font-bold">
						{dataToEdit ? "Edit" : "Add"}
					</h3>
					<section className="p-4 shadow bg-white rounded-md mt-10">
						<CrudForm
							createData={createData}
							updateData={updateData}
							dataToEdit={dataToEdit}
							setDataToEdit={setDataToEdit}
						/>
					</section>
				</div>
				<div>
					<h3 className="text-center text-xl font-bold">Data list</h3>
					<section className="p-4 shadow bg-white rounded-md mt-10">
						{loading && <Loading />}
						{error && (
							<Message
								msg={`Error ${error.status} : ${error.statusText}`}
								bgColor="bg-red-400 text-white font-bold p-3"
							/>
						)}
						{db != null && db.length > 0 && (
							<CrudTable
								items={db}
								setDataToEdit={setDataToEdit}
								deleteData={deleteData}
							/>
						)}
					</section>
				</div>
			</div>
		</>
	);
};

export default CrudApiJsonServer;
