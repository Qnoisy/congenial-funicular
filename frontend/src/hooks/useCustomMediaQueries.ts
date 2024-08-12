import useMediaQuery from './useMediaQuery';

const useCustomMediaQueries = () => {
	const isSmallScreen = useMediaQuery('(min-width: 400.98px)');
	const isMediumScreen = useMediaQuery('(min-width: 539.98px)');
	const isLargeScreen = useMediaQuery('(min-width: 767.98px)');
	const isXLargeScreen = useMediaQuery('(min-width: 959.98px)');
	const isXXLargeScreen = useMediaQuery('(min-width: 1151.98px)');

	return {
		isSmallScreen,
		isMediumScreen,
		isLargeScreen,
		isXLargeScreen,
		isXXLargeScreen,
	};
};

export default useCustomMediaQueries;
