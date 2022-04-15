import React, { useRef, useState } from "react";
import logo from "../../logo.svg";
import Btn from "./Btn";
import Clock from "./Clock";
import Login from "./Login";
import Logout from "./Logout";
import ScrollYAction from "./ScrollYAction";

type Props = {
	title: JSX.Element;
	reactElement: JSX.Element;
	listNumbers: Array<number>;
	fn: (value: number, index: number, array: number[]) => number;
	bool: boolean;
};

type FormElement = React.FormEvent<HTMLButtonElement>;

const BasicInit = ({ title, reactElement, listNumbers, fn, bool }: Props) => {
	const [count, setCount] = useState(0);

	const [session, setSession] = useState(true);

	const [visibleScroll, setVisibleScroll] = useState(false);

	const handleClick = (e: FormElement, msg: string) => {
		console.log(e);
		console.log(e.nativeEvent.target);
		console.log(msg);
	};

	const playScroll = () => setVisibleScroll(true);
	const removeScroll = () => setVisibleScroll(false);

	const refBtn = useRef<HTMLButtonElement>(null);
	const refLogo = useRef<HTMLImageElement>(null);

	const handleToggleMenu = (e: FormElement) => {
		if (refBtn.current?.textContent?.toLowerCase() === "hide logo") {
			refBtn.current.textContent = "Show Logo";
			refLogo.current!.style.opacity = "0";
		} else {
			refBtn.current!.textContent = "Hide logo";
			refLogo.current!.style.opacity = "1";
		}
	};

	return (
		<header className="App-header">
			<div>{session ? <Login /> : <Logout />}</div>
			<img src={logo} className="App-logo" alt="logo" ref={refLogo} />
			<div>
				<button
					className="bg-indigo-500 px-10 py-2 uppercase rounded-full text-sm"
					ref={refBtn}
					onClick={handleToggleMenu}
				>
					Hide logo
				</button>
			</div>
			{title}
			<p>
				<button
					className="bg-red-500 px-10 py-2 uppercase rounded-full text-sm mr-4"
					type="button"
					onClick={() => setCount((count) => count + 1)}
				>
					count is: {count}
				</button>

				<button
					className="bg-yellow-500 px-10 py-2 uppercase rounded-full text-sm"
					onClick={(e) => handleClick(e, "Hello world...")}
				>
					Greet
				</button>
				<span className="block">
					<Btn myOnClick={(e) => handleClick(e, "welcome...!")} />
				</span>
			</p>
			<p>{reactElement}</p>
			<p>{listNumbers.join(", ")}</p>
			<p>{listNumbers.map(fn).join(", ")}</p>
			<p>{bool.toString()}</p>
			<div>
				<button
					className="bg-purple-500 px-10 py-2 uppercase rounded-full text-sm mr-4"
					onClick={playScroll}
				>
					Play Scroll
				</button>
				<button
					className="bg-green-800 px-10 py-2 uppercase rounded-full text-sm"
					onClick={removeScroll}
				>
					Remove Scroll
				</button>
			</div>
			{visibleScroll && (
				<div>
					{" "}
					<ScrollYAction />
				</div>
			)}
			<Clock />
		</header>
	);
};

export default BasicInit;
