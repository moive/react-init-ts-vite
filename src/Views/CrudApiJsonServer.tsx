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
				console.log("res 2", res);
				if (!res.err) {
					setDb(res);
					setError(null);
				} else {
					setDb([]);
					setError(res);
				}
			})
			.catch((e) => console.log(e))
			.finally(() => setLoading(false));
	}, [url]);

	const createData = (item: TypeCrudApp) => {
		item.id = Date.now();
		let options = {
			body: item,
			headers: { "content-type": "application/json" },
		};
		api.post(url, options).then((res) => {
			if (!res.err) {
				setDb([...db!, res]);
			} else {
				setError(res);
			}
		});
	};
	const updateData = (item: TypeCrudApp) => {
		let endpoint = `${url}/${item.id}`;

		let options = {
			body: item,
			headers: { "content-type": "application/json" },
		};

		api.put(endpoint, options).then((res) => {
			if (!res.err) {
				let newData = db!.map((el) => (el.id == item.id ? item : el));
				setDb(newData);
			} else {
				setError(res);
			}
		});
	};
	const deleteData = (id: number) => {
		let isDelete = window.confirm("Are you sure to eliminate " + id);

		let endpoint = `${url}/${id}`;
		let options = {
			headers: { "content-type": "application/json" },
		};

		if (isDelete) {
			api.del(endpoint, options).then((res) => {
				if (!res.err) {
					let newData = db!.filter((item) => item.id != id);
					setDb(newData);
				} else {
					setError(res);
				}
			});
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
						{db && (
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
