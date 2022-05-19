import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useMyClassContext } from '../../../contexts/myClassRoom/MyClassContext';

import MyStreamCard from './MyStreamCard';
import CheckIn from './CheckIn';
import Homework from './Homework';

import {
	SectionStyles,
	HeaderStyles,
	MainStyles,
	InfoWrapperStyles,
} from '../styles/MyStreamStyles';

import Spinner from '../../../components/shared/Spinner';

function MyStream() {
	const { id } = useParams();
	const { isLoading, userObjectId, myClassList, dispatch } =
		useMyClassContext();

	const [currentClass, setCurrentClass] = useState(null);
	useEffect(() => {
		dispatch({ type: 'LOADING' });
		if (myClassList.length > 0) {
			let getCurrentClass;

			for (let i = 0; i < myClassList.length; i++) {
				const { myClass } = myClassList[i];
				if (myClass._id !== id) {
					continue;
				} else {
					getCurrentClass = myClass;
					break;
				}
			}
			setCurrentClass(getCurrentClass);

			dispatch({ type: 'OFF_LOADING' });
		}
	}, []);

	if (isLoading || currentClass === null || userObjectId === null)
		return <Spinner />;

	return (
		<SectionStyles>
			{' '}
			{/* header */}
			<HeaderStyles>
				<h2>나의 강의 관리</h2>
			</HeaderStyles>
			{/*main */}
			<MainStyles>
				<MyStreamCard myClass={currentClass} />
				<InfoWrapperStyles>
					{/* checkin */}
					<CheckIn myClass={{ currentClass, userObjectId }} />
					{/* homework */}
					<Homework myClass={currentClass} />
				</InfoWrapperStyles>
			</MainStyles>
		</SectionStyles>
	);
}

export default MyStream;
