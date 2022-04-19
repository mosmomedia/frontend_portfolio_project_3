import tw from 'twin.macro';
import Map from '../../components/Map';

import useWD from '../../hooks/useWindowDimensions';

import { MainStyles, SectionStyles, ContainerStyles } from '../../styles';
import {
	ContentStyles,
	LeftItemStyles,
	RightItemStyles,
} from '../../styles/LocationStyles';

function Location() {
	// eslint-disable-next-line
	const { width, height } = useWD();
	const footerHeight = 376;
	const calHeight = height - footerHeight;

	return (
		<MainStyles>
			<SectionStyles
				variant="first"
				variant2={calHeight}
				add_styles={tw`px-8 space-y-8 md:px-6 xl:pl-4 xl:pr-2 `}
			>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<h1>Location</h1>
							<h2>주소 및 연락처</h2>
							<br />
							<p>
								<b>주소:</b> 서울시 성동구 성수일로 99 AK밸리 1418호 스토리튠즈
							</p>
							<p>
								<b>전화:</b> 02. 2039 9377
							</p>
							<p>
								<b>이메일:</b> official@storytunes.net
							</p>
							<br />
							<div>
								<h3>오시는 방법</h3>
								<br />
								<p>
									<b>지하철:</b> 2호선 뚝섬역 3,4번 출구 도보 6분 거리
								</p>
							</div>
						</LeftItemStyles>
						<RightItemStyles>
							<Map />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>
		</MainStyles>
	);
}

export default Location;
