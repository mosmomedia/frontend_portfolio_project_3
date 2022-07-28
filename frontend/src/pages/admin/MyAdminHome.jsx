import { useState, useEffect } from 'react';
import Spinner from '../../components/shared/Spinner';
import { useAdminContext } from '../../contexts/admin/AdminContext';

import { WrapperStyles, MainStyles, InfoWrapperStyles } from './styles';

function MyAdminHome() {
	const { isLoading, myClassList } = useAdminContext();
	const [loading, setLoading] = useState(true);

	const [countInfo, setCountInfo] = useState({
		classesNum: 0,
		studentsNum: 0,
		feedbackNum: 0,
	});

	const { classesNum, studentsNum, feedbackNum } = countInfo;

	useEffect(() => {
		if (myClassList.length > 0) {
			let classesNum = myClassList.length;
			let studentsNum = 0;

			// ** working on progress
			let feedbackNum = 0;

			myClassList.forEach(({ students }) => {
				if (students.length > 0) {
					studentsNum += students.length;
				}
			});

			setCountInfo({ ...countInfo, classesNum, studentsNum, feedbackNum });
			setLoading(false);
		}
		setLoading(false);

		// eslint-disable-next-line
	}, [myClassList]);

	if (isLoading || loading) return <Spinner />;

	return (
		<WrapperStyles>
			<MainStyles>
				<h3>관리자 정보 게시판 (서비스 준비 중)</h3>
				<InfoWrapperStyles>
					<div>
						현재 <span>{classesNum}</span>개의 강의를 진행 중입니다.
					</div>
					<div>
						현재 <span>{studentsNum}</span>명의 학생이 수강 중입니다.{' '}
					</div>
					<div>
						현재 <span>{feedbackNum}</span>개의 과제 피드백이 대기 중입니다.
					</div>
				</InfoWrapperStyles>
			</MainStyles>
		</WrapperStyles>
	);
}

export default MyAdminHome;
