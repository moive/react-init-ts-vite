import React, { useEffect, useState } from "react";
type Props = {
	visible: boolean;
};

const Watch = ({ visible }: Props) => {
	const [hour, setHour] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		let timer: any;
		if (visible) {
			timer = setInterval(() => {
				setHour(new Date().toLocaleTimeString());
			}, 1000);
		} else {
			clearInterval(timer);
		}
		return () => {
			clearInterval(timer);
			console.log("This component didmount");
		};
	}, [visible]);

	return <span>{hour}</span>;
};

export default Watch;
