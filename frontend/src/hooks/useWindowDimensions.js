import { useState, useEffect } from 'react';

// import useWD from '../hooks/useWindowDimensions';
// const { width } = useWD();
// eslint-disable-next-line
{
	/* <div tw="absolute bottom-1 left-2 text-sm text-blue-200">{width}</div> */
}

function useWindowDimensions(size) {
	const getWindowDimensions = () => {
		const { innerWidth: width, innerHeight: height } = window;

		return {
			width,
			height,
		};
	};

	const [dimensions, setDimensions] = useState(getWindowDimensions());
	const [isMobile, setIsMobile] = useState(true);
	useEffect(() => {
		function handleResize() {
			setDimensions(getWindowDimensions());

			if (getWindowDimensions().width >= size) {
				setIsMobile(false);
			} else {
				setIsMobile(true);
			}
		}

		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [size]);

	const { width, height } = dimensions;

	return { width, height, isMobile };
}

export default useWindowDimensions;
