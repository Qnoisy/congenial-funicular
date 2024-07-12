import { MutatingDots } from 'react-loader-spinner';

export const CustomLoader = () => {
	return (
		<MutatingDots
			visible={true}
			height='100'
			width='100'
			color='gray'
			secondaryColor='gray'
			radius='12.5'
			ariaLabel='mutating-dots-loading'
			wrapperStyle={{}}
			wrapperClass=''
		/>
	);
};
