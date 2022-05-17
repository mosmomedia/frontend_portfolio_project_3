import { useState, useRef, useEffect } from 'react';
import { useMyClassContext } from '../../../contexts/myClassRoom/MyClassContext';

import MyClassCard from './MyClassCard';

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

	const { myClassList } = useMyClassContext();

	useEffect(() => {
		if (myClassList.length > 0) {
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
	}, [myClassList]);

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
			{/* header */}
			<HeaderStyles>
				<h2>현재 수강 중인 강의 목록</h2>
			</HeaderStyles>
			{/*main */}
			<MainStyles>
				<>
					<SectionWrapperStyles ref={initHeight} onScroll={handleScroll}>
						<CardWrapperStyles>
							{myClassList.map((item) => (
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
