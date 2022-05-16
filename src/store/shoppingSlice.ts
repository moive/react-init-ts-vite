import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShoppingState } from "./types";

const initialState: ShoppingState = {
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

export const shoppingSlice = createSlice({
	name: "shopping",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<number>) => {
			let newItem = state.products.find((p) => p.id == action.payload);

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
		},
		incrementFromCart: (state, action: PayloadAction<number>) => {
			let itemToIncrement = state.cart.find(
				(item) => item.id === action.payload
			);

			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === itemToIncrement?.id
						? { ...item, quantity: item.quantity! + 1 }
						: item
				),
			};
		},
		decrementOneFromCart: (state, action: PayloadAction<number>) => {
			let itemToDelete = state.cart.find(
				(item) => item.id === action.payload
			);
			return itemToDelete?.quantity! > 1
				? {
						...state,
						cart: state.cart.map((item) =>
							item.id === action.payload
								? { ...item, quantity: item.quantity! - 1 }
								: item
						),
				  }
				: {
						...state,
						cart: state.cart.filter(
							(item) => item.id !== action.payload
						),
				  };
		},
		removeAllFromCart: (state, action: PayloadAction<number>) => {
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		},
		clearCart: (state) => {
			state.cart = initialState.cart;
		},
	},
});

export const {
	addToCart,
	incrementFromCart,
	decrementOneFromCart,
	removeAllFromCart,
	clearCart,
} = shoppingSlice.actions;

export default shoppingSlice.reducer;
