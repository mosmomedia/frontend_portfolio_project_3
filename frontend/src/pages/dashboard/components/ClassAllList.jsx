import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllClasses } from '../../../contexts/class/ClassActions';
import { getMyClasses } from '../../../contexts/myClassRoom/MyClassActions';

import { useClassContext } from '../../../contexts/class/ClassContext';
import firebase from '../../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import ClassCard from '../../class/ClassCard';

import Spinner from '../../../components/shared/Spinner';

import tw from 'twin.macro';

import {
	WrapperStyles,
	HeaderStyles,
	MainStyles,
	SectionWrapperStyles,
	BarIndicatorStyles,
	BarContainerStyles,
	BarStyles,
} from '../styles/RegistrationStyles';

import {
	CardWrapperStyles,
	FilterWrapperStyles,
	FilterStyles,
} from '../styles/ClassAllListStyles';

function ClassAllList({ userState: { myClassList, isAdmin, userObjectId } }) {
	const [widthInput, setWidthInput] = useState(-1);
	const [user, loading] = useAuthState(firebase.auth);
	const {
		filteredList,
		classDB,
		monthList,
		stateClassList,
		adminInfo,
		dispatch,
		isLoading,
	} = useClassContext();

	const { month, weeks, basicClass, advClass, pdClass } = stateClassList;
	const [isChanged, setIsChanged] = useState(false);

	const [node, setNode] = useState();
	const [height, SetHeight] = useState({ clientHeight: 0, scrollHeight: 0 });

	const targetClient = useCallback((node) => {
		if (node) {
			const { clientHeight } = node;
			SetHeight((prevState) => ({ ...prevState, clientHeight }));
		}
	}, []);

	const targetScroll = useCallback((node) => {
		if (node) {
			setNode(node);
		}
	}, []);

	const myObserver = new ResizeObserver((entries) => {
		for (let entry of entries) {
			SetHeight((prevState) => ({
				...prevState,
				scrollHeight: entry.contentRect.height,
			}));
		}
	});

	useEffect(() => {
		if (node) {
			myObserver.observe(node);

			return () => {
				myObserver.unobserve(node);
			};
		}
	}, [node]);

	useEffect(() => {
		let isComponentMounted = true;

		const fetchAllClasses = async () => {
			dispatch({ type: 'LOADING' });

			const classDB = await getAllClasses();

			let filteredClassDB = [];

			const classState = {
				basicClass: false,
				advClass: false,
				pdClass: false,
			};

			classDB.forEach((item) => {
				if (item.status === 'open') {
					// add property
					item.isPurchased = false;

					filteredClassDB.push(item);
				}
			});

			let adminInfo;

			if (filteredClassDB.length > 0) {
				if (isAdmin) {
					filteredClassDB = filteredClassDB.filter(
						(item) => item.tutorId !== userObjectId
					);

					adminInfo = { userObjectId, isAdmin };
				}

				if (myClassList.length > 0) {
					filteredClassDB = filteredClassDB.filter((item) => {
						const findMyclassId = myClassList.findIndex(
							(e) => e.myClass._id === item._id
						);

						if (findMyclassId !== -1) {
							item.isPurchased = true;
							return false;
						} else {
							return item;
						}
					});
				}
			}

			if (filteredClassDB.length > 1) {
				filteredClassDB.sort((a, b) => a.weeks - b.weeks);
			}

			const months = new Set();

			filteredClassDB.forEach((item) => {
				if (item.type === 'basicClass') {
					classState.basicClass = true;
				} else if (item.type === 'advClass') {
					classState.advClass = true;
				} else if (item.type === 'pdClass') {
					classState.pdClass = true;
				}

				months.add(item.month);
			});

			const monthsArr = Array.from(months).sort((x, y) => x - y);

			if (isComponentMounted) {
				dispatch({
					type: 'FETCH_INIT_ALLCLASSES_USER',
					payload: {
						classDB,
						monthsArr,
						classState,
						filteredClassDB,
						adminInfo,
					},
				});
			}
		};

		if (!loading) {
			fetchAllClasses();
		}
		return () => (isComponentMounted = false);
	}, [loading]);

	useEffect(() => {
		if (isChanged) {
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

			if (isAdmin) {
				newList = newList.filter((item) => item.tutorId !== userObjectId);
			}

			if (myClassList.length > 0) {
				newList = newList.filter((item) => {
					const findMyclassId = myClassList.findIndex(
						(e) => e.myClass._id === item._id
					);

					if (findMyclassId !== -1) {
						item.isPurchased = true;
						return false;
					} else {
						return item;
					}
				});
			}

			if (newList.length > 1) {
				newList.sort((a, b) => a.weeks - b.weeks);
			}

			dispatch({ type: 'SET_FILTERED_LIST', payload: newList });
			setIsChanged(false);
		}
	}, [isChanged]);

	// scrollbar
	useEffect(() => {
		if (!loading && filteredList.length > 0 && node) {
			// set initial scrollbar height
			const { clientHeight, scrollHeight } = height;
			if (clientHeight >= scrollHeight) {
				setWidthInput(0);
			} else {
				const initHeightRatio = ((clientHeight / scrollHeight) * 100).toFixed(
					2
				);
				setWidthInput(+initHeightRatio);
			}
		}
	}, [loading, filteredList, height]);

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

				const { userObjectId, isAdmin } = adminInfo;
				if (item[name] === +value) {
					if (isAdmin && item.tutorId === userObjectId) {
						continue;
					}
					getClassState[item.type] = true;
				}
			}

			dispatch({
				type: 'SET_STATEDATELIST',
				payload: { name, value, getClassState },
			});
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

			dispatch({
				type: 'SET_STATEDATELIST',
				payload: { name, value, getClassState },
			});
		} else {
			dispatch({
				type: 'SET_STATEDATELIST',
				payload: { name, value, getClassState },
			});
		}

		setIsChanged(true);
	};

	// click filter btns
	const handleFilterBtnClick = ({ target: { id } }) => {
		dispatch({ type: 'SET_STATECLASSLIST', payload: id });
		setIsChanged(true);
	};

	// get all list
	const handleHeaderClick = () => {
		dispatch({ type: 'GET_INIT_FILTERED_LIST' });
		setIsChanged(true);
	};

	if (isLoading || loading) return <Spinner />;

	return (
		<WrapperStyles>
			{/* header */}
			<HeaderStyles>
				<h2 onClick={handleHeaderClick}>추천 강의 목록</h2>
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
						ref={targetClient}
						onScroll={handleScroll}
						add_styles={tw`border-[1rem] rounded-t-lg  border-white`}
						variant="card_col_2"
					>
						{classDB.length === 0 ? (
							<div>현재 개설 된 강의가 없습니다.</div>
						) : filteredList.length === 0 ? (
							<div>강의 일정 또는 강의 종류를 선택하세요.</div>
						) : (
							<CardWrapperStyles ref={targetScroll}>
								<AnimatePresence>
									{filteredList.map((item, id) => (
										<motion.div
											key={item._id}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
										>
											<ClassCard item={item}></ClassCard>
										</motion.div>
									))}
								</AnimatePresence>
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
