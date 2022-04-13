import { useState, useEffect } from 'react';

// const { width } = useWD();
// import useWD from '../hooks/useWindowDimensions';
// eslint-disable-next-line
{
	/* <div tw="absolute bottom-1 left-2 text-sm text-blue-200">{width}</div> */
}

function useWindowDimensions() {
	const getWindowDimensions = () => {
		const { innerWidth: width, innerHeight: height } = window;
		return {
			width,
			height,
		};
	};

	const [dimensions, setDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return dimensions;
}

export default useWindowDimensions;
