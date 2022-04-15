import { useState } from 'react';

import tw, { styled } from 'twin.macro';
import 'twin.macro';
import 'styled-components/macro';

// hooks
import useWD from '../hooks/useWindowDimensions';

// styles
import { ContainerStyles } from '../styles';

// assets (imgs)
import logo_kkp from '../assets/logos/logo_kkp.png';
import img_hero from '../assets/st_img_hero.png';
import img_effect from '../assets/st_img_hero_effect.png';

const MainStyles = styled.main`
	${tw``}
`;

const SectionStyles = styled.div`
	${tw``}
	${({ variant }) => variant === 'hero' && tw`h-screen`}
`;

const LeftItemStyles = styled.div`
	${tw`h-full bg-st_bg2 `}
	background-image: url(${img_hero});
	background-position: bottom -8rem center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-size: cover;
	${tw`grid grid-cols-1 grid-rows-5`}
`;

const TextWrapper = styled.div`
	${tw`row-start-4`}
`;
const TextStyles = styled.div`
	${tw``}
`;
const LinkBtnStyles = styled.div`
	${tw``}
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
									<p>
										{' '}
										<span>웹</span> <span>소</span>
										<span>설</span> <span>작</span>
										<span>가</span>를 꿈꿔온 당신을 위한
									</p>
									{/* big header */}
									<p>
										스토리튠즈 온라인 <span>실시간</span> 강의
									</p>
								</div>
								{/* text content */}
								<div>
									{/* web */}
									{isMobile ? (
										<p>
											스토리튠즈는 한국 최초의 웹 소설 전문 아카데미입니다.
											<br /> 현역 최상위 작가진을 실시간 강의를 통해 만나보세요.
										</p>
									) : (
										<p>
											스토리튠즈는 한국 최초의 웹 소설 전문 아카데미입니다.{' '}
											<br />
											현역에서 일하는 최상위 작가진이 설립한 회사로, 어느
											곳에서도 찾을 수 없는 많은 작가 양성 경험과 전문성을
											가지고 있습니다. 작가를 꿈꾸시는 분, 글쓰기를 좋아하시는
											분, 배워보고 싶었던 분 모두 환영합니다.
										</p>
									)}
								</div>
							</TextStyles>
							{/* link_button */}
							<LinkBtnStyles>
								{/* upper btn */}
								<div>
									<a href="">강의 신청하기</a>
									<a href="">대표 강사진 보기</a>
								</div>
								{/* lower btn */}
								<a href="">
									Collaboration with{' '}
									<span>
										<img src={logo_kkp} alt="logo kakao page" />{' '}
									</span>{' '}
								</a>
							</LinkBtnStyles>
						</TextWrapper>
					</LeftItemStyles>
					{/* RightItem / img wrapper*/}
					{!isMobile && (
						<div>
							{/* img */}
							<img src={img_hero} alt="landing hero" />
							{/* img effect */}
							{!isMobile && <img src={img_effect} alt="landing effect" />}
							{/* bg overlay for mobile */}
							{isMobile && <div></div>}
						</div>
					)}
				</SectionStyles>
				<div tw="absolute bottom-1 left-2 text-sm text-blue-500  ">{width}</div>
			</ContainerStyles>
		</MainStyles>
	);
}

export default Landing;
