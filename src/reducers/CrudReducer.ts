import { TYPES } from "../actions/crudActions";
import { TypeCrudApp } from "../utils/TypeCrudApp";

export const crudInitialState: IState = {
	db: null,
};
interface IState {
	db: TypeCrudApp[] | null;
}
interface Action {
	type: string;
	payload: any;
}

export function crudReducer(state: IState, action: Action) {
	switch (action.type) {
		case TYPES.READ_ALL_DATA: {
			console.log("payload: ", action.payload);
			console.log("state.db", state.db);
			return {
				...state,
				db: action.payload.map((data: TypeCrudApp) => data),
			};
		}
		case TYPES.CREATE_DATA: {
			return {
				...state,
				db: [...state.db!, action.payload],
			};
		}
		case TYPES.UPDATE_DATA: {
			let newData = state.db?.map((el) =>
				el.id === action.payload.id ? action.payload : el
			);

			return {
				...state,
				db: newData,
			};
		}
		case TYPES.DELETE_DATA: {
			let newData = state.db?.filter((el) => el.id !== action.payload);
			return {
				...state,
				db: newData,
			};
		}
		case TYPES.NO_DATA: {
			return crudInitialState;
		}
		default:
			return state;
	}
}
