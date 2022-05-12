import React, { useState } from "react";

const Reducers = () => {
	const [count, setCount] = useState(0);

	const handleIncrement = () => setCount((count) => count + 1);
	const handleDecrement = () => setCount((count) => count - 1);

	return (
		<div>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Reducers <span>{count}</span>
			</h2>
			<div>
				<button
					className="bg-cyan-500 px-10 py-2 uppercase rounded-full text-sm text-white font-bold mr-5"
					onClick={handleIncrement}
				>
					Increment
				</button>
				<button
					className="bg-indigo-500 px-10 py-2 uppercase rounded-full text-sm text-white font-bold"
					onClick={handleDecrement}
				>
					Increment
				</button>
			</div>
		</div>
	);
};

export default Reducers;
