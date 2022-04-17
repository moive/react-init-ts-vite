import React, { useState } from "react";
import CrudForm from "../components/CrudApp/CrudForm";
import CrudTable from "../components/CrudApp/CrudTable";
import { TypeCrudApp } from "../utils/TypeCrudApp";

const initDb: Array<TypeCrudApp> = [
	{
		id: 1,
		name: "Seiya",
		constellation: "Pegaso",
	},
	{
		id: 2,
		name: "Shiryu",
		constellation: "Dragón",
	},
	{
		id: 3,
		name: "Hyoga",
		constellation: "Cisne",
	},
	{
		id: 4,
		name: "Shun",
		constellation: "Andrómeda",
	},
	{
		id: 5,
		name: "Ikki",
		constellation: "Fénix",
	},
];

const CrudApp = () => {
	const [db, setDb] = useState(initDb);
	const [dataToEdit, setDataToEdit] = useState(null);

	const createData = (data: TypeCrudApp) => {
		data.id = Date.now();
		setDb([...db, data]);
	};
	const updateData = (data: TypeCrudApp) => {};
	const deleteData = (id: number) => {};

	return (
		<>
			<h2 className="text-center text-3xl font-bold my-10">Add</h2>
			<section className="max-w-screen-md mx-auto p-4 shadow bg-white rounded-md mt-10">
				<CrudForm
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
			</section>
			<h2 className="text-center text-3xl font-bold my-10">Data list</h2>
			<section className="max-w-screen-md mx-auto p-4 shadow bg-white rounded-md mt-10">
				<CrudTable
					items={db}
					setDataToEdit={setDataToEdit}
					deleteData={deleteData}
				/>
			</section>
		</>
	);
};

export default CrudApp;
