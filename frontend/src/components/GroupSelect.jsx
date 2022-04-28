import { useEffect } from 'react';

import Select from 'react-select';

import { useBookContext } from '../contexts/book/BookContext';

const genreOptions = [
	{ type: 'genre', value: '판타지', label: '판타지' },
	{ type: 'genre', value: '로맨스', label: '로맨스' },
	{ type: 'genre', value: '로판', label: '로판' },
	{ type: 'genre', value: '현판', label: '현판' },
	{ type: 'genre', value: '무협', label: '무협' },
	{ type: 'genre', value: '판드', label: '판드' },
];

const genreSet = {
	판타지: [],
	로맨스: [],
	로판: [],
	현판: [],
	무협: [],
	판드: [],
};

const workOptions = [];
const authorOptions = [];

const groupedOptions = [
	{
		label: '장르',
		options: genreOptions,
	},
	{
		label: '작품',
		options: workOptions,
	},
	{
		label: '작가',
		options: authorOptions,
	},
];

const groupStyles = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
};

const groupBadgeStyles = {
	backgroundColor: '#EBECF0',
	borderRadius: '2em',
	color: '#172B4D',
	display: 'inline-block',
	fontSize: 12,
	fontWeight: 'normal',
	lineHeight: '1',
	minWidth: 1,
	padding: '0.16666666666667em 0.5em',
	textAlign: 'center',
};

const formatGroupLabel = (groupedOptions) => (
	<div style={groupStyles}>
		<span>{groupedOptions.label}</span>
		<span style={groupBadgeStyles}>{groupedOptions.options.length}</span>
	</div>
);

export const GroupSelect = ({ setBookList }) => {
	const { allBooksList } = useBookContext();

	useEffect(() => {
		if (allBooksList.length > 0) {
			allBooksList.forEach((book) => {
				genreSet[book.genre].push(book);

				workOptions.push({
					type: 'title',
					value: book.title,
					label: book.title,
					data: book,
				});

				authorOptions.push({
					type: 'author',
					value: book.author,
					label: book.author,
					data: book,
				});
			});
		}
	}, [allBooksList]);

	const handleChange = (selectedList) => {
		let filteredGenreList = [];
		const filteredBookList = new Set();

		selectedList.forEach((item) => {
			if (item.type === 'genre') {
				filteredGenreList = [...filteredGenreList, ...genreSet[item.value]];
			} else {
				filteredBookList.add(item.data);
			}
		});

		if (filteredGenreList.length > 0) {
			filteredGenreList.forEach((item) => filteredBookList.add(item));
		}

		const resArr = Array.from(filteredBookList);

		if (resArr.length > 0) {
			setBookList(resArr);
		} else {
			setBookList(allBooksList);
		}
	};

	return (
		<Select
			onChange={handleChange}
			options={groupedOptions}
			isMulti
			autoFocus
			isSearchable
			formatGroupLabel={formatGroupLabel}
		/>
	);
};

export default GroupSelect;
