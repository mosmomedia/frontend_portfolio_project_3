import { SectionStyles, ContainerStyles } from '../../styles';
import tw from 'twin.macro';
import {
	ContentStyles,
	LeftItemStyles,
	RightItemStyles,
	PlatformStyles,
} from '../../styles/PartnersStyles';

import img_t1 from '../../assets/st_img_partners.png';

function Team() {
	return (
		<>
			<SectionStyles variant="first" add_styles={tw`px-6`}>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<h1>Partners</h1>
							<div>
								<h3>
									저희 스토리튠즈는 웹소설 시장에서 가장 규모가 큰 플랫폼 및
									출판사, 매니지먼트와 업무 제휴를 맺었습니다.
								</h3>
								<br />
								<h3>
									또한 강의와 원고 피드백 이후 수강생들의 의사를 반영하여 업무
									제휴를 맺은 플랫폼 및 매니지먼트와 연계를 제공합니다.
								</h3>
							</div>
							<br />
							<div class="wrapper">
								<div>
									<h2>Platform</h2>
									<p>카카오페이지</p>
									<p>네이버시리즈</p>
									<p>리디북스</p>
								</div>
								<div className="platform">
									<h2>Management</h2>
									<p>ROK Media</p>
									<p>Dream Books</p>
									<p>PaPyrus</p>
									<p>Jplus Media</p>
									<p>RS Media</p>
								</div>
							</div>
						</LeftItemStyles>

						<RightItemStyles>
							<img src={img_t1} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles variant="even" add_styles={tw`px-6`}>
				<ContainerStyles>
					<PlatformStyles>
						<h1>Platform</h1>
						<div>
							<h2>카카오페이지</h2>
							<p>
								카카오페이지는 자타공인 국내 최대의 웹소설 플랫폼으로서 압도적인
								시장 점유율을 자랑합니다. 저희는 업계 1위 플랫폼인
								카카오페이지에 우선적으로 작품 검토를 요청하지만, 수강생 본인이
								원할 경우 타 플랫폼에도 연재할 수 있습니다.
							</p>
						</div>
						<div>
							<h2>네이버시리즈</h2>
							<p>
								네이버 시리즈는 기존의 네이버 북스와 엔스토어를 승계한 회사로서
								이름에서 알 수 있듯이, 한국의 거대 IT 기업인 네이버를 모회사로
								둔 플랫폼입니다. 공격적인 마케팅으로 시장 점유율을 높여나가는
								플랫폼입니다.
							</p>
						</div>
						<div>
							<h2>리디북스</h2>
							<p>
								리디북스는 앞선 두 플랫폼과 달리 단행본을 중심의 마케팅 전략을
								펼치고 있는 플랫폼입니다. 다만, 사업 역량 다각화 전략의 일환으로
								웹소설 부문도 적극적으로 확장하는 추세인 만큼, 연재 시장에서도
								뛰어난 잠재력을 가진 플랫폼이라 할 수 있습니다.
							</p>
						</div>
					</PlatformStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles add_styles={tw`px-6`}>
				<ContainerStyles>
					<PlatformStyles>
						<h1 class="">Management</h1>
						<div>
							<h2>ROK Media</h2>
							<p>
								(주)로크미디어는 <strong>달빛조각사</strong>,
								<strong>테이밍마스터</strong>, <strong>아크</strong>,
								<strong>이것이 법이다</strong> 등. 수많은 인기 작품을 출간한
								메이저 출판사이며, 오랜 시간 한국의 장르문학 시장을 이끌어온
								대표적인 출판사입니다.
							</p>
						</div>
						<div>
							<h2>Dream Books</h2>
							<p>
								도서출판 드림북스는 <strong>마검왕</strong>,
								<strong>정령왕 엘퀴네스</strong>, <strong>아크</strong>,
								<strong>흡혈왕 바하문트</strong>,
								<strong>두 번 사는 랭커</strong> 등 수많은 인기 작품을 출간한
								메이저 출판사로서 카카오페이지의 자회사라는 특장점이 있습니다.
							</p>
						</div>
						<div>
							<h2>PaPyrus</h2>
							<p>
								(주)디앤씨미디어는 <strong>나 혼자만 레벨업</strong>,
								<strong>소드마스터로 회귀</strong>,
								<strong>레벨업 하기 싫은 천마님</strong> 등 수많은 인기 작품을
								출간한 메이저 출판사입니다. 또한 개별 장르에 따라 신규 및 우수
								콘텐츠를 발굴할 수 있는 시스템을 구축하고 있는, 경쟁력 있는
								기업입니다.
							</p>
						</div>
						<div>
							<h2>Jplus Media</h2>
							<p>
								(주)제이플러스미디어는 <strong>나는 군주다</strong>,
								<strong>튜토리얼이 너무 어렵다</strong> 등 많은 인기 작품을 출간
								중인 매니지먼트로, 최신 트렌드에 빠르게 발맞출 수 있는 트렌디한
								매니지먼트입니다.
							</p>
						</div>

						<div>
							<h2>RS Media</h2>
							<p>
								(주)알에스미디어는 <strong>백룡공작 팬드래건</strong>,
								<strong>패왕의 별</strong> <strong>스펙테이터</strong> 등 많은
								인기 작품을 출간 중인 매니지먼트로 NC 소프트에서 투자를 받아
								『스낵북』이라는 연재 플랫폼을 운영하는 대형 매니지먼트이기도
								합니다.
							</p>
						</div>
					</PlatformStyles>
				</ContainerStyles>
			</SectionStyles>
		</>
	);
}

export default Team;
