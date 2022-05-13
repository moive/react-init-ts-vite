import React, { useReducer } from "react";
import ProductItem from "./ProductItem";

import {
	shoppingInitialState,
	shoppingReducer,
} from "../../reducers/shoppingReducer";

const ShoppingCard = () => {
	const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);

	const { products, cart } = state;

	const addToCart = (id: number) => {
		console.log(id);
	};
	const delFromCart = () => {};
	const clearCart = () => {};

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
		</div>
	);
};

export default ShoppingCard;
