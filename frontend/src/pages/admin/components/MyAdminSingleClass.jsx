import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Spinner from '../../../components/shared/Spinner';

import { useAdminContext } from '../../../contexts/admin/AdminContext';
import MyAdminClassHeader from './MyAdminClassHeader';
import MyAdminClassCheckIn from './MyAdminClassCheckIn';
import MyAdminHomework from './MyAdminHomework';

import {
	SectionStyles,
	HeaderStyles,
	MainStyles,
	InfoWrapperStyles,
} from '../styles/MyAdminSingleClassStyles';

function MyAdminSingleClass() {
	const { id } = useParams();
	const [currentClass, setCurrentClass] = useState(null);
	const { isLoading, myClassList, dispatch } = useAdminContext();

	useEffect(() => {
		dispatch({ type: 'LOADING' });

		if (myClassList.length > 0) {
			let payload;
			for (let i = 0; i < myClassList.length; i++) {
				if (myClassList[i]._id === id) {
					payload = myClassList[i];
					break;
				}
			}

			setCurrentClass(payload);
			dispatch({ type: 'GET_MY_CURRENT_CLASS', payload });
		}
		// eslint-disable-line-next
	}, [myClassList]);

	if (isLoading || currentClass === null) return <Spinner />;
	return (
		<SectionStyles>
			{' '}
			{/* header */}
			<HeaderStyles>
				<Link to="/admin/classes">나의 강의 관리</Link>
			</HeaderStyles>
			{/*main */}
			<MainStyles>
				<MyAdminClassHeader
					value={{ currentClass, dispatch, myClassList, isLoading }}
				/>
				<InfoWrapperStyles>
					{/* checkin */}
					<MyAdminClassCheckIn myClass={{ currentClass }} />
					{/* homework */}
					<MyAdminHomework myClass={currentClass} />
				</InfoWrapperStyles>
			</MainStyles>
		</SectionStyles>
	);
}

export default MyAdminSingleClass;
