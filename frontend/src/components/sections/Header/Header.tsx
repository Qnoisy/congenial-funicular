import styles from './Header.module.scss';
import { Search } from './Search';

// interface HeaderProps {}

export const Header = () => {
	return (
		<header className={styles.header}>
			<Search />
		</header>
	);
};
