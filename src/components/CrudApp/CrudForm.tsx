import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CrudContext from "../../context/CrudContext";
import { TypeCrudApp } from "../../utils/TypeCrudApp";

type Props = {
	createData: (data: TypeCrudApp) => void;
	updateData: (data: TypeCrudApp) => void;
	setDataToEdit: React.Dispatch<React.SetStateAction<TypeCrudApp | null>>;
	dataToEdit: TypeCrudApp | null;
};

type FormInput = React.ChangeEvent<HTMLInputElement>;
type FormSubmit = React.FormEvent<HTMLFormElement>;

const CrudForm = () => {
	const { createData, updateData, setDataToEdit, dataToEdit } =
		useContext(CrudContext);
	let navigate = useNavigate();
	const initialForm = {
		id: null,
		name: "",
		constellation: "",
	};
	const [form, setForm] = useState<TypeCrudApp>(initialForm);

	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit);
		} else {
			setForm(initialForm);
		}
	}, [dataToEdit]);

	const handleChange = (e: FormInput) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e: FormSubmit) => {
		e.preventDefault();

		if (!form.name) {
			alert("Field 'name' is required");
			return;
		}
		if (!form.constellation) {
			alert("Field 'constellation' is required");
			return;
		}

		if (form.id === null) {
			createData(form);
		} else {
			updateData(form);
		}

		handleReset();

		navigate("/crud-api-jsonserver/");
	};
	const handleReset = () => {
		setForm(initialForm);
		setDataToEdit(null);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500 mb-4"
						type="text"
						name="name"
						placeholder="Enter name"
						onChange={handleChange}
						value={form.name}
					/>
				</div>
				<div>
					<input
						className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500 mb-4"
						type="text"
						name="constellation"
						placeholder="Enter constellation"
						onChange={handleChange}
						value={form.constellation}
					/>
				</div>
				<div>
					<button
						className="bg-green-500 hover:bg-green-400 px-10 py-2 uppercase rounded-full text-sm mr-4 text-white"
						type="submit"
					>
						{dataToEdit ? "Save Changes" : "Created"}
					</button>
					<button
						className="bg-red-500 hover:bg-red-400 px-10 py-2 uppercase rounded-full text-sm mr-4 text-white"
						type="reset"
						onClick={handleReset}
					>
						Clear
					</button>
				</div>
			</form>
		</>
	);
};

export default CrudForm;
