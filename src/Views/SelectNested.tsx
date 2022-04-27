import React, { useState } from "react";
import SelectList from "../components/SelectNested/SelectList";

type FormInput = React.ChangeEvent<HTMLInputElement>;

const SelectNested = () => {
	const [state, setState] = useState("");
	const [town, setTown] = useState("");
	const [suburb, setSuburb] = useState("");

	return (
		<div>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Select Nested
			</h2>
			<SelectList
				title="State"
				url=""
				handleChange={(e: FormInput) => {
					setState(e.target.value);
				}}
			/>
			{state && (
				<SelectList
					title="Towns"
					url=""
					handleChange={(e: FormInput) => {
						setTown(e.target.value);
					}}
				/>
			)}
			{town && (
				<SelectList
					title="Suburbs"
					url=""
					handleChange={(e: FormInput) => {
						setSuburb(e.target.value);
					}}
				/>
			)}
		</div>
	);
};

export default SelectNested;
