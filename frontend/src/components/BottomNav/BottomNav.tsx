import { useState } from 'react';
import { BsFillEmojiSmileFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ThemeButton } from '../ThemeButton';
import { CustomNav } from '../UI/CustomNav';
import styles from './BottomNav.module.scss';
import { Burger } from './Burger';
import { BurgerModal } from './BurgerModal';

export const BottomNav = () => {
	const [isOpen, setOpen] = useState<boolean>(false);
	return (
		<>
			<nav className={styles.bottomNav}>
				<div className={styles.bottomNav__links}>
					<Link to={'/'} className={styles.bottomNav__link}>
						<BsFillEmojiSmileFill />
					</Link>
					<Link to={'/'} className={styles.bottomNav__link}>
						<BsFillEmojiSmileFill />
					</Link>
				</div>
				<div className={styles.navBurger}>
					<Burger isOpen={isOpen} setOpen={setOpen} />
				</div>
				<div className={styles.bottomNav__links}>
					<ThemeButton />
					<Link to={'/'} className={styles.bottomNav__link}>
						<BsFillEmojiSmileFill />
					</Link>
				</div>
			</nav>
			<div className={styles.navBurgerBottom}></div>
			<BurgerModal isActive={isOpen} setIsActive={setOpen}>
				<CustomNav
					customStyles={styles.customNav__style}
					items={[
						{ title: 'name', link: '/' },
						{ title: 'name2', link: '/' },
					]}
				/>
			</BurgerModal>
		</>
	);
};
