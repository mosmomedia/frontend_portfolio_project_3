import { useEffect } from 'react';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

import { MainStyles } from './styles';

function Dashboard() {
	useEffect(() => {}, []);

	return (
		<MainStyles>
			<Sidebar />
			<Main />
		</MainStyles>
	);
}

export default Dashboard;
