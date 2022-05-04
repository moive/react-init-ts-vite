import React from "react";
import { useParams } from "react-router-dom";

const Topic = () => {
	let { topic } = useParams();
	return (
		<div>
			<h3 className="text-md font-bold capitalize">{topic}</h3>
			<p> This is view of {topic}</p>
		</div>
	);
};

export default Topic;
