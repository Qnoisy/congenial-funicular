import { Link } from 'react-router-dom';

export const Logo = () => {
	return (
		<Link to={'/'}>
			<img
				style={{ height: '5rem', width: '6rem' }}
				src='/img/logo.svg'
				alt=''
			/>
		</Link>
	);
};
