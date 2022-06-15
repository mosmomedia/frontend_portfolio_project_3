import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminHeader from './components/AdminHeader';
import MyAdminClassRegistration from './MyAdminClassRegistration';
import MyAdminClassRegistartionEdit from './MyAdminClassRegistartionEdit';

import MyAdminClasses from './MyAdminClasses';
import MyAdminHome from './MyAdminHome';
import MyAdminSignIn from './components/MyAdminSignIn';
import MyAdminSingleClass from './components/MyAdminSingleClass';

import { useAdminContext } from '../../contexts/admin/AdminContext';
import { getMyClasses } from '../../contexts/admin/AdminActions';

import AdminRoute from '../../components/AdminRoute';

import NotFound from '../etc/NotFound';

import { ContainerStyles } from './styles';
import Spinner from '../../components/shared/Spinner';

function MyAdminMain() {
	const { dispatch, isLoading } = useAdminContext();

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'LOADING' });

			try {
				const { userObjectId, myClasses } = await getMyClasses();

				let myClassArr = [];

				if (myClasses) {
					myClassArr = myClasses.map(({ myClass }) => myClass);
				}

				dispatch({
					type: 'GET_MY_CLASSES',
					payload: { userObjectId, myClassArr },
				});
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();

		dispatch({ type: 'OFF_LOADING' });
	}, [dispatch]);

	if (isLoading) return <Spinner />;

	return (
		<ContainerStyles>
			<AdminHeader />
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="sign-in" element={<MyAdminSignIn />} />
				<Route path="/" element={<AdminRoute />}>
					<Route path="/" element={<MyAdminHome />} />
					<Route path="registration" element={<MyAdminClassRegistration />} />
					<Route
						path="registration/edit/:id"
						element={<MyAdminClassRegistartionEdit />}
					/>
					<Route path="classes" element={<MyAdminClasses />} />
					<Route path="class/:id" element={<MyAdminSingleClass />} />
				</Route>
			</Routes>
		</ContainerStyles>
	);
}

export default MyAdminMain;
