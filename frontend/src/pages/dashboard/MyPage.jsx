import React from 'react';

import { Routes, Route } from 'react-router-dom';

import ChangeUserInfo from './components/ChangeUserInfo';
import NotFound from '../etc/NotFound';

function MyPage() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="change-myinfo" element={<ChangeUserInfo />} />
		</Routes>
	);
}

export default MyPage;
