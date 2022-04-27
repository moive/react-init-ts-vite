import React, { useEffect, useState } from "react";
import { MyError } from "../utils/MyError";

export const useFetchSelect = (url: string) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchData(url);

		return abortController.abort();
	}, [url]);

	const abortController = new AbortController();
	const signal = abortController.signal;

	const fetchData = async (url: string) => {
		setLoading(true);

		try {
			const res = await fetch(url);
			if (!res.ok) {
				let err = new MyError("Error in fetch request");
				err.status = res.status || "00";
				err.statusText = res.statusText || "A mistake ocurred";
				throw err;
			}
			const json = await res.json();

			if (!signal.aborted) {
				setData(json);
				setError(null);
			}
		} catch (error: any) {
			if (!signal.aborted) {
				setData(null);
				setError(error);
			}
		} finally {
			!signal.aborted && setLoading(false);
		}
	};

	return { data, error, loading };
};
