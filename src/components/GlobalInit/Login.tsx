import React, { Dispatch, memo, SetStateAction, useMemo } from "react";

type Props = {
	count: number;
	handleCount: () => void;
};

const Login = ({ count, handleCount }: Props) => {
	// let superNumber = 0;
	// for (let i = 0; i < 1000000000; i++) {
	// 	superNumber++;
	// }

	const superNumber = useMemo(() => {
		let number = 0;
		for (let i = 0; i < 1000000000; i++) {
			number++;
		}
		return number;
	}, []);

	console.log("Render children---->");
	return (
		<div>
			Login <span>{count}</span>
			<button className="ml-4" type="button" onClick={handleCount}>
				count +
			</button>
			<div>{superNumber}</div>
		</div>
	);
};

export default memo(Login);
