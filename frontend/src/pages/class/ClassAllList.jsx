import { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getAllClasses } from '../../contexts/class/ClassActions';
import { useClassContext } from '../../contexts/class/ClassContext';

import { useAuthContext } from '../../contexts/auth/AuthContext';
import { getMyClasses } from '../../contexts/myClassRoom/MyClassActions';

import ClassCard from './ClassCard';

import Spinner from '../../components/shared/Spinner';

import tw from 'twin.macro';

import {
	WrapperStyles,
	HeaderStyles,
	MainStyles,
	SectionWrapperStyles,
	BarIndicatorStyles,
	BarContainerStyles,
	BarStyles,
} from '../../styles/RegistrationStyles';

import {
	CardWrapperStyles,
	FilterWrapperStyles,
	FilterStyles,
} from '../../styles/ClassAllListStyles';

function ClassAllList() {
	const initHeight = useRef();
	const [widthInput, setWidthInput] = useState(-1);

	const { user } = useAuthContext();

	const { classDB, isLoading, dispatch } = useClassContext();

	const initialState = {
		month: -1,
		weeks: -1,
		basicClass: false,
		advClass: false,
		pdClass: false,
	};

	const [stateClassList, setStateClassList] = useState(initialState);
	const { month, weeks, basicClass, advClass, pdClass } = stateClassList;
	const [monthList, setMonthList] = useState(null);

	const [filteredList, setFilteredList] = useState([]);

	const { pathname } = useLocation();
	const navigate = useNavigate();

	useEffect(() => {
		let isComponentMounted = true;

		const fetchAllClasses = async () => {
			dispatch({ type: 'LOADING' });

			const classDB = await getAllClasses();
			const months = new Set();

			classDB.forEach((item) => {
				if (item.status === 'open') {
					months.add(item.month);
					item.isPurchased = false;
				}
			});

			// find months
			const monthsArr = Array.from(months);

			if (classDB.length > 1) {
				classDB.sort((a, b) => a.weeks - b.weeks);
			}

			if (user && classDB.length > 0) {
				dispatch({ type: 'LOADING' });

				const payload = await getMyClasses();
				if (payload) {
					classDB.forEach((item) => {
						const findMyclassId = payload.findIndex(
							(e) => e.myClass._id === item._id
						);

						if (findMyclassId !== -1) {
							item.isPurchased = true;
						}

						return item;
					});
				}
				dispatch({ type: 'OFF_LOADING' });
			}

			const classState = {
				basicClass: true,
				advClass: true,
				pdClass: true,
			};

			const API_REG_URI = '/class-registration/all-classes';
			const API_MY_CLASS_URI = '/dashboard/my-classroom';

			if (pathname === `${API_MY_CLASS_URI}`) {
			} else if (pathname === `${API_REG_URI}/online/basic`) {
				classState.advClass = false;
				classState.pdClass = false;
			} else if (pathname === `${API_REG_URI}/online/adv`) {
				classState.basicClass = false;
				classState.pdClass = false;
			} else if (pathname === `${API_REG_URI}/online/pd`) {
				classState.basicClass = false;
				classState.advClass = false;
			} else if (
				pathname !== `${API_REG_URI}` &&
				pathname !== `${API_REG_URI}/online`
			) {
				return navigate('/notfound');
			}

			if (isComponentMounted) {
				setMonthList(monthsArr);
				setStateClassList(classState);
				setFilteredList(classDB);
			}

			dispatch({
				type: 'GET_ALL_CLASSES',
				payload: classDB,
			});
		};

		fetchAllClasses();
		return () => (isComponentMounted = false);
	}, [dispatch, user, pathname, navigate]);

	// useEffect(() => {
	// 	const classState = {
	// 		basicClass: true,
	// 		advClass: true,
	// 		pdClass: true,
	// 	};

	// 	const API_REG_URI = '/class-registration/all-classes';
	// 	const API_MY_CLASS_URI = '/dashboard/my-classroom';

	// 	if (pathname === `${API_MY_CLASS_URI}`) {
	// 	} else if (pathname === `${API_REG_URI}/online/basic`) {
	// 		classState.advClass = false;
	// 		classState.pdClass = false;
	// 	} else if (pathname === `${API_REG_URI}/online/adv`) {
	// 		classState.basicClass = false;
	// 		classState.pdClass = false;
	// 	} else if (pathname === `${API_REG_URI}/online/pd`) {
	// 		classState.basicClass = false;
	// 		classState.advClass = false;
	// 	} else if (
	// 		pathname !== `${API_REG_URI}` &&
	// 		pathname !== `${API_REG_URI}/online`
	// 	) {
	// 		return navigate('/notfound');
	// 	}

	// 	setStateClassList((prevState) => ({
	// 		...prevState,
	// 		...classState,
	// 	}));
	// }, [navigate, pathname]);

	useEffect(() => {
		let newList;
		newList = classDB.filter(
			(item) =>
				(basicClass && item.type === 'basicClass') ||
				(advClass && item.type === 'advClass') ||
				(pdClass && item.type === 'pdClass')
		);

		if (month > 0) {
			newList = newList.filter((item) => item.month === month);
		}

		if (weeks > 0) {
			newList = newList.filter((item) => item.weeks === weeks);
		}

		setFilteredList(newList);
	}, [classDB, basicClass, advClass, pdClass, month, weeks]);

	// scrollbar
	useEffect(() => {
		if (!isLoading && filteredList.length > 0) {
			// set initial scrollbar height
			const { clientHeight, scrollHeight } = initHeight.current;
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

	// changed month or weeks
	const handleChange = ({ target: { name, value } }) => {
		let getClassState = {
			basicClass: false,
			advClass: false,
			pdClass: false,
		};

		if (+value > 0) {
			for (let i = 0; i < classDB.length; i++) {
				const item = classDB[i];

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
		} else if (+value === 0 && (month <= 0 || weeks <= 0)) {
			handleHeaderClick();
		} else if (+value === 0 && (month > 0 || weeks > 0)) {
			let getType;
			if (name === 'month') {
				getType = 'weeks';
			} else if (name === 'weeks') {
				getType = 'month';
			}

			for (let i = 0; i < classDB.length; i++) {
				const item = classDB[i];

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

	// click filter btns
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
			pdClass: true,
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
						{monthList &&
							monthList.map((month, id) => (
								<option key={`monthKey${month}/${id}`} value={month}>
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
							id="pdClass"
							is_selected={pdClass}
							onClick={handleFilterBtnClick}
						>
							PD
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
						add_styles={tw`border-[1rem] rounded-t-lg  border-white`}
						variant="card_col_2"
					>
						{classDB.length === 0 ? (
							<div>No classes yet</div>
						) : filteredList.length === 0 ? (
							<div>강의 일정 또는 강의 종류를 선택하세요.</div>
						) : (
							<CardWrapperStyles>
								{filteredList.map((item, id) => (
									<ClassCard key={id} item={item}></ClassCard>
								))}
							</CardWrapperStyles>
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
