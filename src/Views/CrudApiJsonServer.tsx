import React, { useState } from "react";
import CrudForm from "../components/CrudApp/CrudForm";
import CrudTable from "../components/CrudApp/CrudTable";
import { TypeCrudApp } from "../utils/TypeCrudApp";

const CrudApiJsonServer = () => {
	const [db, setDb] = useState<TypeCrudApp[]>([]);
	const [dataToEdit, setDataToEdit] = useState<TypeCrudApp | null>(null);

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
			<div className="wrapper-content">
				<div>
					<h2 className="text-center text-3xl font-bold my-10">
						{dataToEdit ? "Edit" : "Add"}
					</h2>
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
					<h2 className="text-center text-3xl font-bold my-10">
						Data list
					</h2>
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
