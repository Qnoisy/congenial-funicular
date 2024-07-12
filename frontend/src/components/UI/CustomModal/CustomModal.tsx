import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './CustomModal.module.scss';

interface CustomModalProps {
	isModalActive: boolean;
	setIsModalActive: (value: React.SetStateAction<boolean>) => void;
	children: ReactNode;
}

export const CustomModal = ({
	isModalActive,
	setIsModalActive,
	children,
}: CustomModalProps) => {
	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			setIsModalActive(false);
		}
	};
	return (
		<div
			onClick={handleClick}
			className={classNames(styles.customModal, {
				[styles.active]: isModalActive,
			})}
		>
			<div
				className={classNames(
					styles.customModal__content,
					styles['shadow-drop-2-center']
				)}
			>
				{children}
			</div>
		</div>
	);
};
