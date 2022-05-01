import { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import axios from 'axios';

import Spinner from '../components/shared/Spinner';

import {
	GroupLabelStyles,
	GroupOptionLabelStyles,
	GroupBadgeStyles,
} from '../styles/GroupSelectStyles';

const API_URI = '/api/book/';

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
	const initSelctedState = { genre: [], title: [], author: [] };
	const [isLoading, setIsLoading] = useState(false);
	const [selectState, setSelectState] = useState(initSelctedState);
	const [sortedList, setSortedList] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setIsLoading(true);
				const res = await axios.get(API_URI);
				const allBooksList = res.data;

				if (allBooksList.length > 0) {
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
					setIsLoading(false);
					setBookList(allBooksList);
					setSortedList(allBooksList);
				}
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const filteredList = [];
		if (selectState.genre.length > 0) {
			selectState.genre.forEach((type) => {
				sortedList.forEach((item) => {
					if (item.genre === type) {
						const isOwnItem = filteredList.findIndex(
							(work) => work._id === item._id
						);
						if (isOwnItem) {
							filteredList.push(item);
						}
					}
				});
			});
		}

		if (selectState.title.length > 0) {
			selectState.title.forEach((item) => {
				const isOwnItem = filteredList.findIndex(
					(work) => work._id === item._id
				);
				if (isOwnItem) {
					filteredList.push(item);
				}
			});
		}

		if (selectState.author.length > 0) {
			selectState.author.forEach((item) => {
				const isOwnItem = filteredList.findIndex(
					(work) => work._id === item._id
				);
				if (isOwnItem) {
					filteredList.push(item);
				}
			});
		}

		if (filteredList.length > 0) {
			setBookList(filteredList);
		} else {
			setBookList(sortedList);
		}
	}, [selectState]);

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

	if (isLoading) return <Spinner />;

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
