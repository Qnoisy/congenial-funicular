import React from 'react';
import Swiper from '../../Swiper/Swiper';
import styles from './Main.module.scss';

const slides = [
	{
		image: 'https://picsum.photos/800/400?random=1',
	},
	{
		image: 'https://picsum.photos/800/400?random=2',
	},
	{
		image: 'https://picsum.photos/800/400?random=3',
	},
];

const Main: React.FC = () => {
	return (
		<main className={styles.main}>
			<Swiper slides={slides} />
		</main>
	);
};

export default Main;
