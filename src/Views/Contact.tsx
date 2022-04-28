import React from "react";
import { useForm } from "../hooks/useForm";

const initialForm = {};
const validationsForm = (form) => {};

const Contact = () => {
	const { form, errors, loading, handleChange, handleBlur, handleSubmit } =
		useForm(initialForm, validationsForm);
	return (
		<div>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Contact
			</h2>
			<form onSubmit={handleSubmit} className="max-w-screen-md mx-auto">
				<input
					className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500 mb-4"
					type="text"
					name="name"
					placeholder="Enter name"
					onBlur={handleBlur}
					onChange={handleChange}
					value={form.name}
					required
				/>
				<input
					className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500 mb-4"
					type="text"
					name="email"
					placeholder="Enter email"
					onBlur={handleBlur}
					onChange={handleChange}
					value={form.email}
					required
				/>
				<input
					className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500 mb-4"
					type="text"
					name="subject"
					placeholder="Enter subject"
					onBlur={handleBlur}
					onChange={handleChange}
					value={form.subject}
					required
				/>
				<textarea
					name="comments"
					cols={50}
					rows={5}
					placeholder="Enter comments"
					onBlur={handleBlur}
					onChange={handleChange}
					value={form.comments}
					required
				></textarea>
				<button className="bg-fuchsia-500 text-white rounded-full px-8 py-2 text-sm font-bold uppercase disabled:opacity-50">
					Send
				</button>
			</form>
		</div>
	);
};

export default Contact;
