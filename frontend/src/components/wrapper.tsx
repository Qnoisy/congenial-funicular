import '../common/generall.scss';
import '../common/reset.scss';
import AppRouter from '../pages/AppRouter';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import { Main } from './sections/Main';

const Wrapper = () => {
	// const [isModalActive, setIsModalActive] = useState<boolean>(false);
	// const handleClick = () => {
	// 	setIsModalActive(!isModalActive);
	// };
	return (
		<div className='wrapper'>
			<Header />
			<AppRouter />
			<Main />
			<Footer />
		</div>
	);
};

export default Wrapper;
