import { TYPES } from "../actions/shoppingActions";

export interface IProduct {
	id: number;
	name: string;
	price: number;
}

interface IState {
	products: IProduct[];
	cart: [];
}

type Action = {
	type: string;
	payload?: number;
	isInit?: boolean;
};

export const shoppingInitialState: IState = {
	products: [
		{ id: 1, name: "Product 1", price: 100 },
		{ id: 2, name: "Product 2", price: 200 },
		{ id: 3, name: "Product 3", price: 300 },
		{ id: 4, name: "Product 4", price: 400 },
		{ id: 5, name: "Product 5", price: 500 },
		{ id: 6, name: "Product 6", price: 600 },
		{ id: 7, name: "Product 7", price: 700 },
	],
	cart: [],
};

export function shoppingReducer(state: IState, action: Action) {
	switch (action.type) {
		case TYPES.ADD_TO_CART: {
		}
		case TYPES.REMOVE_ONE_FROM_CART: {
		}
		case TYPES.REMOVE_ALL_FROM_CART: {
		}
		case TYPES.CLEAR_CART: {
		}

		default:
			return state;
	}
}
