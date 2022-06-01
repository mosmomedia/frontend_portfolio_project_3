import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMyClassContext } from '../../../contexts/myClassRoom/MyClassContext';

import MyClassCard from './MyClassCard';
import Spinner from '../../../components/shared/Spinner';

import {
	SectionStyles,
	HeaderStyles,
	MainStyles,
	SectionWrapperStyles,
	CardWrapperStyles,
} from '../styles/StreamStyles';

import {
	BarIndicatorStyles,
	BarContainerStyles,
	BarStyles,
} from '../../../styles/RegistrationStyles';

function Stream() {
	const initHeight = useRef();
	const [widthInput, setWidthInput] = useState(-1);
	const [myCurrentList, setMyCurrentList] = useState([]);

	const { isLoading, dispatch, myClassList } = useMyClassContext();

	const navigate = useNavigate();

	useEffect(() => {
		dispatch({ type: 'LOADING' });
		const filteredList = [];
		if (myClassList.length > 0) {
			myClassList.forEach(({ myClass }) => {
				if (!myClass.isCompleted) {
					if (myClass.isOnAir) {
						filteredList.unshift(myClass);
					} else {
						filteredList.push(myClass);
					}
				}
			});
		}
		dispatch({ type: 'OFF_LOADING' });
		if (filteredList.length === 0) {
			navigate('/dashboard/my-classroom');
		} else {
			setMyCurrentList(filteredList);
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (myCurrentList.length > 0) {
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
	}, [myCurrentList.length]);

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

	if (isLoading) return <Spinner />;

	return (
		<SectionStyles>
			{/* header */}
			<HeaderStyles>
				<h2>현재 수강 중인 강의 목록</h2>
			</HeaderStyles>
			{/*main */}
			<MainStyles>
				<>
					<SectionWrapperStyles ref={initHeight} onScroll={handleScroll}>
						<CardWrapperStyles>
							{myCurrentList.map((item) => (
								<MyClassCard key={item._id} item={item} />
							))}
						</CardWrapperStyles>
					</SectionWrapperStyles>
					<BarIndicatorStyles>
						<BarContainerStyles>
							<BarStyles widthInput={widthInput} />
						</BarContainerStyles>
					</BarIndicatorStyles>
				</>
			</MainStyles>
		</SectionStyles>
	);
}

export default Stream;
