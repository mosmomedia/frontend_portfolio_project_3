import { useEffect } from 'react';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

import { MainStyles } from './styles';

import 'twin.macro';
import 'styled-components/macro';

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
