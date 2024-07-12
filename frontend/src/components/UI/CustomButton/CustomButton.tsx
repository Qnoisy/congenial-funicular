import classNames from 'classnames';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './CustomButton.module.scss';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: () => void;
	className?: string;
	children: ReactNode;
	type?: 'button' | 'submit' | 'reset';
}

export const CustomButton = ({
	onClick,
	className,
	children,
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
			{children}
		</button>
	);
};
