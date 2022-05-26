import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CgEnter } from 'react-icons/cg';

import Pagination from './Pagination';

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
	MySubWorkStyles,
	TitleStyles,
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
	}, []);

	const handleClick = () => {
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
						<ButtonStyles onClick={handleClick}>연재하기</ButtonStyles>
					</UpperGroupStyles>

					<ShortDescriptionStyles>
						<p className="shortDescription">{currentWork.shortDesc}</p>
					</ShortDescriptionStyles>
				</HeaderStyles>

				<MainStyles>
					<PostsStyles>
						{posts.slice(offset, offset + limit).map((post) => (
							<MySubWorkStyles key={post._id}>
								<h4>{post.subTitle} </h4>
								<ButtonStyles variant="edit" onClick={handleClick}>
									수정하기
								</ButtonStyles>
							</MySubWorkStyles>
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
