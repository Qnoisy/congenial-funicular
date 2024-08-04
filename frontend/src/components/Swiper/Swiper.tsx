// Swiper.tsx
import classNames from 'classnames';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import styles from './Swiper.module.scss';

interface Slide {
	image: string;
}

interface SwiperProps {
	slides: Slide[];
	className?: string; // Дополнительный класс для кастомизации стилей
}

const Swiper: React.FC<SwiperProps> = ({ slides, className }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		centerMode: true, // Центрирует слайды
		centerPadding: '15%', // Устанавливает отступ с левого и правого края
		autoplay: true,
		autoplaySpeed: 10000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 1,
					centerPadding: '10%', // Меньший отступ для более широких экранов
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerPadding: '15%', // Средний отступ для планшетов
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					centerPadding: '20%', // Больший отступ для мобильных устройств
				},
			},
		],
	};

	return (
		<div className={classNames(styles.swiperWrapper, className)}>
			<Slider {...settings} className={styles.swiperBlock}>
				{slides.map((slide, index) => (
					<div key={index} className={styles.slideContainer}>
						<img src={slide.image} alt={`Slide ${index + 1}`} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Swiper;
