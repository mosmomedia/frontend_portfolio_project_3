import { Outlet } from 'react-router-dom';

import { MyClassProvider } from '../../contexts/myClassRoom/MyClassContext';
import { MyWorkProvider } from '../../contexts/myWorkBoard/MyWorkContext';
import { ClassProvider } from '../../contexts/class/ClassContext';

import Sidebar from './components/Sidebar';

import { MainStyles } from './styles';

function Dashboard() {
	return (
		<MyClassProvider>
			<MyWorkProvider>
				<ClassProvider>
					<MainStyles>
						<Sidebar />
						<Outlet />
					</MainStyles>
				</ClassProvider>
			</MyWorkProvider>
		</MyClassProvider>
	);
}

export default Dashboard;
