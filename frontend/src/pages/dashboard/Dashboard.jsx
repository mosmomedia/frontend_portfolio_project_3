import { Outlet } from 'react-router-dom';

import { MyClassProvider } from '../../contexts/myClassRoom/MyClassContext';
import { MyWorkProvider } from '../../contexts/myWorkBoard/MyWorkContext';

import Sidebar from './components/Sidebar';

import { MainStyles } from './styles';

function Dashboard() {
	return (
		<MyClassProvider>
			<MyWorkProvider>
				<MainStyles>
					<Sidebar />
					<Outlet />
				</MainStyles>
			</MyWorkProvider>
		</MyClassProvider>
	);
}

export default Dashboard;
