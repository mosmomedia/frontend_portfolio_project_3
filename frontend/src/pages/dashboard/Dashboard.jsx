import { Outlet } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import { MainStyles } from './styles';

function Dashboard() {
	return (
		<MainStyles>
			<Sidebar />
			<Outlet />
		</MainStyles>
	);
}

export default Dashboard;
