import { useMyClassContext } from '../../../contexts/myClassRoom/MyClassContext';

import useWidthState from '../../../hooks/useWindowDimensions';

import { Link } from 'react-router-dom';

import ClassAllList from './ClassAllList';

import {
	SectionStyles,
	LeftItemStyles,
	RightItemStyles,
	HeaderStyles,
	MainStyles,
	NoticeStyles,
	CardStyles,
	ButtonStyles,
} from '../styles/ClassMainStyles';

function Main() {
	const { myClassList } = useMyClassContext();
	const { width } = useWidthState();

	const myCurrentList = [];
	const myHistoryList = [];

	myClassList.forEach(({ myClass }) => {
		if (myClass.status === 'completed') {
			myHistoryList.push(myClass);
		} else {
			myCurrentList.push(myClass);
		}
	});

	return (
		<SectionStyles>
			{/* header */}
			<HeaderStyles></HeaderStyles>
			{/* main */}
			<MainStyles>
				<LeftItemStyles>
					<NoticeStyles>
						<h3>강의 정보</h3>
						{myCurrentList.length > 0 ? (
							<CardStyles>
								<h4>
									현재{' '}
									<span className="stress_col">{myCurrentList.length}</span>
									개의 강의를 수강하고 있습니다.
								</h4>

								<Link to="/dashboard/my-classroom/stream">
									<ButtonStyles variant="primary">보러가기</ButtonStyles>
								</Link>
							</CardStyles>
						) : (
							<CardStyles>
								<h4>현재 수강 중인 강의가 없습니다.</h4>
								<Link to="/class-registration/all-classes">
									<ButtonStyles variant="primary">신청하기</ButtonStyles>
								</Link>
							</CardStyles>
						)}
					</NoticeStyles>
					<NoticeStyles>
						<h3>강의 히스토리</h3>
						{myHistoryList.length > 0 ? (
							<CardStyles>
								<h4>
									이전에{' '}
									<span className="stress_col">{myHistoryList.length}</span>
									개의 강의를 수강했습니다.
								</h4>

								<Link to="/dashboard/my-classroom/history">
									<ButtonStyles variant="primary">보러가기</ButtonStyles>
								</Link>
							</CardStyles>
						) : (
							<CardStyles>
								<h4>과거에 수강했던 강의가 없습니다.</h4>
								<Link to="">
									<ButtonStyles variant="disabled" disabled={true}>
										강의듣기
									</ButtonStyles>
								</Link>
							</CardStyles>
						)}
					</NoticeStyles>
				</LeftItemStyles>
				{/* registration */}
				<RightItemStyles>
					{/*  */}
					{width >= 1024 ? <ClassAllList /> : null}
					{/*  */}
				</RightItemStyles>
			</MainStyles>
		</SectionStyles>
	);
}

export default Main;
