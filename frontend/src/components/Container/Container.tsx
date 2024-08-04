import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
	children: ReactNode;
	section?: boolean;
}

export const Container = ({ children, section = false }: ContainerProps) => {
	return (
		<div
			className={classNames(styles.container, {
				[styles.container__padding]: !section,
			})}
		>
			{children}
		</div>
	);
};
