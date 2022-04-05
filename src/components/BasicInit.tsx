import React, { useState } from 'react';
import logo from '../logo.svg';
import Btn from './Btn';
import Login from './Login';
import Logout from './Logout';
import ScrollYAction from './ScrollYAction';

type Props = {
	title: JSX.Element;
	reactElement:JSX.Element;
	listNumbers: Array<number>;
	fn: (value: number, index: number, array: number[]) => number;
	bool: boolean;
}

type FormElement = React.FormEvent<HTMLButtonElement>;

const BasicInit = ({title, reactElement, listNumbers, fn, bool }:Props) => {
	const [count, setCount] = useState(0);

	const [session, setSession] = useState(true);

	const [visibleScroll, setVisibleScroll] = useState(false);

	const handleClick = (e:FormElement, msg: string) =>{
		console.log(e);
		console.log(e.nativeEvent.target);
		console.log(msg);
	}

	const playScroll = ()=>setVisibleScroll(true)
	const removeScroll = ()=>setVisibleScroll(false)

	return (
		<header className="App-header">
			<div>{session ? <Login/> : <Logout/>}</div>
			<img src={logo} className="App-logo" alt="logo" />
			{title}
			<p>
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is: {count}
				</button>

				<button
				    onClick={(e)=>handleClick(e,
				    "Hello world...")}
				>Greet</button>

				<Btn myOnClick={(e)=>handleClick(e, "welcome...!")} />
			</p>
			<p>{reactElement}</p>
			<p>{listNumbers.join(", ")}</p>
			<p>{listNumbers.map(fn).join(", ")}</p>
			<p>{bool.toString()}</p>
			<div>
				<button onClick={playScroll}>Play Scroll</button>
				<button onClick={removeScroll}>Remove Scroll</button>
			</div>
			{ visibleScroll && <div> <ScrollYAction /></div> }
		</header>
	)
}

export default BasicInit