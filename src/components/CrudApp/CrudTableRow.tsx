import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TypeCrudApp } from "../../utils/TypeCrudApp";
type Props = {
	item: TypeCrudApp;
	setDataToEdit: React.Dispatch<React.SetStateAction<TypeCrudApp | null>>;
	deleteData: (id: number) => void;
};

const CrudTableRow = ({ item, setDataToEdit, deleteData }: Props) => {
	let navigate = useNavigate();

	const { id, name, constellation } = item;

	const handleEditForm = (item: TypeCrudApp) => {
		setDataToEdit(item);
		navigate(`/crud-api-jsonserver/${id}/edit`);
	};
	return (
		<tr>
			<td>{name}</td>
			<td>{constellation}</td>
			<td className="text-center">
				<button
					onClick={() => handleEditForm(item)}
					className="rounded-md text-yellow-400 text-sm mr-4 text-white"
				>
					<span className="material-icons">edit</span>
				</button>
				<button
					onClick={() => deleteData(id!)}
					className="rounded-md text-red-500 text-sm mr-4 text-white"
				>
					<span className="material-icons">delete_forever</span>
				</button>
			</td>
		</tr>
	);
};

export default CrudTableRow;
