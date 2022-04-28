import React, { useState } from "react";
import SelectList from "../components/SelectNested/SelectList";

type FormInput = React.ChangeEvent<HTMLSelectElement>;

const SelectNested = () => {
	const [state, setState] = useState("");
	const [town, setTown] = useState("");
	const [suburb, setSuburb] = useState("");

	const TOKEN = "pruebas";
	// const TOKEN = "b3570f1a-14dc-40ef-8d10-7249e62c2ef5";

	return (
		<div>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Select Nested
			</h2>
			<SelectList
				title="state"
				url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
				handleChange={(e: FormInput) => {
					setState(e.target.value);
				}}
			/>
			{state && (
				<SelectList
					title="towns"
					url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
					handleChange={(e: FormInput) => {
						setTown(e.target.value);
					}}
				/>
			)}
			{town && (
				<SelectList
					title="suburbs"
					url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
					handleChange={(e: FormInput) => {
						setSuburb(e.target.value);
					}}
				/>
			)}
		</div>
	);
};

export default SelectNested;
