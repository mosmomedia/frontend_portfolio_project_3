import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Pagination from './Pagination';
import MySubWork from './MySubWork';

import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';
import Spinner from '../../../components/shared/Spinner';

import {
	SectionStyles,
	LayoutStyles,
	HeaderStyles,
	UpperGroupStyles,
	ButtonStyles,
	InfoStyles,
	ShortDescriptionStyles,
	MainStyles,
	PostsStyles,
} from '../styles/MySubWorkListStyle';

function MySubWorkList() {
	const { isLoading, currentWork } = useMyWorkContext();

	const [page, setPage] = useState(1);
	const [posts, setPosts] = useState([]);

	const limit = 5;
	const offset = (page - 1) * limit;

	const navigate = useNavigate();

	useEffect(() => {
		if (currentWork && currentWork.contentList.length > 0) {
			setPosts(currentWork.contentList);
		} else {
			navigate('/dashboard/my-board/');
		}
		// eslint-disable-next-line
	}, []);

	const handleWriteClick = () => {
		navigate(`/dashboard/my-board/work/write/${currentWork._id}`);
	};

	if (isLoading || !currentWork) return <Spinner />;

	return (
		<LayoutStyles>
			<SectionStyles>
				<HeaderStyles>
					<UpperGroupStyles>
						<InfoStyles>
							<h2>{currentWork.title}</h2>
							<span>|</span>
							<h4>{currentWork.genre}</h4>
						</InfoStyles>
						<ButtonStyles onClick={handleWriteClick}>연재하기</ButtonStyles>
					</UpperGroupStyles>

					<ShortDescriptionStyles>
						<p className="shortDescription">{currentWork.shortDesc}</p>
					</ShortDescriptionStyles>
				</HeaderStyles>

				<MainStyles>
					<PostsStyles>
						{posts.slice(offset, offset + limit).map((post) => (
							<MySubWork key={post._id} post={post} />
						))}
					</PostsStyles>
					<Pagination
						total={posts.length}
						limit={limit}
						page={page}
						setPage={setPage}
					/>
				</MainStyles>
				{/*  */}
			</SectionStyles>
		</LayoutStyles>
	);
}

export default MySubWorkList;
