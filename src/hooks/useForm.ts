import React, { useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { TypeFormContact } from "../utils/TypeFormContact";

type FormInput = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormSubmit = React.FormEvent<HTMLFormElement>;
type FormBlur = React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>;

export const useForm = (initialForm: TypeFormContact, validationForm: any) => {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState<any>({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(false);

	const handleChange = (e: FormInput) => {
		const { name, value } = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};
	const handleBlur = (e: FormBlur) => {
		handleChange(e);
		setErrors(validationForm(form));
	};
	const handleSubmit = (e: FormSubmit) => {
		e.preventDefault();
		setErrors(validationForm(form));

		if (Object.keys(errors).length === 0) {
			alert("Sending form");
			setLoading(true);
			helpHttp()
				.post(
					"https://formsubmit.co/ajax/466504ea7a73489b02311f9743ba5b7e",
					{
						body: form,
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
					}
				)
				.then((res) => {
					setLoading(false);
					setResponse(true);
					setForm(initialForm);
					setTimeout(() => setResponse(false), 5000);
				});
		}
	};

	return {
		form,
		errors,
		loading,
		response,
		handleChange,
		handleBlur,
		handleSubmit,
	};
};
