import React, { useEffect } from "react";
type Props = {
	hour: string;
};

const Watch = ({ hour }: Props) => {
	useEffect(() => {
		return () => {
			console.log("this component is didmount");
		};
	}, [hour]);
	return <span>{hour}</span>;
};

export default Watch;
