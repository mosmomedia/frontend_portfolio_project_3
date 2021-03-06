import { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import { getAllClasses } from '../../contexts/class/ClassActions';
import { getMyClasses } from '../../contexts/myClassRoom/MyClassActions';
import { useClassContext } from '../../contexts/class/ClassContext';

import firebase from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

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
	// const initHeight = useRef();
	const [widthInput, setWidthInput] = useState(-1);

	const [user, loading] = useAuthState(firebase.auth);

	const { classDB, isLoading, dispatch } = useClassContext();

	const initialState = {
		month: -1,
		weeks: -1,
		basicClass: false,
		advClass: false,
		pdClass: false,
	};

	const [stateClassList, setStateClassList] = useState(initialState);
	const [initStateClassList, setInitStateClassList] = useState({
		...initialState,
		month: 0,
		weeks: 0,
	});
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

			let filteredClassDB = [];

			const classState = {
				basicClass: false,
				advClass: false,
				pdClass: false,
			};

			classDB.forEach((item) => {
				if (item.status === 'open') {
					months.add(item.month);
					// add property
					item.isPurchased = false;

					filteredClassDB.push(item);
				}
			});

			// find months
			const monthsArr = Array.from(months).sort((x, y) => x - y);

			if (user && filteredClassDB.length > 0) {
				const docRef = firebase.doc(firebase.db, 'users', user.uid);
				const docSnap = await firebase.getDoc(docRef);
				const { userObjectId, isAdmin } = docSnap.data();
				if (isAdmin) {
					filteredClassDB = filteredClassDB.filter(
						(item) => item.tutorId !== userObjectId
					);
				}

				const { myClasses: payload } = await getMyClasses();

				if (payload) {
					filteredClassDB.forEach((item) => {
						const findMyclassId = payload.findIndex(
							(e) => e.myClass._id === item._id
						);

						if (findMyclassId !== -1) {
							item.isPurchased = true;
						}

						return item;
					});
				}
			}

			if (filteredClassDB.length > 1) {
				filteredClassDB.sort((a, b) => a.weeks - b.weeks);
			}

			filteredClassDB.forEach((item) => {
				if (item.type === 'basicClass') {
					classState.basicClass = true;
				} else if (item.type === 'advClass') {
					classState.advClass = true;
				} else if (item.type === 'pdClass') {
					classState.pdClass = true;
				}
			});

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
				setStateClassList((prevState) => ({ ...prevState, ...classState }));
				setFilteredList(filteredClassDB);
				setInitStateClassList({ ...initStateClassList, ...classState });
			}

			dispatch({
				type: 'GET_ALL_CLASSES',
				payload: filteredClassDB,
			});
		};

		if (!loading) {
			fetchAllClasses();
		}

		return () => (isComponentMounted = false);
	}, [loading, dispatch]);

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
	}, [basicClass, advClass, pdClass, month, weeks, classDB]);

	// scrollbar
	const [node, setNode] = useState();

	const initHeight = useCallback((node) => {
		if (node !== null) {
			setNode(node);
		}
	}, []);

	useEffect(() => {
		if (!isLoading && filteredList.length > 0 && node) {
			// set initial scrollbar height
			const { clientHeight, scrollHeight } = node;

			if (clientHeight === scrollHeight) {
				setWidthInput(0);
			} else {
				const initHeightRatio = ((clientHeight / scrollHeight) * 100).toFixed(
					2
				);
				setWidthInput(+initHeightRatio);
			}
		}
	}, [isLoading, filteredList, node]);

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
		setStateClassList(initStateClassList);
	};

	if (isLoading || loading) return <Spinner />;

	return (
		<WrapperStyles>
			{/* header */}
			<HeaderStyles>
				<h2 onClick={handleHeaderClick}>?????? ?????????</h2>
				{/* btns */}
				<FilterWrapperStyles>
					<select name="month" onChange={handleChange} value={month}>
						<option value="-1" disabled>
							????????????
						</option>
						<option value="0">????????????</option>
						{monthList &&
							monthList.map((month, id) => (
								<option key={`monthKey${month}/${id}`} value={month}>
									{month}???
								</option>
							))}
					</select>
					<select name="weeks" onChange={handleChange} value={weeks}>
						<option value="-1" disabled>
							????????????
						</option>
						<option value="0">????????????</option>
						<option value="4">4???</option>
						<option value="8">8???</option>
					</select>
					<ul>
						<FilterStyles
							id="basicClass"
							is_selected={basicClass}
							onClick={handleFilterBtnClick}
						>
							??????
						</FilterStyles>

						<FilterStyles
							id="advClass"
							is_selected={advClass}
							onClick={handleFilterBtnClick}
						>
							??????
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
							<div>?????? ?????? ??? ????????? ????????????.</div>
						) : filteredList.length === 0 ? (
							<div>?????? ?????? ?????? ?????? ????????? ???????????????.</div>
						) : (
							<CardWrapperStyles>
								{/* <AnimatePresence> */}
								{filteredList.map((item, id) => (
									// <motion.div
									// 	key={item._id}
									// 	initial={{ opacity: 0 }}
									// 	animate={{ opacity: 1 }}
									// 	exit={{ opacity: 0 }}
									// >
									<ClassCard item={item} key={item._id}></ClassCard>
									// </motion.div>
								))}
								{/* </AnimatePresence> */}
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
