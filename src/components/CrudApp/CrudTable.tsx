import React from "react";
import { TypeCrudApp } from "../../utils/TypeCrudApp";
import CrudTableRow from "./CrudTableRow";

type Props = {
	items: TypeCrudApp[];
};

const CrudTable = ({ items }: Props) => {
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
					{items.length === 0 ? (
						<tr>
							<td colSpan={3}>Data not found</td>
						</tr>
					) : (
						items.map((item) => (
							<CrudTableRow item={item} key={item.id} />
						))
					)}
				</tbody>
			</table>
		</>
	);
};

export default CrudTable;
