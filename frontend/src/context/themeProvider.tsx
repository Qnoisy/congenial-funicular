import {
	createContext,
	ReactNode,
	useContext,
	useLayoutEffect,
	useState,
} from 'react';

interface ThemeContextType {
	theme: 'light' | 'dark';
	setTheme: (theme: 'light' | 'dark') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const isDarkTheme = window?.matchMedia(
		'(prefers-color-scheme: dark)'
	).matches;
	const defaultTheme = isDarkTheme ? 'dark' : 'light';

	const [theme, setTheme] = useState<'light' | 'dark'>(
		(localStorage.getItem('app-theme') as 'light' | 'dark') || defaultTheme
	);

	useLayoutEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('app-theme', theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};
