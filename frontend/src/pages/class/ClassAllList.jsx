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
	const [widthInput, setWidthInput] = useState(0);

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

			classDB.forEach(({ classList }) => {
				classList.forEach((item) => {
					if (item.status === 'open') {
						allClassList.push(item);
					}
				});
			});

			dispatch({ type: 'GET_ALL_CLASSES', payload: { classDB, allClassList } });

			setFilteredList(allClassList);
		};

		fetchAllClasses();
	}, [dispatch]);

	useEffect(() => {
		if (!isLoading) {
			// set initial scrollbar height
			const { clientHeight, scrollHeight } = initHeight.current;
			const initHeightRatio = ((clientHeight / scrollHeight) * 100).toFixed(2);
			setWidthInput(+initHeightRatio);
		}
	}, [isLoading]);

	useEffect(() => {
		let newList;

		if (!basicClass && !advClass && !debutClass) {
			newList = allClassList;
		} else {
			newList = allClassList.filter(
				(item) =>
					(basicClass && item.type === 'basicClass') ||
					(advClass && item.type === 'advClass') ||
					(debutClass && item.type === 'debutClass')
			);
		}

		if (month > 0) {
			newList = newList.filter((item) => item.month === month);
		}
		if (weeks > 0) {
			newList = newList.filter((item) => item.weeks === weeks);
		}

		setFilteredList(newList);
	}, [allClassList, basicClass, advClass, debutClass, month, weeks]);

	// changed month
	const handleChange = ({ target: { name, value } }) => {
		setStateClassList((prevState) => ({ ...prevState, [name]: +value }));
	};

	// changed initial scrollbar height
	const handleScroll = () => {};

	// navigate articles with nav btns
	const handleFilterBtnClick = ({ target: { id } }) => {
		setStateClassList((prevState) => ({ ...prevState, [id]: !prevState[id] }));
	};

	if (isLoading) return <Spinner />;

	// if (!allClassList || allClassList.length === 0)
	// 	return <p>예정 된 강의가 아직 없습니다.</p>;

	return (
		<WrapperStyles>
			{/* header */}
			<HeaderStyles>
				<h2>강의 스케쥴</h2>
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
				<SectionWrapperStyles
					className="SectionWrapperStyles"
					onScroll={handleScroll}
					ref={initHeight}
				>
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
				</SectionWrapperStyles>

				<BarIndicatorStyles>
					<BarContainerStyles>
						<BarStyles widthInput={widthInput} />
					</BarContainerStyles>
				</BarIndicatorStyles>
			</MainStyles>
		</WrapperStyles>
	);
}

export default ClassAllList;
