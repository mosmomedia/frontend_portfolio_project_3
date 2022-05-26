import { Routes, Route } from 'react-router-dom';

import Home from './components/MyBoardMain';
import PublishWork from './components/PublishWork';
import MyWorks from './components/MyWorks';
import MyWorkEdit from './components/MyWorkEdit';
import MySubWorkWrite from './components/MySubWorkWrite';
import MySubWorkEdit from './components/MySubWorkEdit';
import MySubWorkList from './components/MySubWorkList';
import NotFound from '../etc/NotFound';

function MyBoard() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
			<Route path="/:id" element={<MyWorks />} />
			<Route path="/edit/:id" element={<MyWorkEdit />} />
			<Route path="/publish" element={<PublishWork />} />
			<Route path="/work/write/:id" element={<MySubWorkWrite />} />
			<Route path="/work/edit/:id" element={<MySubWorkEdit />} />
			<Route path="/work/list/:id" element={<MySubWorkList />} />
		</Routes>
	);
}

export default MyBoard;
