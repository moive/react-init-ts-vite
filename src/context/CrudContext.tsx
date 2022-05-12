import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";
import { TypeCrudApp } from "../utils/TypeCrudApp";
import { TypeError } from "../utils/TypeError";

type Props = {
	children: React.ReactNode;
};

interface ICrudContext {
	loading: boolean;
	db: TypeCrudApp[] | null;
	error: TypeError | null;
	dataToEdit: TypeCrudApp | null;
	setDataToEdit: React.Dispatch<React.SetStateAction<TypeCrudApp | null>>;
	createData: (item: TypeCrudApp) => void;
	updateData: (item: TypeCrudApp) => void;
	deleteData: (id: number) => void;
}

const initialCrudContext: ICrudContext = {
	loading: false,
	db: null,
	error: null,
	dataToEdit: null,
	setDataToEdit: () => null,
	createData: () => console.log(111),
	updateData: () => console.log(222),
	deleteData: () => console.log(333),
};
const CrudContext = createContext(initialCrudContext);

const CrudProvider = ({ children }: Props) => {
	const [db, setDb] = useState<TypeCrudApp[] | null>(null);
	const [dataToEdit, setDataToEdit] = useState<TypeCrudApp | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<TypeError | null>(null);

	let api = helpHttp();
	let url = "http://localhost:5000/saintseiya";

	useEffect(() => {
		setLoading(true);
		api.get(url)
			.then((res) => {
				console.log("res 2", res);
				if (!res.err) {
					setDb(res);
					setError(null);
				} else {
					setDb([]);
					setError(res);
				}
			})
			.catch((e) => console.log(e))
			.finally(() => setLoading(false));
	}, [url]);

	const createData = (item: TypeCrudApp) => {
		item.id = Date.now();
		let options = {
			body: item,
			headers: { "content-type": "application/json" },
		};
		api.post(url, options).then((res) => {
			if (!res.err) {
				setDb([...db!, res]);
			} else {
				setError(res);
			}
		});
	};
	const updateData = (item: TypeCrudApp) => {
		let endpoint = `${url}/${item.id}`;

		let options = {
			body: item,
			headers: { "content-type": "application/json" },
		};

		api.put(endpoint, options).then((res) => {
			if (!res.err) {
				let newData = db!.map((el: TypeCrudApp) =>
					el.id == item.id ? item : el
				);
				setDb(newData);
			} else {
				setError(res);
			}
		});
	};
	const deleteData = (id: number) => {
		let isDelete = window.confirm("Are you sure to eliminate " + id);

		let endpoint = `${url}/${id}`;
		let options = {
			headers: { "content-type": "application/json" },
		};

		if (isDelete) {
			api.del(endpoint, options).then((res) => {
				if (!res.err) {
					let newData = db!.filter(
						(item: TypeCrudApp) => item.id != id
					);
					setDb(newData);
				} else {
					setError(res);
				}
			});
		}
		return;
	};

	const data = {
		loading,
		db,
		error,
		dataToEdit,
		setDataToEdit,
		createData,
		updateData,
		deleteData,
	};

	return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export { CrudProvider };

export default CrudContext;
