import tw, { styled } from 'twin.macro';
import 'twin.macro';
import 'styled-components/macro';

// hooks
import useWD from '../hooks/useWindowDimensions';

// styles
import { ContainerStyles } from '../styles';
import Button from '../components/shared/Button';

// assets (imgs)
import logo_kkp from '../assets/logos/logo_kkp.png';
import img_hero from '../assets/st_img_hero.png';
import img_effect from '../assets/st_img_hero_effect.png';

const MainStyles = styled.main`
	${tw``}
`;

const SectionStyles = styled.div`
	${tw``}
	${({ variant }) => variant === 'hero' && tw`xl:h-screen`}
`;

const LeftItemStyles = styled.div`
	${tw`relative h-full bg-[#ffe0e0] z-[-20]`}
	${tw`pt-[28rem] pb-10 sm:pt-[36rem] sm:pb-16 xl:pt-0 xl:pb-0 xl:grid xl:grid-cols-1`}
	/* ${tw`pt-[20rem] pb-10 xl:pt-0 xl:pb-0 xl:grid xl:grid-cols-1`} */
	
	background-image: url(${img_hero});
	background-repeat: no-repeat;
	background-size: 100% auto;
	background-position: bottom -2rem center;

	/* @media (min-width: 640px) {
		grid-template-rows: repeat(10, minmax(0, 1fr));
		background-attachment: fixed;
		background-position: bottom 0rem center;
	} */

	/* @media (min-width: 700px) and (max-width: 767px) {
		background-position: bottom -5rem center;
	} */
`;

const TextWrapper = styled.div`
	${tw`xl:row-start-[7] z-0 space-y-10 `}
	/* ${tw`xl:row-start-[7] z-0 space-y-10 `} */

	${tw`before:content before:absolute before:inset-0  before:w-full before:h-full before:z-[-10] before:bg-black/[50%]`}
`;
const TextStyles = styled.div`
	${tw`text-center space-y-12 text-white tracking-wide`}

	h1,h2,h4 {
		font-family: 'Paybooc_M';
		font-weight: 600;
	}
	h2 {
		${tw`text-xl sm:text-[1.75rem ] mb-1 sm:mb-2`}
	}

	h1 {
		${tw`text-4xl sm:text-[2.5rem]`}
	}

	h4 {
		${tw`text-lg sm:text-xl my-3`}
	}
`;
const LinkBtnStyles = styled.div`
	${tw`w-2/3 mx-auto space-y-3 text-lg sm:text-xl`}
`;

const LinkUpperStyles = styled.div`
	${tw`flex justify-between`}

	button {
		${tw`w-[49%] py-2`}
	}
`;

const LinkLowerStyles = styled.div`
	button {
		${tw`flex items-center justify-center w-full space-x-5 py-3 sm:tracking-widest `}
	}

	img {
		${tw`h-6 sm:h-7`}
	}
`;

function Landing() {
	const { width, isMobile } = useWD(768);

	return (
		<MainStyles>
			<ContainerStyles>
				{/* hero */}
				<SectionStyles variant="hero">
					{/*LeftItem /  submit wrapper */}
					<LeftItemStyles>
						<TextWrapper>
							{/* st_text */}
							<TextStyles>
								{/* test header  */}
								<div>
									{/* small header */}
									<h2>
										{' '}
										<span>웹</span> <span>소</span>
										<span>설</span> <span>작</span>
										<span>가</span>를 꿈꿔온 당신을 위한
									</h2>
									{/* big header */}
									<h1>
										스토리튠즈 온라인 <span>실시간</span> 강의
									</h1>
								</div>
								{/* text content */}
								<div>
									{/* web */}
									{isMobile ? (
										<>
											<h4>
												스토리튠즈는 한국 최초의 웹 소설 전문 아카데미입니다.
											</h4>
											<h4>
												현역 최상위 작가진을 실시간 강의를 통해 만나보세요.
											</h4>
										</>
									) : (
										<>
											<h4>
												스토리튠즈는 한국 최초의 웹 소설 전문 아카데미입니다.{' '}
											</h4>
											<h4>
												현역에서 일하는 최상위 작가진이 설립한 회사로, 어느
												곳에서도 찾을 수 없는 많은 작가 양성 경험과 전문성을
												가지고 있습니다. 작가를 꿈꾸시는 분, 글쓰기를 좋아하시는
												분, 배워보고 싶었던 분 모두 환영합니다.
											</h4>
										</>
									)}
								</div>
							</TextStyles>
							{/* link_button */}
							<LinkBtnStyles>
								{/* upper btn */}
								<LinkUpperStyles>
									<Button variant="primary" navtigate_to="/classes">
										강의 신청하기
									</Button>
									<Button variant="secondary" navtigate_to="/tutors">
										대표 강사진 보기
									</Button>
								</LinkUpperStyles>
								{/* lower btn */}
								<LinkLowerStyles>
									<Button add_styles={tw`bg-mobile_alt1 text-white`}>
										<div>Collaboration with </div>
										<span>
											<img src={logo_kkp} alt="logo kakao page" />{' '}
										</span>{' '}
									</Button>
								</LinkLowerStyles>
							</LinkBtnStyles>
						</TextWrapper>
					</LeftItemStyles>
					{/* RightItem / img wrapper*/}
					{!isMobile && (
						<div>
							{/* img */}
							<img src={img_hero} alt="landing hero" />
							{/* img effect */}
							<img src={img_effect} alt="landing effect" />
							{/* bg overlay for mobile */}
						</div>
					)}
				</SectionStyles>
				<div tw="absolute bottom-1 left-2 text-sm text-black  ">{width}</div>
			</ContainerStyles>
		</MainStyles>
	);
}

export default Landing;
