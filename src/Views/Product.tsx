import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
	const LIMIT = 20;
	// let locations = useLocation();
	// console.log(locations);
	let { search } = useLocation();
	let query = new URLSearchParams(search);
	// console.log(query);

	let start = parseInt(query.get("start")!) || 1;
	let end = parseInt(query.get("end")!) || LIMIT;
	// console.log(start, end);

	let navigate = useNavigate();

	const handlePrev = () => {
		navigate(`?start=${start - LIMIT}&end=${end - LIMIT}`);
	};
	const handleNext = () => {
		navigate(`?start=${start + LIMIT}&end=${end + LIMIT}`);
	};

	return (
		<div>
			<h2 className="text-center text-xl font-bold">Product</h2>
			<p>
				Showing products <b>{start}</b> to <b>{end}</b>
			</p>
			<div>
				{start > LIMIT && (
					<button
						className="bg-indigo-500 px-10 py-2 uppercase rounded-full text-sm text-white mr-5"
						onClick={handlePrev}
					>
						Prev
					</button>
				)}
				<button
					className="bg-indigo-500 px-10 py-2 uppercase rounded-full text-sm text-white"
					onClick={handleNext}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Product;
