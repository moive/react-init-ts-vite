import React from "react";
type FormInput = React.ChangeEvent<HTMLInputElement>;

type Props = {
	title: string;
	url: string;
	handleChange: (e: FormInput) => void;
};

const SelectList = ({ title, url, handleChange }: Props) => {
	return (
		<div>
			<select
				name=""
				id=""
				className="mt-1 block w-60 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
			>
				<option value="">---</option>
			</select>
		</div>
	);
};

export default SelectList;
