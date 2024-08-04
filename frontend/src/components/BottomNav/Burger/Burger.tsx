import Hamburger from 'hamburger-react';
import styles from './Burger.module.scss';

interface BurgerProps {
	isOpen: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

export const Burger = ({ isOpen, setOpen }: BurgerProps) => {
	return (
		<div className={styles.burger}>
			<Hamburger toggled={isOpen} toggle={setOpen} />
		</div>
	);
};
