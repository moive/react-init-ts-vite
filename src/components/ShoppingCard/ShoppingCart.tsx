import React, { useEffect, useReducer, useState } from "react";
import ProductItem from "./ProductItem";

import {
	IProduct,
	shoppingInitialState,
	shoppingReducer,
} from "../../reducers/shoppingReducer";
import CartItem from "./CartItem";
import { TYPES } from "../../actions/shoppingActions";

const ShoppingCart = () => {
	const [totalAmount, setTotalAmount] = useState(0);

	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

	const { products, cart } = state;

	useEffect(() => {
		let total = cart.reduce((acc, el) => acc + el.quantity! * el.price, 0);
		setTotalAmount(total);
	}, [cart]);

	const addToCart = (id: number) => {
		dispatch({ type: TYPES.ADD_TO_CART, payload: id });
	};
	const incrementFromCart = (id: number) => {
		dispatch({ type: TYPES.INCREMENT_ONE_FROM_CART, payload: id });
	};
	const delFromCart = (id: number, all = false) => {
		if (all) {
			dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
		} else {
			dispatch({ type: TYPES.DECREMENT_ONE_FROM_CART, payload: id });
		}
	};
	const clearCart = () => {
		dispatch({ type: TYPES.CLEAR_CART });
	};

	return (
		<div>
			<h2 className="text-center font-bold text-xl uppercase my-3">
				Products
			</h2>
			<article className="flex flex-wrap justify-center">
				{products.map((product: IProduct) => (
					<ProductItem
						key={product.id}
						data={product}
						addToCart={addToCart}
					/>
				))}
			</article>
			{cart.length > 0 && (
				<div>
					<h3 className="my-5 font-bold text-3xl font-bold uppercase text-center">
						Your bag
					</h3>
					<article>
						{cart.map((item: IProduct, index: number) => (
							<CartItem
								key={index}
								data={item}
								delFromCart={delFromCart}
								incrementFromCart={incrementFromCart}
							/>
						))}
					</article>
					<article className="flex justify-end mx-5">
						<span className="font-bold m-5 italic">Total:</span>
						<span className="my-5 font-bold ">{totalAmount}</span>
					</article>
					<div className="p-5 flex row-reverse">
						<button
							onClick={clearCart}
							className="flex items-center bg-rose-500 px-6 py-2 uppercase rounded-full text-xs mr-4 text-white"
						>
							<span className="mr-2 font-bold">clear cart </span>
							<span className="material-icons">
								remove_shopping_cart
							</span>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default ShoppingCart;
