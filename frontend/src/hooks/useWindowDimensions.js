import { useState, useEffect } from 'react';

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
