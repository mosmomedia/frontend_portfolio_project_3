import { Routes, Route } from 'react-router-dom';

import { useEffect } from 'react';

import { useMyWorkContext } from '../../contexts/myWorkBoard/MyWorkContext';
import { getMyWorks } from '../../contexts/myWorkBoard/MyWorkActions';

import Spinner from '../../components/shared/Spinner';

import Home from './components/MyBoardMain';
import PublishWork from './components/PublishWork';
import MyWorks from './components/MyWorks';
import MyWorkEdit from './components/MyWorkEdit';
import MyWorkWrite from './components/MyWorkWrite';
import NotFound from '../etc/NotFound';

function MyBoard() {
	const { isLoading, dispatch } = useMyWorkContext();

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'LOADING' });
			const { userObjectId, myWorks } = await getMyWorks();
			const myWorksArr = myWorks.map(({ myWork }) => myWork);

			dispatch({ type: 'GET_MY_WORKS', payload: { userObjectId, myWorksArr } });
		};

		fetchData();
	}, [dispatch]);

	if (isLoading) return <Spinner />;
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
			<Route path="/:id" element={<MyWorks />} />
			<Route path="/edit/:id" element={<MyWorkEdit />} />
			<Route path="/publish" element={<PublishWork />} />
			<Route path="/work/write/:id" element={<MyWorkWrite />} />
		</Routes>
	);
}

export default MyBoard;
