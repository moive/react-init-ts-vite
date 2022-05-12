import React, { useContext } from "react";
import CrudContext from "../../context/CrudContext";
import { TypeCrudApp } from "../../utils/TypeCrudApp";
import CrudTableRow from "./CrudTableRow";

type Props = {
	items: TypeCrudApp[];
	setDataToEdit: React.Dispatch<React.SetStateAction<TypeCrudApp | null>>;
	deleteData: (id: number) => void;
};

const CrudTable = () => {
	const { db, setDataToEdit, deleteData } = useContext(CrudContext);
	return (
		<>
			<table className="table-auto border-collapse w-full">
				<thead>
					<tr>
						<th className="py-4 text-left">Name</th>
						<th className="py-4 text-left">Constellation</th>
						<th className="py-4">Actions</th>
					</tr>
				</thead>
				<tbody>
					{db!.length > 0 ? (
						db!.map((item: TypeCrudApp) => (
							<CrudTableRow item={item} key={item.id} />
						))
					) : (
						<tr>
							<td colSpan={3}>Data not found</td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
};

export default CrudTable;
