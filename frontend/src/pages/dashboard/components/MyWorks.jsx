import { useState, useRef, useEffect } from 'react';

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

	const { myWorkList } = useMyWorkContext();

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
				<>
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
				</>
			</MainStyles>
		</SectionStyles>
	);
}

export default MyWorks;
