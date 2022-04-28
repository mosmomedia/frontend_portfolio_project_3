import tw from 'twin.macro';
import 'twin.macro';
import 'styled-components/macro';

import useWD from '../../hooks/useWindowDimensions';

import { MainStyles, SectionStyles, ContainerStyles } from '../../styles';
import {
	ContentStyles,
	LeftItemStyles,
	RightItemStyles,
	SupportStyles,
} from '../../styles/ScholarshipStyles';

function Scholarship() {
	const { height } = useWD();
	const footerHeight = 376;
	const calHeight = height - footerHeight;

	return (
		<MainStyles>
			<SectionStyles
				variant="first"
				variant2={calHeight}
				add_styles={tw`px-8 md:px-6`}
			>
				<ContainerStyles>
					{/* left - support   */}
					<ContentStyles>
						<LeftItemStyles>
							<h1>Application</h1>
							<h2>웹 소설 작가가 되기 위한 첫 걸음!</h2>
							<h2>스토리튠즈에게 당신의 재능을 보여주세요.</h2>

							<SupportStyles>
								{/* info */}
								<h3>고객센터</h3>
								<h2>02. 2039 9377</h2>
								<p>
									<strong>E-mail</strong> / official@storytunes.net
								</p>
							</SupportStyles>
						</LeftItemStyles>

						{/* right - faq */}
						<RightItemStyles>
							<h2>장학생 신청 및 작품 투고 안내</h2>
							<h3>
								<span tw="text-keyColor">*</span>이메일 접수
							</h3>
							<p>
								제목: 스토리튠즈&#91;장학생 신청&#93; or 스토리튠즈&#91;작품
								투고&#93;
							</p>
							<p>분량: 30,000 ~ 50,000자</p>
							<p>내용: 작품 제목 / 필명 or 작가 이름 / 장르 / 연락처</p>
							<div>
								<p>
									첨부 파일 &#40;HWP&#41;: &#91;신청 목적&#93;&#95;작가명.hwp
								</p>
								<p>예시1&#41; &#91;장학생 신청&#93;&#95;김스튠.hwp</p>
								<p>예시2&#41; &#91;작품 투고&#93;&#95;김스튠.hwp</p>
							</div>
							<h4>kakaoxst@storytunes.net</h4>
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>
		</MainStyles>
	);
}

export default Scholarship;
