import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';
import { getMyWorks } from '../../../contexts/myWorkBoard/MyWorkActions';

import Spinner from '../../../components/shared/Spinner';

import {
	SectionStyles,
	MainStyles,
	NoticeStyles,
	CardStyles,
	ButtonStyles,
} from '../styles/MyBoardMainStyles';

function MyBoardMain() {
	const { userObjectId, myWorkList } = useMyWorkContext();

	const { isLoading, dispatch } = useMyWorkContext();

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'LOADING' });
			const payload = await getMyWorks();

			dispatch({ type: 'GET_MY_WORKS', payload });
		};

		fetchData();
	}, [dispatch]);

	if (isLoading) return <Spinner />;

	return (
		<SectionStyles>
			{/* header */}
			<MainStyles>
				<NoticeStyles>
					<h3>작품 연재 정보</h3>
					{myWorkList.length > 0 ? (
						<CardStyles>
							<h4>
								현재 <span className="stress_col">{myWorkList.length}</span>
								개의 작품을 연재 중입니다.
							</h4>

							<Link to={`/dashboard/my-board/works/${userObjectId}`}>
								<ButtonStyles variant="primary">보러가기</ButtonStyles>
							</Link>
						</CardStyles>
					) : (
						<CardStyles>
							<h4>현재 연재 중인 작품이 없습니다.</h4>
							<Link to="/dashboard/my-board/publish">
								<ButtonStyles variant="primary">연재하기</ButtonStyles>
							</Link>
						</CardStyles>
					)}
				</NoticeStyles>
			</MainStyles>
		</SectionStyles>
	);
}

export default MyBoardMain;
