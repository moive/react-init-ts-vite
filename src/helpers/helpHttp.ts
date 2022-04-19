import { TypeError } from "../utils/TypeError";
export const helpHttp = () => {
	const customFetch = (endpoint: string, options: any) => {
		const defaultHeader = {
			accept: "application/json",
		};

		const controller = new AbortController();
		options.signal = controller.signal;

		options.method = options.method || "GET";
		options.headers = options.headers
			? { ...defaultHeader, ...options.headers }
			: defaultHeader;

		options.body = JSON.stringify(options.body) || false;

		if (!options.body) delete options.body;

		// console.log(options);
		setTimeout(() => {
			controller.abort();
		}, 3000);

		return fetch(endpoint, options)
			.then((res) => {
				return res.ok
					? res.json()
					: Promise.reject({
							err: true,
							status: res.status || "00",
							statusText: res.statusText || "A mistake ocurred",
					  });
			})
			.catch((error) => {
				if (error.name == "TypeError" || error.name == "AbortError") {
					let err: TypeError = {
						err: true,
						status: error.name,
						statusText: error.message,
					};
					return err;
				}
				return error;
			});
	};

	const get = (url: string, options: any = {}) => customFetch(url, options);
	const post = (url: string, options: any = {}) => {
		options.method = "POST";
		return customFetch(url, options);
	};
	const put = (url: string, options: any = {}) => {
		options.method = "PUT";
		return customFetch(url, options);
	};
	const del = (url: string, options: any = {}) => {
		options.method = "DELETE";
		return customFetch(url, options);
	};

	return {
		get,
		post,
		put,
		del,
	};
};
