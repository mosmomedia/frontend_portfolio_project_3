import { useState } from 'react';

import tw from 'twin.macro';
import Button from '../components/shared/Button';

// assets (imgs)
import logo_kkp from '../assets/logos/logo_kkp.png';
import st_img_hero_384 from '../assets/img_hero/st_img_hero_384.png';
import st_img_hero_682 from '../assets/img_hero/st_img_hero_682.png';
import st_img_hero_901 from '../assets/img_hero/st_img_hero_901.png';
import st_img_hero_1089 from '../assets/img_hero/st_img_hero_1089.png';
import st_img_hero_1259 from '../assets/img_hero/st_img_hero_1259.png';
import st_img_hero_1534 from '../assets/img_hero/st_img_hero_1534.png';

import img_effect_webp from '../assets/img_hero/st_img_hero_effect.webp';

import {
	SectionStyles,
	ImgWrapeprStyles,
	TextWrapper,
	TextStyles,
	LinkBtnStyles,
	LinkUpperStyles,
	LinkLowerStyles,
	HeroStyles,
	EffectStyles,
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
				{/* <LeftItemStyles> */}
				<ImgWrapeprStyles>
					<HeroStyles
						sizes="(min-width: 1024px) 400px, (min-width: 768px) 300px, (max-width: 767px) 100vw"
						srcSet={`
					${st_img_hero_384} 384w,
					${st_img_hero_682} 682w,
					${st_img_hero_901} 901w,
					${st_img_hero_1089} 1089w,
					${st_img_hero_1259} 1259w,
					${st_img_hero_1534} 1534w`}
						src={st_img_hero_384}
						alt="Hero image"
						onLoad={handleLoad}
					/>
					<EffectStyles src={img_effect_webp} alt="hero effect image" />
				</ImgWrapeprStyles>
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
			</SectionStyles>
		</>
	);
}

export default HeroSection;
