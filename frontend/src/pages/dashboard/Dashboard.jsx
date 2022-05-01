import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Main from './components/Main';

import NotFound from '../etc/NotFound';
import PrivateRoute from '../../components/PrivateRoute';
import MyClassRoom from './MyClassRoom';

import { MainStyles } from './styles';

function Dashboard() {
	return (
		<MainStyles>
			<Sidebar />
			<Main>
				<Routes>
					{/* <Route path="*" element={<NotFound />} /> */}
					{/* <Route path="/my-classroom" element={<PrivateRoute />}>
						<Route path="/my-classroom" element={<MyClassRoom />} />
					</Route> */}
				</Routes>
			</Main>
		</MainStyles>
	);
}

export default Dashboard;
