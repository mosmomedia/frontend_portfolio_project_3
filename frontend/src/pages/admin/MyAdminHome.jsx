import { useEffect } from 'react';
import Spinner from '../../components/shared/Spinner';
import { useAdminContext } from '../../contexts/admin/AdminContext';

import 'twin.macro';
import 'styled-components/macro';

function MyAdminHome() {
	const { isLoading } = useAdminContext();
	useEffect(() => {
		// dispatch({ type: 'LOADING' });
	}, []);

	if (isLoading) return <Spinner />;

	return (
		<div tw="py-[12vh] ">
			<div tw="space-y-4 max-w-sm mx-auto bg-white py-8 px-4  min-w-[380px] md:min-w-[480px] lg:min-w-[920px] lg:p-10 lg:space-y-10">
				<h3>안내 (서비스 준비 중)</h3>
				<div>'N'개의 강의를 진행 중입니다.</div>
				<div>'N'명의 학생이 수강 중입니다. </div>
				<div>'N'개의 과제 피드백이 대기 중입니다.</div>
			</div>
		</div>
	);
}

export default MyAdminHome;
