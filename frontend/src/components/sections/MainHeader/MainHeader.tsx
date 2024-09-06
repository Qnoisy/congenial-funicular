import styles from './MainHeader.module.scss';

interface MainHeaderProps {}

export const MainHeader = ({}: MainHeaderProps) => {
	return (
		<div className={styles.mainHeader}>
			<img src='img/frame1.jpg' alt='' />
		</div>
	);
};
