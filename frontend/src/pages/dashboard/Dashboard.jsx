import { Outlet } from 'react-router-dom';

import { MyClassProvider } from '../../contexts/myClassRoom/MyClassContext';
import Sidebar from './components/Sidebar';

import { MainStyles } from './styles';

function Dashboard() {
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
