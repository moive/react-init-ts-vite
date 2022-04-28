import React, { useState } from "react";

type FormInput = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormSubmit = React.FormEvent<HTMLFormElement>;
type FormBlur = React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>;

export const useForm = (initialForm: any, validationForm: any) => {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState(null);

	const handleChange = (e: FormInput) => {};
	const handleBlur = (e: FormBlur) => {};
	const handleSubmit = (e: FormSubmit) => {};

	return { form, errors, loading, handleChange, handleBlur, handleSubmit };
};
