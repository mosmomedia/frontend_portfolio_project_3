import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { MyClassProvider } from '../../contexts/myClassRoom/MyClassContext';

import Sidebar from './components/Sidebar';

import { MainStyles } from './styles';

function Dashboard() {
	useEffect(() => {
		console.log('hi');
	}, []);

	return (
		<MyClassProvider>
			<MainStyles>
				<Sidebar />
				<Outlet />
			</MainStyles>
		</MyClassProvider>
	);
}

export default Dashboard;
