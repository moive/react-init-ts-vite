import React, { useState } from "react";
import { TypeSong } from "../../utils/TypeSong";

type Props = {
	handleSearch: (data: TypeSong) => void;
};
type FormInput = React.ChangeEvent<HTMLInputElement>;
type FormSubmit = React.FormEvent<HTMLFormElement>;

const initialForm: TypeSong = {
	artist: "",
	song: "",
};

const SongForm = ({ handleSearch }: Props) => {
	const [form, setForm] = useState<TypeSong>(initialForm);
	const handleChange = (e: FormInput) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e: FormSubmit) => {
		e.preventDefault();

		if (!form.artist || !form.song) {
			alert("The fields required");
			return;
		}

		handleSearch(form);
		setForm(initialForm);
	};

	return (
		<form onSubmit={onSubmit} className="mb-5">
			<div>
				<input
					className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500 mb-4"
					type="text"
					name="artist"
					placeholder="Enter name artist"
					onChange={handleChange}
					value={form.artist}
				/>
			</div>
			<div>
				<input
					className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500 mb-4"
					type="text"
					name="song"
					placeholder="Enter name song"
					onChange={handleChange}
					value={form.song}
				/>
			</div>
			<div>
				<button
					className="bg-green-500 hover:bg-green-400 px-10 py-2 uppercase rounded-full text-sm mr-4 text-white"
					type="submit"
				>
					Send
				</button>
			</div>
		</form>
	);
};

export default SongForm;
