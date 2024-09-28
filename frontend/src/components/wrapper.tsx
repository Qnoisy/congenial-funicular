import { useState } from 'react';
import '../common/generall.scss';
import '../common/reset.scss';
import useCustomMediaQueries from '../hooks/useCustomMediaQueries';
import AppRouter from '../pages/AppRouter';
import { BottomNav } from './BottomNav';
import { Footer } from './sections/Footer';
import { Header } from './sections/Header';
import Main from './sections/Main/Main';
import { MainHeader } from './sections/MainHeader';

const Wrapper = () => {
	const [isOpen, setOpen] = useState<boolean>(false);
	const { isSmallScreen, isMediumScreen } = useCustomMediaQueries();

	return (
		<div className='wrapper'>
			<Header isOpen={isOpen} setOpen={setOpen} />
			<MainHeader />
			<AppRouter />
			<Main />
			<Footer />
			{(!isSmallScreen || !isMediumScreen) && (
				<BottomNav isOpen={isOpen} setOpen={setOpen} />
			)}
		</div>
	);
};

export default Wrapper;
