import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminHeader from './components/AdminHeader';
import MyAdminClassRegistration from './MyAdminClassRegistration';
import MyAdminClass from './MyAdminClass';
import MyAdminHome from './MyAdminHome';
import MyAdminSignIn from './components/MyAdminSignIn';

import { useAdminContext } from '../../contexts/admin/AdminContext';

import AdminRoute from '../../components/AdminRoute';

import NotFound from '../etc/NotFound';

import { ContainerStyles } from './styles';

function MyAdminMain() {
	const { dispatch, isLoading, myClasssList, admin } = useAdminContext();

	return (
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
	);
}

export default MyAdminMain;
