import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import Spinner from '../components/shared/Spinner';
import useFetch from '../hooks/useFetch';

import {
	GroupLabelStyles,
	GroupOptionLabelStyles,
	GroupBadgeStyles,
} from '../styles/GroupSelectStyles';

const genreOptions = [
	{ type: 'genre', value: '판타지', label: '판타지' },
	{ type: 'genre', value: '로맨스', label: '로맨스' },
	{ type: 'genre', value: '로판', label: '로판' },
	{ type: 'genre', value: '현판', label: '현판' },
	{ type: 'genre', value: '무협', label: '무협' },
	{ type: 'genre', value: '판드', label: '판드' },
];

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

const formatGroupLabel = (groupedOptions) => (
	<GroupLabelStyles>
		<GroupOptionLabelStyles>{groupedOptions.label}</GroupOptionLabelStyles>
		<GroupBadgeStyles>{groupedOptions.options.length}</GroupBadgeStyles>
	</GroupLabelStyles>
);

export const GroupSelect = ({ setBookList }) => {
	const API_URI = '/api/book/';
	const { loading, data } = useFetch(API_URI);

	const [selectState, setSelectState] = useState({
		genre: [],
		title: [],
		author: [],
	});

	const [allList, setAllList] = useState([]);

	useEffect(() => {
		const allBooksList = data;
		if (!loading && allBooksList.length > 0) {
			allBooksList.forEach((book) => {
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
			setBookList(allBooksList);
			setAllList(allBooksList);
		}
		// eslint-disable-next-line
	}, [loading]);

	// set filtereList function
	const findAndUpdateitem = (arr, item) => {
		const isOwnItem = arr.findIndex((work) => work._id === item._id);
		if (isOwnItem === -1) {
			arr.push(item);
		}
	};

	useEffect(() => {
		const filteredList = [];
		if (selectState.genre.length > 0) {
			selectState.genre.forEach((type) => {
				allList.forEach((item) => {
					if (item.genre === type) {
						findAndUpdateitem(filteredList, item);
					}
				});
			});
		}

		if (selectState.title.length > 0) {
			selectState.title.forEach((item) => {
				findAndUpdateitem(filteredList, item);
			});
		}

		if (selectState.author.length > 0) {
			selectState.author.forEach((item) => {
				findAndUpdateitem(filteredList, item);
			});
		}

		if (filteredList.length > 0) {
			setBookList(filteredList);
		} else {
			setBookList(allList);
		}
		// eslint-disable-next-line
	}, [selectState, setBookList]);

	const animatedComponents = makeAnimated();

	const handleChange = (selectedList) => {
		const tmpSelectState = { genre: [], title: [], author: [] };

		selectedList.forEach((item) => {
			if (item.type === 'genre') {
				tmpSelectState[item.type].push(item.value);
			} else {
				tmpSelectState[item.type].push(item.data);
			}
		});

		setSelectState(tmpSelectState);
	};

	if (loading) return <Spinner />;

	return (
		<Select
			onChange={handleChange}
			options={groupedOptions}
			placeholder="장르, 작품 또는 작가를 검색하세요.."
			isMulti
			autoFocus
			isSearchable
			components={animatedComponents}
			formatGroupLabel={formatGroupLabel}
		/>
	);
};

export default GroupSelect;
