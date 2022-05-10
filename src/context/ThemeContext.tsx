import { createContext, useState } from "react";
interface Props {
	children: React.ReactNode;
}

interface IThemeContext {
	theme: string;
	isDark: boolean;
	handleTheme: (theme: string) => void;
	handleModeTheme: (v: boolean) => void;
}

const initialContext = {
	theme: "",
	isDark: false,
	handleTheme: () => console.log("handletheme"),
	handleModeTheme: (v: boolean) => console.log(v),
};

const ThemeContext = createContext<IThemeContext>(initialContext);

const initTheme = "dark";

const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState(initTheme);
	const [isDark, setIsDark] = useState(theme != "light" ? false : true);

	const handleTheme = (theme: string) => {
		setTheme(theme);
	};

	const handleModeTheme = (val: boolean) => {
		setIsDark(val);
		if (isDark) {
			handleTheme("dark");
		} else {
			handleTheme("light");
		}
	};

	const data = { theme, isDark, handleTheme, handleModeTheme };

	return (
		<ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
	);
};

export { ThemeProvider };

export default ThemeContext;
