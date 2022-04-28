import { useState, useEffect } from 'react';
import tw from 'twin.macro';

import { useBookContext } from '../../contexts/book/BookContext';
import { getAllbooks } from '../../contexts/book/BookActions';
import Spinner from '../../components/shared/Spinner';

import GroupSelect from '../../components/GroupSelect';
import BookCard from '../../components/BookCard';

// style
import { MainStyles, SectionStyles, ContainerStyles } from '../../styles';
import {
	ContentStyles,
	BookListStyles,
	LeftItemStyles,
	RightItemStyles,
} from '../../styles/DebutHistoryStyles';

function DebutHistory() {
	const { isLoading, dispatch } = useBookContext();
	const [bookList, setBookList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'LOADING' });
			const payload = await getAllbooks();
			dispatch({ type: 'GET_ALL_LIST', payload });
			setBookList(payload);
		};

		fetchData();
	}, [dispatch]);

	if (isLoading) return <Spinner />;

	return (
		<MainStyles>
			<SectionStyles variant="even" add_styles={tw`px-6`}>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<div className="header">
								<h1>Debut History</h1>
								<h2>스토리튠즈가 배출한 데뷔 작가와 대표 작품들</h2>
							</div>
							<GroupSelect setBookList={setBookList} bookList={bookList} />
						</LeftItemStyles>
						<RightItemStyles>
							<BookListStyles>
								{bookList.map((book) => (
									<BookCard key={book.kkp_id} book={book} />
								))}
							</BookListStyles>
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>
		</MainStyles>
	);
}

export default DebutHistory;
