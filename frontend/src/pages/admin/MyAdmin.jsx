import { Outlet } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';

import { ContainerStyles } from './styles';

function MyAdminMain() {
	return (
		<ContainerStyles>
			<AdminHeader />
			<Outlet />
		</ContainerStyles>
	);
}

export default MyAdminMain;
