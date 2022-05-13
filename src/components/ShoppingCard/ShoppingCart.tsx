import React, { useReducer } from "react";
import ProductItem from "./ProductItem";

import {
	shoppingInitialState,
	shoppingReducer,
} from "../../reducers/shoppingReducer";
import CartItem from "./CartItem";
import { TYPES } from "../../actions/shoppingActions";

const ShoppingCart = () => {
	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

	const { products, cart } = state;

	const addToCart = (id: number) => {
		console.log(id);
		dispatch({ type: TYPES.ADD_TO_CART, payload: id });
	};
	const delFromCart = () => {};
	const clearCart = () => {
		dispatch({ type: TYPES.CLEAR_CART });
	};

	return (
		<div>
			<h2 className="text-center font-bold text-xl uppercase my-3">
				Products
			</h2>
			<article className="flex flex-wrap justify-center">
				{products.map((product) => (
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
						{cart.map((item, index) => (
							<CartItem
								key={index}
								data={item}
								delFromCart={delFromCart}
							/>
						))}
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
