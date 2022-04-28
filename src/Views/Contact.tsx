import React from "react";
import Loader from "../components/Loader/Loader";
import Message from "../components/Loader/Message";
import { useForm } from "../hooks/useForm";
import { TypeFormContact } from "../utils/TypeFormContact";

const initialForm = {
	name: "",
	email: "",
	subject: "",
	comments: "",
};
const validationsForm = (form: TypeFormContact) => {
	let errors: any = {};
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexComments = /^.{1,255}$/;

	if (!form.name.trim()) {
		errors.name = "The field 'Name' is required";
	} else if (!regexName.test(form.name.trim())) {
		errors.name = "The field 'Name' only accepts letters and blanks";
	}
	if (!form.email.trim()) {
		errors.email = "The field 'Email' is required";
	} else if (!regexEmail.test(form.email.trim())) {
		errors.email = "The field 'Email' is not valid";
	}
	if (!form.subject.trim()) {
		errors.subject = "The field 'Subject' is required";
	}
	if (!form.comments.trim()) {
		errors.comments = "The field 'Comments' is required";
	} else if (!regexComments.test(form.comments.trim())) {
		errors.comments = "The field 'Comments' not to exceed 255 characters";
	}

	return errors;
};

const Contact = () => {
	const {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	} = useForm(initialForm, validationsForm);
	return (
		<div>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Contact
			</h2>
			<form onSubmit={handleSubmit} className="max-w-screen-md mx-auto">
				<div className="mb-4">
					<input
						className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500"
						type="text"
						name="name"
						placeholder="Enter name"
						onBlur={handleBlur}
						onChange={handleChange}
						value={form.name}
						required
					/>
					{errors.name && (
						<small className="block text-red-500 ml-2 mt-1">
							{errors.name}
						</small>
					)}
				</div>
				<div className="mb-4">
					<input
						className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500"
						type="text"
						name="email"
						placeholder="Enter email"
						onBlur={handleBlur}
						onChange={handleChange}
						value={form.email}
						required
					/>
					{errors.email && (
						<small className="block text-red-500 ml-2 mt-1">
							{errors.email}
						</small>
					)}
				</div>
				<div className="mb-4">
					<input
						className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500"
						type="text"
						name="subject"
						placeholder="Enter subject"
						onBlur={handleBlur}
						onChange={handleChange}
						value={form.subject}
						required
					/>
					{errors.subject && (
						<small className="block text-red-500 ml-2 mt-1">
							{errors.subject}
						</small>
					)}
				</div>
				<div className="mb-4">
					<textarea
						className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none hover:border-fuchsia-400 focus:ring-sky-500 sm:text-sm hover:text-fuchsia-500"
						name="comments"
						cols={50}
						rows={5}
						placeholder="Enter comments"
						onBlur={handleBlur}
						onChange={handleChange}
						value={form.comments}
						required
					></textarea>
					{errors.comments && (
						<small className="block text-red-500 ml-2 mt-1">
							{errors.comments}
						</small>
					)}
				</div>
				<button className="bg-fuchsia-500 text-white rounded-full px-8 py-2 text-sm font-bold uppercase disabled:opacity-50">
					Send
				</button>
				{loading && <Loader />}
				{response && (
					<Message
						msg="Data have been send"
						bgColor="bg-green-400 text-white font-bold p-3 mt-5"
					/>
				)}
			</form>
		</div>
	);
};

export default Contact;
