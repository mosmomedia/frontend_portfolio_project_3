import { Route, Routes } from 'react-router-dom';

import AdminHeader from './components/AdminHeader';
import MyAdminClass from './MyAdminClass';
import MyAdminSignIn from './MyAdminSignIn';

import NotFound from '../etc/NotFound';

import { ContainerStyles } from './styles';

function MyAdminMain() {
	return (
		<ContainerStyles>
			<AdminHeader />
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<MyAdminSignIn />} />
				<Route path="class" element={<MyAdminClass />} />
			</Routes>
		</ContainerStyles>
	);
}

export default MyAdminMain;
