import React from "react";
import { TypeCrudApp } from "../../utils/TypeCrudApp";
import CrudTableRow from "./CrudTableRow";

type Props = {
	items: TypeCrudApp[];
	setDataToEdit: React.Dispatch<React.SetStateAction<TypeCrudApp | null>>;
	deleteData: (id: number) => void;
};

const CrudTable = ({ items, setDataToEdit, deleteData }: Props) => {
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
					{items.length > 0 ? (
						items.map((item) => (
							<CrudTableRow
								setDataToEdit={setDataToEdit}
								deleteData={deleteData}
								item={item}
								key={item.id}
							/>
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
