import BasicInit from "../components/GlobalInit/BasicInit";
import TitlePage from "../components/TitlePage";

const GlobalInit = () => {
	return (
		<BasicInit
			title={<TitlePage title="Hello Vite + React!" />}
			reactElement={
				<i>
					Edit <code>App.tsx</code> and save to test HMR updates.
				</i>
			}
			listNumbers={[1, 2, 3, 4, 5]}
			fn={(n: number, i: number) => n * n}
			bool={true}
		/>
	);
};

export default GlobalInit;
