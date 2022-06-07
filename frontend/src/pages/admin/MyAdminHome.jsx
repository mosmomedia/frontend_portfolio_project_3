import { useEffect } from 'react';
import Spinner from '../../components/shared/Spinner';
import { useAdminContext } from '../../contexts/admin/AdminContext';

function MyAdminHome() {
	const { isLoading, dispatch } = useAdminContext();
	useEffect(() => {
		// dispatch({ type: 'LOADING' });
	}, []);

	if (isLoading) return <Spinner />;

	return <div>home</div>;
}

export default MyAdminHome;
