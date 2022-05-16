import { useEffect, useState } from "react";
import ProductItemRedux from "./ProductItemRedux";

import CartItemRedux from "./CartItemRedux";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { IProduct } from "../../store/types";
import {
	addToCart,
	clearCart,
	decrementOneFromCart,
	incrementFromCart,
	removeAllFromCart,
} from "../../store/shoppingSlice";

const ShoppingCartRedux = () => {
	const [totalAmount, setTotalAmount] = useState(0);

	const state = useAppSelector((state) => state);
	const dispatch = useAppDispatch();

	const { products, cart } = state.shopping;

	useEffect(() => {
		let total = cart.reduce((acc, el) => acc + el.quantity! * el.price, 0);
		setTotalAmount(total);
	}, [cart]);
	/* 
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
 */
	return (
		<div>
			<h2 className="text-center font-bold text-xl uppercase my-3">
				Products
			</h2>
			<article className="flex flex-wrap justify-center">
				{products.map((product: IProduct) => (
					<ProductItemRedux
						key={product.id}
						data={product}
						addToCart={() => dispatch(addToCart(product.id))}
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
							<CartItemRedux
								key={index}
								data={item}
								decrementOneFromCart={() =>
									dispatch(decrementOneFromCart(item.id))
								}
								removeAllFromCart={() =>
									dispatch(removeAllFromCart(item.id))
								}
								incrementFromCart={() =>
									dispatch(incrementFromCart(item.id))
								}
							/>
						))}
					</article>
					<article className="flex justify-end mx-5">
						<span className="font-bold m-5 italic">Total:</span>
						<span className="my-5 font-bold ">{totalAmount}</span>
					</article>
					<div className="p-5 flex row-reverse">
						<button
							onClick={() => dispatch(clearCart())}
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

export default ShoppingCartRedux;
