import classNames from 'classnames';
import styles from './Footer.module.scss';

// interface FooterProps {}

export const Footer = () => {
	return (
		<footer className={classNames(styles.footer, 'gradient-black')}>
			Footer Component
		</footer>
	);
};
