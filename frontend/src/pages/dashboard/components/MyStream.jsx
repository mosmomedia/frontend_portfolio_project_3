import { useEffect } from 'react';
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
	const { isLoading, userObjectId, myClassList, currentClass, dispatch } =
		useMyClassContext();

	useEffect(() => {
		dispatch({ type: 'LOADING' });
		if (myClassList.length > 0) {
			let payload;

			for (let i = 0; i < myClassList.length; i++) {
				const { myClass } = myClassList[i];
				if (myClass._id !== id) {
					continue;
				} else {
					payload = myClass;
					break;
				}
			}

			dispatch({ type: 'GET_MY_CURRENT_CLASS', payload });
		}

		// eslint-disable-line-next
	}, []);

	if (isLoading || currentClass === null || userObjectId === null)
		return <Spinner />;

	return (
		<SectionStyles>
			<HeaderStyles>
				<h2>나의 강의 관리</h2>
			</HeaderStyles>
			<MainStyles>
				<MyStreamCard myClass={currentClass} />
				<InfoWrapperStyles>
					<CheckIn myClass={{ currentClass, userObjectId }} />
					<Homework myClass={currentClass} />
				</InfoWrapperStyles>
			</MainStyles>
		</SectionStyles>
	);
}

export default MyStream;
