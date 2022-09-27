import { useEffect } from 'react';

import tw from 'twin.macro';
import { BsArrowRightShort } from '@react-icons/all-files/bs/BsArrowRightShort';

import AOS from 'aos';
import 'aos/dist/aos.css';

// conponents
import HeroSection from './HeroSection';
import Button from './shared/Button';

// styles
import { MainStyles, ContainerStyles } from '../styles';
import {
	SectionStyles,
	PlatformStyles,
	ClassInfoStyles,
	CardListStyles,
	CardStyles,
	ContentStyles,
	LeftItemStyles,
	RightItemStyles,
} from '../styles/LandingStyles';

import ico_kkp from '../assets/icons/ico_partner_kkp.png';
import ico_naver from '../assets/icons/ico_partner_n.png';
import ico_ridi from '../assets/icons/ico_partner_ridi.png';
import img_about from '../assets/st_img_about.webp';
import img_tutors from '../assets/st_img_tutors.webp';

function Landing() {
	useEffect(() => {
		AOS.init();
	}, []);

	const addClassBtnStyles = tw`flex justify-start items-center hover:text-keyColor hover:opacity-80`;

	const addCompanyBtnStyles = tw`flex justify-start items-center hover:text-st_alt1 hover:opacity-80`;

	return (
		<MainStyles variant="landing">
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
									<img src={ico_kkp} alt="" />
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
							<CardStyles
								variant="basic"
								data-aos="fade-up"
								data-aos-delay="50"
								data-aos-duration="550"
								data-aos-once="true"
							>
								<div>
									<h3>입문 클래스</h3>
									<h4>온라인 실시간 스트리밍 강의입니다.</h4>
									<p>정해진 커리큘럼으로 진행되는 이론 강의입니다.</p>
									<p>장르구분이 없으며 수강 인원의 제한이 없습니다.</p>
								</div>
								<Button
									navtigate_to="/class-registration/roadmap"
									add_styles={addClassBtnStyles}
								>
									더 알아보기
									<BsArrowRightShort size={24} />{' '}
								</Button>
								{/* point color */}
								<span></span>
							</CardStyles>
							<CardStyles
								variant="adv"
								data-aos="fade-up"
								data-aos-delay="150"
								data-aos-duration="550"
								data-aos-once="true"
							>
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
									navtigate_to="/class-registration/roadmap"
									add_styles={addClassBtnStyles}
								>
									더 알아보기
									<BsArrowRightShort size={24} />{' '}
								</Button>
								{/* point color */}
								<span></span>
							</CardStyles>
							<CardStyles
								variant="pd"
								data-aos="fade-up"
								data-aos-delay="250"
								data-aos-duration="550"
								data-aos-once="true"
							>
								<div>
									<h3>PD 클래스</h3>
									<h4>온라인 실시간 스트리밍 강의입니다.</h4>
									<p>
										커리큘럼과 피드백으로 진행되는 이론 + 피드백 강의입니다.
									</p>
									<p>직무 수행 능력을 기르는 실전형 강의입니다.</p>
								</div>
								<Button
									navtigate_to="/class-registration/roadmap"
									add_styles={addClassBtnStyles}
								>
									더 알아보기
									<BsArrowRightShort size={24} />{' '}
								</Button>
								{/* point color */}
								<span></span>
							</CardStyles>
							<CardStyles
								variant="debut"
								data-aos="fade-up"
								data-aos-delay="350"
								data-aos-duration="550"
								data-aos-once="true"
							>
								<div>
									<h3>데뷔 클래스</h3>
									<h4>오프라인 강의입니다.</h4>
									<p>
										스토리튠즈의 본원에서 진행되는 작가 지망생을 위한 소수정예의
										오프라인 강의입니다.
									</p>
								</div>
								<Button
									navtigate_to="/class-registration/roadmap"
									add_styles={addClassBtnStyles}
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
						<LeftItemStyles
							data-aos="fade-up"
							data-aos-delay="150"
							data-aos-duration="600"
							data-aos-easing="ease-out"
							data-aos-once="true"
						>
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
								navtigate_to="/company/about"
								add_styles={addCompanyBtnStyles}
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
						<LeftItemStyles
							variant="reverse_section"
							data-aos="fade-up"
							data-aos-delay="100"
							data-aos-duration="600"
							data-aos-easing="ease-out"
							data-aos-once="true"
						>
							<h2>스토리튠즈의 대표 강사진</h2>

							<p>
								내가 꿈꾼 배경 속에서 자유롭게 움직이는 나를 보면서, 타오르는
								갈증을 느낍니다.
							</p>
							<p>
								하지만 막상 이야기를 풀어나가려고 하면 어딘지 막막한 기분입니다.
							</p>

							<p>
								소재, 연출, 캐릭터, 복선, 시놉시스 등 뛰어난 강사진이 다년간
								현장에서 ‘글 밥’을 먹으며 터득하고 연구했던 모든 노하우들을
								가르쳐드립니다.
							</p>
							<Button
								navtigate_to="/company/team"
								add_styles={addCompanyBtnStyles}
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
