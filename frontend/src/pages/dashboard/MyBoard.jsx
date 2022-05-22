import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/MyBoardMain';
import NotFound from '../etc/NotFound';

function MyBoard() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
		</Routes>
	);
}

export default MyBoard;
