import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
	plus,
	plus5,
	reset,
	selectCount,
	subtract,
	subtract5,
} from "../store/counterSlice";

const CounterRedux = () => {
	const count = useAppSelector(selectCount);
	const dispatch = useAppDispatch();

	return (
		<div>
			<h2 className="font-bold text-center text-xl uppercase">
				Counter Redux {count}
			</h2>
			<nav>
				<button
					className="bg-cyan-500 px-10 py-2 uppercase rounded-full text-sm text-white font-bold mr-5"
					onClick={() => dispatch(plus())}
				>
					Increment
				</button>
				<button
					className="bg-red-500 px-10 py-2 uppercase rounded-full text-sm text-white font-bold mr-5"
					onClick={() => dispatch(plus5(5))}
				>
					Increment + 5
				</button>
				<button
					className="bg-gray-500 px-10 py-2 uppercase rounded-full text-sm text-white font-bold mr-5"
					onClick={() => dispatch(reset())}
				>
					Reset
				</button>
				<button
					className="bg-indigo-500 px-10 py-2 uppercase rounded-full text-sm text-white font-bold"
					onClick={() => dispatch(subtract())}
				>
					Decrement
				</button>
				<button
					className="bg-orange-500 px-10 py-2 uppercase rounded-full text-sm text-white font-bold"
					onClick={() => dispatch(subtract5(5))}
				>
					Decrement - 5
				</button>
			</nav>
		</div>
	);
};

export default CounterRedux;
