import { useState } from 'react';

import tw from 'twin.macro';
import Button from '../components/shared/Button';

// assets (imgs)
import logo_kkp from '../assets/logos/logo_kkp.png';
import img_hero_webp from '../assets/st_img_hero.webp';
import img_effect_webp from '../assets/st_img_hero_effect.webp';

import {
	SectionStyles,
	LeftItemStyles,
	RightItemStyles,
	TextWrapper,
	TextStyles,
	LinkBtnStyles,
	LinkUpperStyles,
	LinkLowerStyles,
	HeroStyles,
	EffectStyles,
	MobileImgStyles,
} from '../styles/HeroSectionStyles';

import Spinner from './shared/Spinner';

function HeroSection() {
	const [loading, setLoading] = useState(true);
	const handleLoad = () => {
		setLoading(false);
	};
	return (
		<>
			{loading && <Spinner />}
			<SectionStyles>
				{/*LeftItem /  submit wrapper */}
				<LeftItemStyles>
					<MobileImgStyles>
						<img src={img_hero_webp} alt="" onLoad={handleLoad} />
					</MobileImgStyles>
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
								<p>스토리튠즈는 한국 최초의 웹 소설 전문 아카데미입니다.</p>
								<p className="mobile">
									현역 최상위 작가진을 실시간 강의를 통해 만나보세요.
								</p>
								<p className="web">
									현역에서 일하는 최상위 작가진이 설립한 회사로, 어느 곳에서도
									찾을 수 없는 많은 작가 양성 경험과 전문성을 가지고 있습니다.
									작가를 꿈꾸시는 분, 글쓰기를 좋아하시는 분, 배워보고 싶었던 분
									모두 환영합니다.
								</p>
							</div>
						</TextStyles>
						{/* link_button */}
						<LinkBtnStyles>
							{/* upper btn */}
							<LinkUpperStyles>
								<Button
									variant="primary"
									navtigate_to="/class-registration/roadmap"
								>
									강의 신청하기
								</Button>
								<Button variant="secondary" navtigate_to="/company/team">
									대표 강사진 보기
								</Button>
							</LinkUpperStyles>
							{/* lower btn */}
							<LinkLowerStyles>
								<Button
									navtigate_to="/"
									add_styles={tw`bg-st_alt1 text-white sm:hover:opacity-100`}
								>
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

				<RightItemStyles>
					{/* img */}
					<HeroStyles src={img_hero_webp} alt="landing hero" />
					{/* img effect */}
					<EffectStyles
						src={img_effect_webp}
						alt="landing effect"
						data-aos="zoom-in-up"
						data-aos-easing="ease-in-out"
						data-aos-delay="3"
						data-aos-duration="2200"
						data-aos-offset="0"
					/>
				</RightItemStyles>
			</SectionStyles>
		</>
	);
}

export default HeroSection;
