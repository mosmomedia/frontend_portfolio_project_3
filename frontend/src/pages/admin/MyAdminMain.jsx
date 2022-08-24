import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { ContainerStyles } from './styles';

import AdminHeader from './components/AdminHeader';

import Spinner from '../../components/shared/Spinner';
import { useAdminContext } from '../../contexts/admin/AdminContext';
import { getMyClasses } from '../../contexts/admin/AdminActions';
import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../../config/firebase';

function Dashboard() {
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
	if (isLoading) return <Spinner />;

	return (
		<ContainerStyles>
			<AdminHeader />
			<Outlet />
		</ContainerStyles>
	);
}

export default Dashboard;
