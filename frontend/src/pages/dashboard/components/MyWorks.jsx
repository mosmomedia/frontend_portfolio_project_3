import { useState, useEffect, useRef } from 'react';

import { useNavigate } from 'react-router-dom';
import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';

import MyWorkCard from './MyWorkCard';
import Spinner from '../../../components/shared/Spinner';

import {
	SectionStyles,
	MainStyles,
	SectionWrapperStyles,
	CardWrapperStyles,
} from '../styles/MyWorksStyles';

import {
	BarIndicatorStyles,
	BarContainerStyles,
	BarStyles,
} from '../../../styles/RegistrationStyles';

function MyWorks() {
	const initHeight = useRef();
	const [widthInput, setWidthInput] = useState(-1);

	const { isLoading, myWorkList } = useMyWorkContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (myWorkList.length > 0) {
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
		} else {
			navigate('/dashboard/my-board/');
		}
	}, [navigate, myWorkList]);

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

	if (isLoading || myWorkList.length === 0) return <Spinner />;

	return (
		<SectionStyles>
			{/*main */}
			<MainStyles>
				<SectionWrapperStyles ref={initHeight} onScroll={handleScroll}>
					<CardWrapperStyles>
						{myWorkList.map((item) => (
							<MyWorkCard key={item._id} item={item} />
						))}
					</CardWrapperStyles>
				</SectionWrapperStyles>
				<BarIndicatorStyles>
					<BarContainerStyles>
						<BarStyles widthInput={widthInput} />
					</BarContainerStyles>
				</BarIndicatorStyles>
			</MainStyles>
		</SectionStyles>
	);
}

export default MyWorks;
