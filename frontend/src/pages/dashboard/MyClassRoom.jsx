import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useMyClassContext } from '../../contexts/myClassRoom/MyClassContext';
import { getMyClasses } from '../../contexts/myClassRoom/MyClassActions';

import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../../config/firebase';

import Home from './components/ClassMain';
import Stream from './components/Stream';
import MyStream from './components/MyStream';
import History from './components/History';
import NotFound from '../etc/NotFound';

import Spinner from '../../components/shared/Spinner';

function MyClassRoom() {
	const { isLoading, dispatch } = useMyClassContext();
	const [user, loading] = useAuthState(firebase.auth);

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'LOADING' });

			const payload = await getMyClasses(user);
			dispatch({ type: 'GET_MY_CLASSES', payload });
		};

		fetchData();
	}, [user]);

	if (isLoading || loading) return <Spinner />;

	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
			<Route path="stream" element={<Stream />} />
			<Route path="stream/:id" element={<MyStream />} />
			<Route path="history" element={<History />} />
		</Routes>
	);
}

export default MyClassRoom;
