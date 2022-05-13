import { TYPES } from "../actions/shoppingActions";

export interface IProduct {
	id: number;
	name: string;
	price: number;
	quantity?: number;
}

interface IState {
	products: IProduct[];
	cart: IProduct[];
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
			let newItem = state.products.find((p) => p.id === action.payload);
			// console.log("", newItem);

			let itemInCart = state.cart.find((item) => item.id === newItem?.id);

			return itemInCart
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === newItem?.id
								? { ...item, quantity: item.quantity! + 1 }
								: item
						),
				  }
				: {
						...state,
						cart: [...state.cart, { ...newItem!, quantity: 1 }],
				  };
		}
		case TYPES.REMOVE_ONE_FROM_CART: {
		}
		case TYPES.REMOVE_ALL_FROM_CART: {
		}
		case TYPES.CLEAR_CART: {
			return shoppingInitialState;
		}

		default:
			return state;
	}
}
