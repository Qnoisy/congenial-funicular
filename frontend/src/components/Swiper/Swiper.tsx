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
	className?: string;
}

const Swiper: React.FC<SwiperProps> = ({ slides, className }) => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		centerMode: true,
		centerPadding: '5%',
		autoplay: true,
		autoplaySpeed: 10000,
		responsive: [
			{
				breakpoint: 399.98,
				settings: {
					slidesToShow: 1,
					centerPadding: '0px',
				},
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1,
					centerPadding: '0px',
				},
			},
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 1,
					centerPadding: '15%',
				},
			},
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 2,
					centerPadding: '0px',
				},
			},
			{
				breakpoint: 1199.98,
				settings: {
					slidesToShow: 2,
					centerPadding: '10%',
				},
			},
			{
				breakpoint: 1399.98,
				settings: {
					slidesToShow: 3,
					centerPadding: '0px',
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
