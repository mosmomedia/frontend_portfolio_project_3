import { Route, Routes } from 'react-router-dom';

import AdminHeader from './components/AdminHeader';
import MyAdminClassRegistration from './MyAdminClassRegistration';
import MyAdminClass from './MyAdminClass';
import MyAdminHome from './MyAdminHome';
import MyAdminSignIn from './components/MyAdminSignIn';

import { AdminProvider } from '../../contexts/admin/AdminContext';
import AdminRoute from '../../components/AdminRoute';

import NotFound from '../etc/NotFound';

import { ContainerStyles } from './styles';

function MyAdminMain() {
	return (
		<AdminProvider>
			<ContainerStyles>
				<AdminHeader />
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="sign-in" element={<MyAdminSignIn />} />
					<Route path="/" element={<AdminRoute />}>
						<Route path="/" element={<MyAdminHome />} />
						<Route path="registration" element={<MyAdminClassRegistration />} />
						<Route path="classes" element={<MyAdminClass />} />
					</Route>
				</Routes>
			</ContainerStyles>
		</AdminProvider>
	);
}

export default MyAdminMain;
