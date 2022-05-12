import React, { useReducer, useState } from "react";

interface SelectItemState {
	count: number;
}

type Action = {
	type: string;
	payload?: number;
	isInit?: boolean;
};

enum TYPES {
	INCREMENT = "INCREMENT",
	INCREMENT_5 = "INCREMENT_5",
	RESET = "RESET",
	DECREMENT = "DECREMENT",
	DECREMENT_5 = "DECREMENT_5",
}

const initialState: SelectItemState = { count: 0 };

const valueWhenIniExist = 200;

const init = (initialState: SelectItemState) => ({
	count: initialState.count + valueWhenIniExist,
});

const resetState = (isInit: boolean = false) => {
	if (isInit) {
		return { count: valueWhenIniExist };
	}

	return initialState;
};

function reducer(state: SelectItemState, action: Action): SelectItemState {
	switch (action.type) {
		case TYPES.INCREMENT:
			return { count: state.count + 1 };
		case TYPES.INCREMENT_5:
			return { count: state.count + action.payload! };
		case TYPES.DECREMENT:
			return { count: state.count - 1 };
		case TYPES.DECREMENT_5:
			return { count: state.count - action.payload! };
		case TYPES.RESET:
			return resetState(action.isInit);
		default:
			return state;
	}
}

const Reducers = () => {
	// const [count, setCount] = useState(0);

	const [state, dispatch] = useReducer(reducer, initialState, init);

	const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });
	const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });
	const handleIncrement_5 = () =>
		dispatch({ type: TYPES.INCREMENT_5, payload: 5 });
	const handleDecrement_5 = () =>
		dispatch({ type: TYPES.DECREMENT_5, payload: 5 });
	const handleReset = () => dispatch({ type: TYPES.RESET, isInit: true });

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
					className="bg-red-500 px-10 py-2 uppercase rounded-full text-sm text-white font-bold mr-5"
					onClick={handleIncrement_5}
				>
					Increment + 5
				</button>
				<button
					className="bg-gray-500 px-10 py-2 uppercase rounded-full text-sm text-white font-bold mr-5"
					onClick={handleReset}
				>
					Reset
				</button>
				<button
					className="bg-indigo-500 px-10 py-2 uppercase rounded-full text-sm text-white font-bold"
					onClick={handleDecrement}
				>
					Increment
				</button>
				<button
					className="bg-orange-500 px-10 py-2 uppercase rounded-full text-sm text-white font-bold"
					onClick={handleDecrement_5}
				>
					Increment - 5
				</button>
			</div>
		</div>
	);
};

export default Reducers;
