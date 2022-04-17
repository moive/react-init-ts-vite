import { useState } from "react";

const CrudForm = () => {
	const handleChange = () => {};
	const handleSubmit = () => {};
	const handleReset = () => {};

	const [form, setForm] = useState({
		name: "",
		constellation: "",
	});
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
						Send
					</button>
					<button
						className="bg-red-500 hover:bg-red-400 px-10 py-2 uppercase rounded-full text-sm mr-4 text-white"
						type="reset"
						onClick={handleReset}
					>
						Reset
					</button>
				</div>
			</form>
		</>
	);
};

export default CrudForm;
