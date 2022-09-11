import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import AdminHeader from './components/AdminHeader';
import MyAdminClassRegistration from './MyAdminClassRegistration';

import MyAdminHome from './MyAdminHome';

import { useAdminContext } from '../../contexts/admin/AdminContext';
import { getMyClasses } from '../../contexts/admin/AdminActions';

import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../../config/firebase';

import NotFound from '../etc/NotFound';

import { ContainerStyles } from './styles';
import Spinner from '../../components/shared/Spinner';

function MyAdminMain() {
	const { dispatch, isLoading } = useAdminContext();
	const [user, loading] = useAuthState(firebase.auth);

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

		if (user) {
			fetchData();
		}

		dispatch({ type: 'OFF_LOADING' });
	}, [user, dispatch]);
	if (isLoading || loading) return <Spinner />;

	return (
		<ContainerStyles>
			<AdminHeader />
			<Routes>
				<Route path="*" element={<NotFound />} />
				<Route path="/" element={<MyAdminHome />} />
				<Route path="/registration" element={<MyAdminClassRegistration />} />
			</Routes>
		</ContainerStyles>
	);
}

export default MyAdminMain;
