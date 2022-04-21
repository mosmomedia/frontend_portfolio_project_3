import { useState, useRef, useEffect } from 'react';

import tw from 'twin.macro';

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
} from '../../styles/ClassAllListstyles';

function ClassAllList() {
	const initHeight = useRef();
	const [widthInput, setWidthInput] = useState(0);

	const initialState = {
		month: 0,
		weeks: 0,
		basicClass: false,
		advClass: false,
		debutClass: false,
	};

	const [filteredList, setFilteredList] = useState(initialState);
	const { month, weeks, basicClass, advClass, debutClass } = filteredList;

	useEffect(() => {
		// set initial scrollbar height
		const { clientHeight, scrollHeight } = initHeight.current;
		const initHeightRatio = ((clientHeight / scrollHeight) * 100).toFixed(2);
		setWidthInput(+initHeightRatio);

		console.log(filteredList);
	}, [filteredList]);

	// changed month
	const handleChange = ({ target: { name, value } }) => {
		setFilteredList((prevState) => ({ ...prevState, [name]: +value }));
	};

	// changed initial scrollbar height
	const handleScroll = () => {};

	// navigate articles with nav btns
	const handleFilterBtnClick = ({ target: { id } }) => {
		setFilteredList((prevState) => ({ ...prevState, [id]: !prevState[id] }));
	};

	return (
		<WrapperStyles>
			{/* header */}
			<HeaderStyles>
				<h2>강의 스케쥴</h2>
				{/* btns */}
				<FilterWrapperStyles>
					<select name="month" onChange={handleChange} value={month}>
						<option value="0">강의시작</option>
						<option value="4">4월</option>
						<option value="5">5월</option>
					</select>
					<select name="weeks" onChange={handleChange} value={weeks}>
						<option value="0">강의기간</option>
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
					{month}
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
