import { useState, useRef, useEffect } from 'react';

import { getAllClasses } from '../../contexts/class/ClassActions';
import { useClassContext } from '../../contexts/class/ClassContext';

import ClassCard from './ClassCard';

import Spinner from '../../components/shared/Spinner';

import {
	WrapperStyles,
	HeaderStyles,
	FilterWrapperStyles,
	FilterStyles,
	MainStyles,
	SectionWrapperStyles,
	BarIndicatorStyles,
	BarContainerStyles,
	BarStyles,
} from '../../styles/ClassAllListStyles';

function ClassAllList() {
	const initHeight = useRef();
	const [widthInput, setWidthInput] = useState(-1);

	const { classDB, allClassList, isLoading, dispatch } = useClassContext();

	const initialState = {
		month: -1,
		weeks: -1,
		basicClass: false,
		advClass: false,
		debutClass: false,
	};

	const [stateClassList, setStateClassList] = useState(initialState);
	const { month, weeks, basicClass, advClass, debutClass } = stateClassList;

	const [filteredList, setFilteredList] = useState([]);

	useEffect(() => {
		const fetchAllClasses = async () => {
			dispatch({ type: 'LOADING' });

			const classDB = await getAllClasses();
			const allClassList = [];

			if (classDB.length > 0) {
				classDB.forEach(({ classList }) => {
					classList.forEach((item) => {
						if (item.status === 'open') {
							allClassList.push(item);
						}
					});
				});

				allClassList.sort((a, b) => a.weeks - b.weeks);

				dispatch({
					type: 'GET_ALL_CLASSES',
					payload: { classDB, allClassList },
				});

				setStateClassList((prevState) => ({
					...prevState,
					basicClass: true,
					advClass: true,
				}));
			}
		};
		fetchAllClasses();
	}, [dispatch]);

	useEffect(() => {
		let newList;

		console.log(stateClassList);
		newList = allClassList.filter(
			(item) =>
				(basicClass && item.type === 'basicClass') ||
				(advClass && item.type === 'advClass') ||
				(debutClass && item.type === 'debutClass')
		);

		if (month > 0) {
			newList = newList.filter((item) => item.month === month);
		}

		if (weeks > 0) {
			newList = newList.filter((item) => item.weeks === weeks);
		}
		setFilteredList(newList);
	}, [allClassList, basicClass, advClass, debutClass, month, weeks]);

	useEffect(() => {
		if (!isLoading && filteredList.length > 0) {
			// set initial scrollbar height
			const { clientHeight, scrollHeight } = initHeight.current;
			// console.log(clientHeight, scrollHeight, scrollTop);
			if (clientHeight === scrollHeight) {
				setWidthInput(0);
			} else {
				const initHeightRatio = ((clientHeight / scrollHeight) * 100).toFixed(
					2
				);
				setWidthInput(+initHeightRatio);
			}
		}
	}, [isLoading, filteredList]);

	// changed initial scrollbar height
	const handleScroll = ({
		target: { clientHeight, scrollTop, scrollHeight },
	}) => {
		const changedHeight = clientHeight + scrollTop;

		if (clientHeight === scrollHeight) {
			setWidthInput(0);
		} else {
			const initHeightRatio = ((changedHeight / scrollHeight) * 100).toFixed(2);
			setWidthInput(+initHeightRatio);
		}
	};

	// changed month
	const handleChange = ({ target: { name, value } }) => {
		let getClassState = {
			basicClass: false,
			advClass: false,
			debutClass: false,
		};

		if (+value > 0) {
			for (let i = 0; i < allClassList.length; i++) {
				const item = allClassList[i];

				if (name === 'month' && weeks > 0 && item.weeks !== weeks) {
					continue;
				}

				if (name === 'weeks' && month > 0 && item.month !== month) {
					continue;
				}

				if (item[name] === +value) {
					getClassState[item.type] = true;
				}
			}

			setStateClassList((prevState) => ({
				...prevState,
				[name]: +value,
				...getClassState,
			}));
		} else if (+value === 0 && (month === 0 || weeks === 0)) {
			handleHeaderClick();
		} else if (+value === 0 && (month > 0 || weeks > 0)) {
			let getType;
			if (name === 'month') {
				getType = 'weeks';
			} else if (name === 'weeks') {
				getType = 'month';
			}

			for (let i = 0; i < allClassList.length; i++) {
				const item = allClassList[i];

				if (item[getType] === stateClassList[getType]) {
					getClassState[item.type] = true;
				}
			}

			setStateClassList((prevState) => ({
				...prevState,
				[name]: +value,
				...getClassState,
			}));
		} else {
			setStateClassList((prevState) => ({
				...prevState,
				[name]: +value,
			}));
		}
	};

	const handleFilterBtnClick = ({ target: { id } }) => {
		setStateClassList((prevState) => ({ ...prevState, [id]: !prevState[id] }));
	};

	// get all list
	const handleHeaderClick = () => {
		setStateClassList((prevState) => ({
			...prevState,
			month: 0,
			weeks: 0,
			basicClass: true,
			advClass: true,
			debutClass: true,
		}));
	};

	if (isLoading) return <Spinner />;

	return (
		<WrapperStyles>
			{/* header */}
			<HeaderStyles>
				<h2 onClick={handleHeaderClick}>강의 스케쥴</h2>
				{/* btns */}
				<FilterWrapperStyles>
					<select name="month" onChange={handleChange} value={month}>
						<option value="-1" disabled>
							강의시작
						</option>
						<option value="0">전체보기</option>
						{classDB.map(({ month }) => (
							<option key={`monthKey${month}`} value={month}>
								{month}월
							</option>
						))}
					</select>
					<select name="weeks" onChange={handleChange} value={weeks}>
						<option value="-1" disabled>
							강의기간
						</option>
						<option value="0">전체보기</option>
						<option value="4">4주</option>
						<option value="8">8주</option>
					</select>
					<ul>
						<FilterStyles
							id="basicClass"
							is_selected={basicClass}
							onClick={handleFilterBtnClick}
						>
							입문
						</FilterStyles>

						<FilterStyles
							id="advClass"
							is_selected={advClass}
							onClick={handleFilterBtnClick}
						>
							심화
						</FilterStyles>
						<FilterStyles
							id="debutClass"
							is_selected={debutClass}
							onClick={handleFilterBtnClick}
						>
							데뷔
						</FilterStyles>
					</ul>
				</FilterWrapperStyles>
			</HeaderStyles>
			{/* main */}
			<MainStyles>
				<>
					<SectionWrapperStyles
						className="SectionWrapperStyles"
						ref={initHeight}
						onScroll={handleScroll}
					>
						{classDB.length === 0 ? (
							<div>No classes yet</div>
						) : filteredList.length === 0 ? (
							<div>강의 일정 또는 강의 종류를 선택하세요.</div>
						) : (
							<>
								{filteredList.map(
									(
										{
											title,
											type,
											status,
											month,
											weeks,
											hours,
											period,
											tutor,
											price,
										},
										id
									) => (
										<ClassCard
											key={id}
											value={{
												title,
												type,
												status,
												month,
												weeks,
												hours,
												period,
												tutor,
												price,
											}}
										></ClassCard>
									)
								)}
							</>
						)}
					</SectionWrapperStyles>
					<BarIndicatorStyles>
						<BarContainerStyles>
							<BarStyles widthInput={widthInput} />
						</BarContainerStyles>
					</BarIndicatorStyles>
				</>
			</MainStyles>
		</WrapperStyles>
	);
}

export default ClassAllList;
