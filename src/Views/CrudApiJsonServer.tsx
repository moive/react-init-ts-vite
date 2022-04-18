import React, { useEffect, useState } from "react";
import CrudForm from "../components/CrudApp/CrudForm";
import CrudTable from "../components/CrudApp/CrudTable";
import { helpHttp } from "../helpers/helpHttp";
import { TypeCrudApp } from "../utils/TypeCrudApp";

const CrudApiJsonServer = () => {
	const [db, setDb] = useState<TypeCrudApp[]>([]);
	const [dataToEdit, setDataToEdit] = useState<TypeCrudApp | null>(null);

	let api = helpHttp();
	let url = "http://localhost:5000/saintseiya";

	useEffect(() => {
		api.get(url).then((res) => {
			if (res != undefined && !res.err) setDb(res);
			else setDb([]);
		});
	}, []);

	const createData = (item: TypeCrudApp) => {
		item.id = Date.now();
		setDb([...db, item]);
	};
	const updateData = (item: TypeCrudApp) => {
		let newData = db.map((el) => (el.id == item.id ? item : el));
		setDb(newData);
	};
	const deleteData = (id: number) => {
		let isDelete = window.confirm("Are you sure to eliminate " + id);
		if (isDelete) {
			let newData = db.filter((item) => item.id != id);
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
						<CrudTable
							items={db}
							setDataToEdit={setDataToEdit}
							deleteData={deleteData}
						/>
					</section>
				</div>
			</div>
		</>
	);
};

export default CrudApiJsonServer;
