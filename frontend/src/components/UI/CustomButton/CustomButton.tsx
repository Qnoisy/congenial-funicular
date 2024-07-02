import styles from './CustomButton.module.scss';

interface CustomButtonProps {}

export const CustomButton = ({}: CustomButtonProps) => {
	return <div className={styles.customButton}>CustomButton Component</div>;
};
