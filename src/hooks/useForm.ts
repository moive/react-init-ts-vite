import React, { useState } from "react";
import { TypeFormContact } from "../utils/TypeFormContact";

type FormInput = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormSubmit = React.FormEvent<HTMLFormElement>;
type FormBlur = React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>;

export const useForm = (initialForm: TypeFormContact, validationForm: any) => {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState<any>({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

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
	const handleSubmit = (e: FormSubmit) => {};

	return { form, errors, loading, handleChange, handleBlur, handleSubmit };
};
