import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url, options) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(url);

				setData(res.data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		};

		fetchData();
		// eslint-disable-next-line
	}, []);
	return { loading, error, data };
}

export default useFetch;
