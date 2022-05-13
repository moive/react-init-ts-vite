import React from "react";
import { IProduct } from "../../reducers/shoppingReducer";

type Props = {
	data: IProduct;
	delFromCart: (id: number, val?: boolean) => void;
	incrementFromCart: (id: number) => void;
};

const CartItem = ({ data, delFromCart, incrementFromCart }: Props) => {
	let { id, name, price, quantity } = data;
	return (
		<div
			className="flex py-5 relative"
			style={{ borderBottom: "1px solid #e6e9ef" }}
		>
			<h4 className="m-5 grow">{name}</h4>
			<div className="m-5 flex">
				<button
					onClick={() => delFromCart(id)}
					className="mx-2 text-gray-700"
				>
					<span className="material-icons">keyboard_arrow_down</span>
				</button>
				<span className="font-bold">{quantity}</span>
				<button
					onClick={() => incrementFromCart(id)}
					className="mx-2 text-gray-700"
				>
					<span className="material-icons">keyboard_arrow_up</span>
				</button>
				<button
					onClick={() => delFromCart(id, true)}
					className="mx-2 absolute top-2 right-2"
				>
					<span className="material-icons">close</span>
				</button>
			</div>
			<h5 className="m-5">${price * quantity!}.00</h5>
		</div>
	);
};

export default CartItem;
