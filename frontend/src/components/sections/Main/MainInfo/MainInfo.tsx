import classNames from 'classnames';
import { Container } from '../../../Container';
import { CustomButton } from '../../../UI/CustomButton';
import styles from './MainInfo.module.scss';

// interface MainInfoProps {

// }

export const MainInfo = () => {
	return (
		<div className={styles.mainInfo}>
			<Container section>
				<div className={classNames(styles.mainInfo__block, styles.CustomStyle)}>
					<div className={styles.mainInfo__img}></div>
					<div className={styles.mainInfo__content}>
						<h2 className={styles.mainInfo__title}>
							<strong>Lorem ipsum dolor sit amet.</strong>
						</h2>
						<p className={styles.mainInfo__text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Distinctio quam eius, soluta fuga adipisci doloribus, aperiam
							provident quos, deserunt incidunt quasi nostrum impedit nihil
							accusamus architecto in illum. Aliquid, quibusdam!
						</p>
						<p className={styles.mainInfo__text}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Distinctio quam eius, soluta fuga adipisci doloribus, aperiam
						</p>
						<CustomButton text='button'></CustomButton>
					</div>
				</div>
			</Container>
		</div>
	);
};
