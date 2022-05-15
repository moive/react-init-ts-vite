import { createContext, useEffect, useReducer, useState } from "react";
import { TYPES } from "../actions/crudActions";
import { helpHttp } from "../helpers/helpHttp";
import { crudInitialState, crudReducer } from "../reducers/CrudReducer";
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
	// const [state, dispatch] = useReducer(crudReducer, crudInitialState);
	// const { db } = state;

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
					// dispatch({ type: TYPES.READ_ALL_DATA, payload: res });
					setError(null);
				} else {
					setDb([]);
					// dispatch({ type: TYPES.NO_DATA, payload: [] });
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
				// dispatch({ type: TYPES.CREATE_DATA, payload: res });
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
				// dispatch({ type: TYPES.UPDATE_DATA, payload: data });
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
					// dispatch({ type: TYPES.DELETE_DATA, payload: id });
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
