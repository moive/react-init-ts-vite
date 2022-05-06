import React, { Dispatch, memo, SetStateAction } from "react";

type Props = {
	count: number;
	handleCount: () => void;
};

const Login = ({ count, handleCount }: Props) => {
	console.log(555555);
	return (
		<div>
			Login <span>{count}</span>
			<button className="ml-4" type="button" onClick={handleCount}>
				count +
			</button>
		</div>
	);
};

export default memo(Login);
