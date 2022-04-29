import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Sidebar from './components/Sidebar';

import 'twin.macro';
import 'styled-components/macro';

function Dashboard() {
	useEffect(() => {}, []);

	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<Sidebar />} />
				</Routes>
			</div>
		</>
	);
}

export default Dashboard;
