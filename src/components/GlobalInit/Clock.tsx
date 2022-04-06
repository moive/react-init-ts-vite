import React, { useState, useEffect } from "react";
import Watch from "./Watch";

const Clock = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		console.log("This component mounted");
	}, []);

	return (
		<div>
			{visible && (
				<h3>
					Time is: <Watch visible={visible} />
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
