import { useState } from 'react';
import tw from 'twin.macro';

import GroupSelect from '../../components/GroupSelect';
import BookCard from '../../components/BookCard';

// style
import { MainStyles, ContainerStyles } from '../../styles';
import {
	SectionStyles,
	ContentStyles,
	BookListStyles,
	LeftItemStyles,
	RightItemStyles,
} from '../../styles/DebutHistoryStyles';

function DebutHistory() {
	// fetchData from GroupSelect component
	const [bookList, setBookList] = useState([]);

	return (
		<MainStyles>
			<SectionStyles variant="even" add_styles={tw`px-6 min-h-screen`}>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<div className="header">
								<h1>Debut History</h1>
								<h2>스토리튠즈가 배출한 데뷔 작가와 대표 작품들</h2>
							</div>
							<GroupSelect setBookList={setBookList} />
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
