import { useEffect, useState } from "react";
import { TypeSurvey } from "../../utils/TypeSurvey";
type FormInput = React.ChangeEvent<HTMLInputElement>;
type FormSelect = React.ChangeEvent<HTMLSelectElement>;
type FormElement = React.FormEvent<HTMLFormElement>;

type Props = {
	frameworks: Array<TypeSurvey>;
	languages: Array<TypeSurvey>;
};

const FormSurvey = ({ frameworks, languages }: Props) => {
	const initForm = {
		fullname: "",
		email: "",
		frameword: "",
		language: "default",
		term: false,
	};

	const [form, setForm] = useState(initForm);

	const [isDisabled, setIsDisabled] = useState(true);

	const handleChange = (e: FormInput) => {
		setForm({
			...form,
			// prettier-ignore
			[e.target.name]:e.target.name == "term" ? e.target.checked : e.target.value,
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

	useEffect(() => {
		let valid =
			!!form.fullname &&
			!!form.email &&
			!!form.frameword &&
			(form.language != "default" ? true : false) &&
			form.term;

		setIsDisabled(!valid);
		// console.log(isDisabled);
	}, [form]);

	return (
		<form onSubmit={handleSubmit}>
			<label className="relative block text-gray-700 hover:text-fuchsia-600 mb-6">
				<span className="font-bold mb-1 block">Full name:</span>
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
				<span className="font-bold mb-1 block">Email:</span>
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
				<legend className="font-bold mb-1 block">
					Select your favorite frameword:
				</legend>
				{frameworks.map(({ name, value }, i) => (
					<div className="hover:text-fuchsia-600 mb-1" key={i}>
						<div className="flex items-center">
							<input
								id={value}
								name="frameword"
								type="radio"
								className="focus:ring-fuchsia-500 h-4 w-4 text-fuchsia-600 border-fuchsia-300"
								defaultValue={value}
								onChange={handleChange}
							/>
							<label
								htmlFor={value}
								className="ml-3 block text-sm font-medium"
							>
								{name}
							</label>
						</div>
					</div>
				))}
			</fieldset>
			<label className="relative block text-gray-700 hover:text-fuchsia-600 mb-6">
				<span className="font-bold mb-1 block">Select language:</span>
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
					{languages.map(({ name, value }, i) => (
						<option value={value} key={i}>
							{name}
						</option>
					))}
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
					disabled={isDisabled}
					className="bg-fuchsia-500 text-white rounded-full px-8 py-2 text-sm font-bold uppercase disabled:opacity-50"
				>
					Send
				</button>
			</div>
		</form>
	);
};

export default FormSurvey;
