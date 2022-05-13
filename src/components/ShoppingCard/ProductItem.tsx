import React from "react";
import { IProduct } from "../../reducers/shoppingReducer";

type Props = {
	data: IProduct;
	addToCart: (id: number) => void;
};

const ProductItem = ({ data, addToCart }: Props) => {
	const { id, name, price } = data;

	return (
		<>
			<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden w-60 m-3">
				<div className="bg-white px-5 py-6">
					<h4 className="font-bold">{name}</h4>
					<h5 className="my-2">${price}.00</h5>
					<button
						onClick={() => addToCart(id)}
						className="bg-red-500 hover:bg-white px-3 py-2 uppercase rounded-md text-sm mr-4 text-white hover:text-red-500 font-bold border hover:border-red-500 hover:border-solid transition-colors"
					>
						Add
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductItem;
