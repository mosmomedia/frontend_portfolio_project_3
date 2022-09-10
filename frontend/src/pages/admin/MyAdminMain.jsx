import { useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import { ContainerStyles } from './styles';

import AdminHeader from './components/AdminHeader';

import Spinner from '../../components/shared/Spinner';
import { useAdminContext } from '../../contexts/admin/AdminContext';
import { getMyClasses } from '../../contexts/admin/AdminActions';
import { useState } from 'react';

function MyAdminMain() {
	const { dispatch, isLoading } = useAdminContext();
	const [classesList, setClassesList] = useState();

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'LOADING' });

			try {
				const { userObjectId, myClasses } = await getMyClasses();
				let myClassArr = [];

				if (myClasses) {
					myClassArr = myClasses.map(({ myClass }) => myClass);
				}
				setClassesList(myClassArr);

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
	}, []);
	if (isLoading) return <Spinner />;

	return (
		<ContainerStyles>
			<AdminHeader />
			<Outlet context={classesList} />
		</ContainerStyles>
	);
}

export default MyAdminMain;
