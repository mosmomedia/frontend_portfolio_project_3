import { useState, useEffect } from 'react';
import Spinner from '../../components/shared/Spinner';
import { useAdminContext } from '../../contexts/admin/AdminContext';

import 'twin.macro';
import 'styled-components/macro';

function MyAdminHome() {
	const { isLoading, myClassList } = useAdminContext();

	const [countInfo, setCountInfo] = useState({
		classesNum: 0,
		studentsNum: 0,
		feedbackNum: 0,
	});

	const { classesNum, studentsNum, feedbackNum } = countInfo;

	useEffect(() => {
		if (!isLoading && myClassList) {
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
		}
		// eslint-disable-next-line
	}, [isLoading, myClassList]);

	if (isLoading) return <Spinner />;

	return (
		<div tw="py-[12vh] ">
			<div tw="space-y-10 max-w-sm mx-auto bg-white py-8 px-4  min-w-[380px] md:min-w-[480px] lg:min-w-[920px] lg:p-10 lg:space-y-10">
				<h3 tw="text-lg">관리자 정보 게시판 (서비스 준비 중)</h3>
				<div tw="space-y-4 tracking-wide text-base">
					<div>
						현재 <span tw="text-keyColor">{classesNum}</span>개의 강의를 진행
						중입니다.
					</div>
					<div>
						현재 <span tw="text-keyColor">{studentsNum}</span>명의 학생이 수강
						중입니다.{' '}
					</div>
					<div>
						현재 <span tw="text-keyColor">{feedbackNum}</span>개의 과제 피드백이
						대기 중입니다.
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyAdminHome;
