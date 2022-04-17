import tw from 'twin.macro';
import { BsArrowRightShort } from 'react-icons/bs';

// conponents
import HeroSection from './HeroSection';
import Button from './shared/Button';

// styles
import { ContainerStyles } from '../styles';
import {
	MainStyles,
	SectionStyles,
	PlatformStyles,
	ClassInfoStyles,
	CardListStyles,
	CardStyles,
	ContentStyles,
	LeftItemStyles,
	RightItemStyles,
} from '../styles/LandingStyles';

import ico_kko from '../assets/icons/ico_partner_kkp.png';
import ico_naver from '../assets/icons/ico_partner_n.png';
import ico_ridi from '../assets/icons/ico_partner_ridi.png';
import img_about from '../assets/st_img_about.png';
import img_tutors from '../assets/st_img_tutors.png';

function Landing() {
	return (
		<MainStyles>
			<ContainerStyles>
				{/* hero */}
				<HeroSection />
			</ContainerStyles>

			<SectionStyles variant="platform">
				<ContainerStyles>
					{/* platform */}
					<PlatformStyles>
						<div>
							<h4>Platform</h4>
							<ul>
								<li>
									<img src={ico_kko} alt="" />
									<h5>kakaopage</h5>
								</li>
								<li>
									<img src={ico_naver} alt="" />
									<h5>Naver Series</h5>
								</li>
								<li>
									<img src={ico_ridi} alt="" />
									<h5>RidiBooks</h5>
								</li>
							</ul>
						</div>
						{/* management */}
						<div>
							<h4>Management</h4>
							<ul>
								<li>ROK Media</li>
								<li>Dream Books</li>
								<li>PaPyrus</li>
								<li>Jplus Media</li>
								<li>RS Media</li>
							</ul>
						</div>
					</PlatformStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles>
				<ContainerStyles>
					{/* class info & links */}
					<ClassInfoStyles>
						<h2>스토리튠즈 아카데미 강의 로드맵</h2>
						{/* card list */}
						<CardListStyles>
							{/* card */}
							<CardStyles variant="basic">
								<div>
									<h3>입문 클래스</h3>
									<h4>온라인 실시간 스트리밍 강의입니다.</h4>
									<p>정해진 커리큘럼으로 진행되는 이론 강의입니다.</p>
									<p>장르구분이 없으며 수강 인원의 제한이 없습니다.</p>
								</div>
								<Button
									navtigate_to="/"
									add_styles={tw`flex justify-start items-center`}
								>
									더 알아보기
									<BsArrowRightShort size={24} />{' '}
								</Button>
								{/* point color */}
								<span></span>
							</CardStyles>
							<CardStyles variant="adv">
								<div>
									<h3>심화 클래스</h3>
									<h4>온라인 실시간 스트리밍 강의입니다.</h4>
									<p>
										커리큘럼과 피드백으로 진행되는 이론 + 피드백 강의입니다.
									</p>
									<p>
										본인이 쓰고자 하는 소설의 장르에 맞는 강사를 선택해야합니다.
									</p>
								</div>
								<Button
									navtigate_to="/"
									add_styles={tw`flex justify-start items-center`}
								>
									더 알아보기
									<BsArrowRightShort size={24} />{' '}
								</Button>
								{/* point color */}
								<span></span>
							</CardStyles>
							<CardStyles variant="debut">
								<div>
									<h3>데뷔 클래스</h3>
									<h4>오프라인 강의입니다.</h4>
									<p>
										스토리튠즈의 본원에서 진행되는 작가 지망생을 위한 소수정예의
										오프라인 강의입니다.
									</p>
								</div>
								<Button
									navtigate_to="/"
									add_styles={tw`flex justify-start items-center`}
								>
									더 알아보기
									<BsArrowRightShort size={24} />{' '}
								</Button>
								{/* point color */}
								<span></span>
							</CardStyles>
							<CardStyles variant="kkp">
								<div>
									<h3>스토리튠즈 특강</h3>
									<h4>온라인 강의입니다.</h4>
									<p>
										입문반과 심화반의 실시간 클래스를 녹화 강의의 형식으로
										구성한 클래스입니다.
									</p>
								</div>
								<Button
									navtigate_to="/"
									add_styles={tw`flex justify-start items-center`}
								>
									더 알아보기
									<BsArrowRightShort size={24} />{' '}
								</Button>
								{/* point color */}
								<span></span>
							</CardStyles>
						</CardListStyles>
					</ClassInfoStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles variant="first_section">
				<ContainerStyles>
					{/* content */}
					<ContentStyles>
						{/* leftitem - text*/}
						<LeftItemStyles>
							<h2>스토리튠즈 - 웹소설 작가의 꿈이 현실이 되는 곳!</h2>
							<p>
								스토리튠즈 아카데미는 나만의 이야기를 상상하고 풀어내길 바라는
								모두에게 열려 있습니다.
							</p>
							<p>
								카카오페이지와 스토리튠즈가 공동으로 기획하여 데뷔까지의 모든
								교육과정을 지원하는 카카오페이지 작가가 되기 위한 가장 빠른
								지름길입니다.
							</p>
							<Button
								navtigate_to="/"
								add_styles={tw`flex justify-start items-center`}
							>
								더 알아보기
								<BsArrowRightShort size={24} />{' '}
							</Button>
						</LeftItemStyles>
						{/* right item - img */}
						<RightItemStyles>
							<img src={img_about} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles>
				<ContainerStyles>
					{/* content */}
					<ContentStyles>
						{/* leftitem - text*/}
						<LeftItemStyles variant="reverse_section">
							<h2>스토리튠즈 - 웹소설 작가의 꿈이 현실이 되는 곳!</h2>
							<p>
								스토리튠즈 아카데미는 나만의 이야기를 상상하고 풀어내길 바라는
								모두에게 열려 있습니다.
							</p>
							<p>
								카카오페이지와 스토리튠즈가 공동으로 기획하여 데뷔까지의 모든
								교육과정을 지원하는 카카오페이지 작가가 되기 위한 가장 빠른
								지름길입니다.
							</p>
							<Button
								navtigate_to="/"
								add_styles={tw`flex justify-start items-center`}
							>
								더 알아보기
								<BsArrowRightShort size={24} />{' '}
							</Button>
						</LeftItemStyles>
						{/* right item - img */}
						<RightItemStyles variant="reverse_section">
							<img src={img_tutors} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>
		</MainStyles>
	);
}

export default Landing;
