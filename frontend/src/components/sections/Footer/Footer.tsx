import classNames from 'classnames';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { menuItems } from '../../../router';
import { Container } from '../../Container';
import { Logo } from '../../Logo';
import { CustomNav } from '../../UI/CustomNav';
import styles from './Footer.module.scss';
import { FooterForm } from './FooterForm';

export const Footer = () => {
	return (
		<footer className={classNames(styles.footer, 'gradient-black')}>
			<Container section>
				<div className={styles.footer__row}>
					<div className={styles['block-1']}>
						<h2 className={styles.footer__title}>
							<strong>sugarbeauty.salon</strong>
						</h2>
						<p className={styles.footer__info}>
							Szosa Lubicka 166H, 87-100 Toruń
						</p>
						<p className={styles.footer__info}>
							Jesteśmy otwarci od poniedziałku do niedzieli
						</p>
						<p className={styles.footer__info}>8 AM – 8 PM</p>
						<h3 className={styles['footer__sub-title']}>
							<strong>kierownik</strong>
						</h3>
						<p className={styles.footer__info}>Victoriia Prudyvus</p>
					</div>
					<div className={styles['block-2']}>
						<CustomNav
							items={menuItems}
							customStyles={styles.footer__nav}
							disableAnimation
						/>
					</div>
					<div className={styles['block-3']}>
						<div className={styles.footer__subscribe}>
							<h2 className={styles.footer__title}>
								<strong>Stay Informed</strong>
							</h2>
							<FooterForm />
						</div>
					</div>
				</div>
				<div>
					<hr className={styles.footer__hr} />
					<div className={styles.footer__row}>
						<div className={styles['sub-block-1']}>
							<ul className={styles.footer__privacy}>
								<li>Lorem,</li>
								<li>ipsum</li>
								<li>dolor.</li>
							</ul>
						</div>
						<div
							className={classNames(styles['row-block'], styles['sub-block-2'])}
						>
							<Logo />
						</div>
						<div className={styles['sub-block-3']}>
							<ul className={styles.footer__social}>
								<a href='/'>
									<FaFacebookF className={styles.footer__icon} />
								</a>
								<a href='/'>
									<FaInstagram className={styles.footer__icon} />
								</a>
								<a href='/'>
									<FaTiktok className={styles.footer__icon} />
								</a>
							</ul>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};
