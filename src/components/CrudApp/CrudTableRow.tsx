import React from "react";
import { TypeCrudApp } from "../../utils/TypeCrudApp";
type Props = {
	item: TypeCrudApp;
};
const CrudTableRow = ({ item }: Props) => {
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.constellation}</td>
			<td className="text-center">
				<button className="rounded-md text-yellow-400 text-sm mr-4 text-white">
					<span className="material-icons">edit</span>
				</button>
				<button className="rounded-md text-red-500 text-sm mr-4 text-white">
					<span className="material-icons">delete_forever</span>
				</button>
			</td>
		</tr>
	);
};

export default CrudTableRow;
