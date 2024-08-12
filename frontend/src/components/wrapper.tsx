import '../common/generall.scss';
import '../common/reset.scss';
import useCustomMediaQueries from '../hooks/useCustomMediaQueries';
import AppRouter from '../pages/AppRouter';
import { BottomNav } from './BottomNav';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import Main from './sections/Main/Main';

const Wrapper = () => {
	// const [isModalActive, setIsModalActive] = useState<boolean>(false);
	// const handleClick = () => {
	// 	setIsModalActive(!isModalActive);
	// };
	const { isSmallScreen, isMediumScreen } = useCustomMediaQueries();

	return (
		<div className='wrapper'>
			<Header />
			<div className='main__content'>
				<AppRouter />
				<Main />
				<Footer />
			</div>
			{(!isSmallScreen || !isMediumScreen) && <BottomNav />}
		</div>
	);
};

export default Wrapper;
