import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
	// console.log(useParams());
	let { username } = useParams();
	return (
		<div>
			<h2 className="text-center text-xl font-bold">User profile</h2>
			<p>
				Name user: <b>{username}</b>
			</p>
		</div>
	);
};

export default User;
