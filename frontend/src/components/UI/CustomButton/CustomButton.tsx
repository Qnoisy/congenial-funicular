import classNames from 'classnames';
import { ButtonHTMLAttributes } from 'react';
import styles from './CustomButton.module.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
	className?: string;
	text: string;
	type?: 'button' | 'submit' | 'reset';
}

export const CustomButton = ({
	onClick,
	className,
	text,
	type = 'button',
	...props
}: CustomButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={classNames(styles.customButton, className)}
			type={type}
			{...props}
		>
			<strong>{text}</strong>
		</button>
	);
};
