import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useMyClassContext } from '../../../contexts/myClassRoom/MyClassContext';

import MyStreamCard from './MyStreamCard';

import {
	SectionStyles,
	HeaderStyles,
	MainStyles,
} from '../styles/MyStreamStyles';

import Spinner from '../../../components/shared/Spinner';

function MyStream() {
	const { id } = useParams();
	const { isLoading, myClassList, dispatch } = useMyClassContext();

	const [currentClass, setCurrentClass] = useState({
		_id: '',
		title: '',
		period: '',
		hours: '',
		weeks: -1,
		completedAt: -1,
		isOnAir: false,
		students: [],
		tutor: '',
		type: '',
	});

	const {
		_id,
		title,
		hours,
		weeks,
		period,
		completedAt,
		isOnAir,
		students,
		tutor,
		type,
	} = currentClass;

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

			const {
				_id,
				title,
				hours,
				weeks,
				period,
				completedAt,
				isOnAir,
				students,
				tutor,
				type,
			} = getCurrentClass;

			setCurrentClass({
				_id,
				title,
				hours,
				weeks,
				period,
				completedAt,
				isOnAir,
				students,
				tutor,
				type,
			});
			dispatch({ type: 'OFF_LOADING' });
		}
	}, []);

	if (isLoading) return <Spinner />;

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
			</MainStyles>
		</SectionStyles>
	);
}

export default MyStream;
