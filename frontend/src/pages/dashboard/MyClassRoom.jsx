import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useMyClassContext } from '../../contexts/myClassRoom/MyClassContext';
import { getMyClasses } from '../../contexts/myClassRoom/MyClassActions';

import Home from './components/ClassMain';
import Stream from './components/Stream';
import MyStream from './components/MyStream';
import Recording from './components/Recording';
import NotFound from '../etc/NotFound';

import Spinner from '../../components/shared/Spinner';

function MyClassRoom() {
	const { isLoading, dispatch } = useMyClassContext();

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'LOADING' });

			const payload = await getMyClasses();
			dispatch({ type: 'GET_MY_CLASSES', payload });
		};

		fetchData();
	}, [dispatch]);

	if (isLoading) return <Spinner />;

	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
			<Route path="stream" element={<Stream />} />
			<Route path="stream/:id" element={<MyStream />} />
			<Route path="recording" element={<Recording />} />
		</Routes>
	);
}

export default MyClassRoom;
