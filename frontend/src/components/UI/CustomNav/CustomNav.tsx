import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { MenuItem } from '../../../router';
import styles from './CustomNav.module.scss';

interface CustomNavProps {
	items: MenuItem[];
	customStyles?: string;
}

export const CustomNav = ({ items, customStyles }: CustomNavProps) => {
	const location = useLocation();

	return (
		<nav className={classNames(styles.customNav, customStyles)}>
			{items.map((item: MenuItem, index: number) => {
				const isActive = location.pathname === item.link;
				return (
					<Link
						key={index}
						to={item.link}
						className={classNames(styles.customNav__items, {
							[styles.active]: isActive,
						})}
					>
						{item.title}
					</Link>
				);
			})}
		</nav>
	);
};
