import React, { useState, useEffect } from "react";
import Watch from "./Watch";

const Clock = () => {
	const [hour, setHour] = useState(new Date().toLocaleTimeString());
	const [visible, setVisible] = useState(false);

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
		};
	}, [visible]);

	return (
		<div>
			{visible && (
				<h3>
					Time is: <Watch hour={hour} />
				</h3>
			)}
			<div>
				<button onClick={() => setVisible(true)}>Play</button>
				<button onClick={() => setVisible(false)}>Stop</button>
			</div>
		</div>
	);
};

export default Clock;
