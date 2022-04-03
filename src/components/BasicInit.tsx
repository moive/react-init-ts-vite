import React, { useState } from 'react';
import logo from '../logo.svg';
import Login from './Login';
import Logout from './Logout';

type Props = {
	title: JSX.Element;
	reactElement:JSX.Element;
	listNumbers: Array<number>;
	fn: (value: number, index: number, array: number[]) => number;
	bool: boolean;
}

const BasicInit = ({title, reactElement, listNumbers, fn, bool }:Props) => {
	const [count, setCount] = useState(0);

	const [session, setSession] = useState(true)
	return (
		<header className="App-header">
			<div>{session ? <Login/> : <Logout/>}</div>
			<img src={logo} className="App-logo" alt="logo" />
			{title}
			<p>
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is: {count}
				</button>
			</p>
			<p>{reactElement}</p>
			<p>{listNumbers.join(", ")}</p>
			<p>{listNumbers.map(fn).join(", ")}</p>
			<p>{bool.toString()}</p>
		</header>
	)
}

export default BasicInit