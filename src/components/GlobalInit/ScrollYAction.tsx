import React, { useEffect, useState } from 'react';

const ScrollYAction = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		const detectScroll = ()=> setScrollY(window.pageYOffset);

		window.addEventListener("scroll", detectScroll);
		console.log(scrollY);

		return ()=>{
			window.removeEventListener("scroll", detectScroll);
			console.log("this componnent is dismount");
		}
	})
	
	return (
		<div>ScrollY</div>
	)
}

export default ScrollYAction;