import { useState } from "react";
type FormInput = React.ChangeEvent<HTMLInputElement>;
type FormSelect = React.ChangeEvent<HTMLSelectElement>;
type FormElement = React.FormEvent<HTMLFormElement>;

const FormSurvey = () => {
	const initForm = {
		fullname: "",
		email: "",
		frameword: "",
		language: "default",
		term: false,
	};

	const [form, setForm] = useState(initForm);

	const handleChange = (e: FormInput) => {
		setForm({
			...form,
			[e.target.name]:
				e.target.name == "term" ? e.target.checked : e.target.value,
		});
	};

	const handleChangeSelect = (e: FormSelect) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (val: FormElement) => {
		val.preventDefault();
		console.log(form);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label className="relative block text-gray-700 hover:text-fuchsia-600 mb-6">
				<span className="font-bold">Full name:</span>
				<input
					className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500"
					placeholder="Enter Full Name"
					type="text"
					name="fullname"
					defaultValue={form.fullname}
					onChange={handleChange}
				/>
			</label>
			<label className="relative block text-gray-700 hover:text-fuchsia-600 mb-6">
				<span className="font-bold">Email:</span>
				<input
					className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500"
					placeholder="Enter Name"
					type="email"
					name="email"
					defaultValue={form.email}
					onChange={handleChange}
				/>
			</label>
			<fieldset className="mb-6">
				<legend className="font-bold">
					Select your favorite frameword:
				</legend>
				<div className="hover:text-fuchsia-600">
					<div className="flex items-center">
						<input
							id="vue"
							name="frameword"
							type="radio"
							className="focus:ring-fuchsia-500 h-4 w-4 text-fuchsia-600 border-fuchsia-300"
							defaultValue="vue"
							onChange={handleChange}
						/>
						<label
							htmlFor="vue"
							className="ml-3 block text-sm font-medium"
						>
							Vue
						</label>
					</div>
				</div>
				<div className="hover:text-fuchsia-600">
					<div className="flex items-center">
						<input
							id="angular"
							name="frameword"
							type="radio"
							className="focus:ring-fuchsia-500 h-4 w-4 text-fuchsia-600 border-fuchsia-300"
							defaultValue="angular"
							onChange={handleChange}
						/>
						<label
							htmlFor="angular"
							className="ml-3 block text-sm font-medium"
						>
							Angular
						</label>
					</div>
				</div>
				<div className="hover:text-fuchsia-600">
					<div className="flex items-center">
						<input
							id="React"
							name="frameword"
							type="radio"
							className="focus:ring-fuchsia-500 h-4 w-4 text-fuchsia-600 border-fuchsia-300"
							defaultValue="react"
							onChange={handleChange}
						/>
						<label
							htmlFor="React"
							className="ml-3 block text-sm font-medium"
						>
							React
						</label>
					</div>
				</div>
			</fieldset>
			<label className="relative block text-gray-700 hover:text-fuchsia-600 mb-6">
				<span className="font-bold">Select language:</span>
				<select
					defaultValue={form.language}
					name="language"
					placeholder="demo"
					className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500"
					onChange={handleChangeSelect}
				>
					<option value={"default"} disabled>
						Choose an option
					</option>
					<option value={"js"}>JavaScript</option>
					<option value={"go"}>Go</option>
					<option value={"py"}>Python</option>
					<option value={"cshart"}>C#</option>
					<option value={"php"}>Php</option>
				</select>
			</label>
			<div className="hover:text-fuchsia-600 mb-6">
				<div className="flex items-center">
					<input
						id="term"
						name="term"
						type="checkbox"
						className="focus:ring-fuchsia-500 h-4 w-4 text-fuchsia-600 border-fuchsia-300"
						onChange={handleChange}
					/>
					<label
						htmlFor="term"
						className="ml-3 block text-sm font-medium"
					>
						I accept terms and conditions.
					</label>
				</div>
			</div>
			<div>
				<button
					disabled={!form.term}
					className="bg-fuchsia-500 text-white rounded-full px-8 py-2 text-sm font-bold uppercase disabled:opacity-50"
				>
					Send
				</button>
			</div>
		</form>
	);
};

export default FormSurvey;
