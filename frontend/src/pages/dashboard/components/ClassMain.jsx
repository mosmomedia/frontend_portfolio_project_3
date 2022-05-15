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
	//* tmp class history numbers
	const myClassHistory = [];
	const { width } = useWidthState();
	return (
		<SectionStyles>
			{/* header */}
			<HeaderStyles></HeaderStyles>
			{/* main */}
			<MainStyles>
				<LeftItemStyles>
					<NoticeStyles>
						<h3>강의 정보</h3>
						{myClassList.length > 0 ? (
							<CardStyles>
								<h4>
									현재 <span className="stress_col">{myClassList.length}</span>
									개의 강의를 수강하고 있습니다.
								</h4>

								<ButtonStyles variant="primary">
									<Link to="/dashboard/my-classroom/stream">보러가기</Link>
								</ButtonStyles>
							</CardStyles>
						) : (
							<CardStyles>
								<h4>현재 수강 중인 강의가 없습니다.</h4>
								<ButtonStyles variant="primary">
									<Link to="/class-registration/all-classes">신청하기</Link>
								</ButtonStyles>
							</CardStyles>
						)}
					</NoticeStyles>
					<NoticeStyles>
						<h3>강의 히스토리</h3>
						{myClassHistory.length > 0 ? (
							<CardStyles>
								이전에{' '}
								<span className="stress_col">{myClassHistory.length}</span>
								개의 강의를 수강했습니다.
								<ButtonStyles
									variant="primary"
									navtigate_to="/dashboard/my-classroom/stream"
								>
									보러가기
								</ButtonStyles>
							</CardStyles>
						) : (
							<CardStyles>
								<h4>과거에 수강했던 강의가 없습니다.</h4>
								<ButtonStyles variant="disabled" disabled={true}>
									강의듣기
								</ButtonStyles>
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
