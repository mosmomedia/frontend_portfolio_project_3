import { Routes, Route } from 'react-router-dom';

import Home from './components/MyBoardMain';
import PublishWork from './components/PublishWork';
import MyWorks from './components/MyWorks';
import NotFound from '../etc/NotFound';

function MyBoard() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
			<Route path="/works/:id" element={<MyWorks />} />
			<Route path="/publish" element={<PublishWork />} />
		</Routes>
	);
}

export default MyBoard;
