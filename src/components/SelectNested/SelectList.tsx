import React from "react";
import { useFetchSelect } from "../../hooks/useFetchSelect";
import Loader from "../Loader/Loader";
import Message from "../Loader/Message";
type FormInput = React.ChangeEvent<HTMLSelectElement>;

type Props = {
	title: string;
	url: string;
	handleChange: (e: FormInput) => void;
};

const SelectList = ({ title, url, handleChange }: Props) => {
	const { data, error, loading } = useFetchSelect(url);

	if (!data) return null;

	if (error) {
		return (
			<Message
				msg={`Error ${error.status}: ${error.statusText}`}
				bgColor="bg-red-400 text-white font-bold p-3"
			/>
		);
	}

	let id = `select-${title}`;
	let label = title.charAt(0).toUpperCase() + title.slice(1);
	let titleForData = (title: string) => {
		if (title && title == "state") return "estado";
		if (title && title == "towns") return "municipios";
		if (title && title == "suburbs") return "colonia";
	};
	let options = data.response[titleForData(title)!];

	return (
		<div>
			<label htmlFor={id}>{label}</label>
			{loading && <Loader />}
			<select
				name={id}
				id={id}
				className="mt-1 block w-60 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				onChange={handleChange}
			>
				<option value="">Choose a {title}</option>
				{data &&
					options.map((el: any) => (
						<option value={el} key={el}>
							{el}
						</option>
					))}
			</select>
		</div>
	);
};

export default SelectList;
