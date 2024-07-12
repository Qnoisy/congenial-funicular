import styles from './Main.module.scss';

interface MainProps {}

export const Main = ({}: MainProps) => {
	return <main className={styles.main}>Main Component</main>;
};
