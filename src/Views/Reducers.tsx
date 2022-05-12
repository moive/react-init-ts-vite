import React, { useReducer, useState } from "react";

interface SelectItemState {
	count: number;
}

type Action = {
	type: string;
};

const initialState = { count: 0 };

function reducer(state: SelectItemState, action: Action): SelectItemState {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count + 1 };
		case "DECREMENT":
			return { count: state.count - 1 };
		default:
			return state;
	}
}

const Reducers = () => {
	// const [count, setCount] = useState(0);

	const [state, dispatch] = useReducer(reducer, initialState);

	const handleIncrement = () => dispatch({ type: "INCREMENT" });
	const handleDecrement = () => dispatch({ type: "DECREMENT" });

	return (
		<div>
			<h2 className="text-center text-3xl font-bold my-10 uppercase">
				Reducers <span>{state.count}</span>
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
