import { useState, useEffect, useRef } from 'react';

import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';

import MyWorkCard from './MyWorkCard';

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

	useEffect(() => {
		if (!isLoading && myWorkList.length > 0) {
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
	}, [isLoading, myWorkList]);

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

	return (
		<SectionStyles>
			{/*main */}
			<MainStyles>
				<SectionWrapperStyles ref={initHeight} onScroll={handleScroll}>
					<CardWrapperStyles>
						{myWorkList.length > 0 &&
							myWorkList.map((item) => (
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
