import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth/AuthContext';
import tw from 'twin.macro';

// hook
import useWindowDimensions from '../hooks/useWindowDimensions';

import Logo_black from '../assets/logos/logo.svg';
import Logo_white from '../assets/logos/logo_on.svg';
import Button from './shared/Button';

import {
	HeaderStyles,
	NavStyles,
	HamburgerStyles,
	LogoStyles,
	ImgStyles,
	MenuStyles,
	ListGnbStyles,
	TitleStyles,
	LinkGnbStyles,
	ItemStyles,
} from '../styles/HeaderStyles';

function Header() {
	const [hamburgerOn, setHamburgerOn] = useState(false);
	const [hoverOn, setHoverOn] = useState(false);
	const { width } = useWindowDimensions();
	const { pathname } = useLocation();
	const userState = useAuthContext();

	// exclude header in specific components
	if (
		pathname === '/sign-in' ||
		pathname === '/sign-up' ||
		pathname === '/forgot-password'
	)
		return null;

	return (
		<HeaderStyles is_hover_on={hoverOn}>
			{/* Navbar */}
			<NavStyles is_hover_on={hoverOn}>
				{/* hamburger Icon */}
				<HamburgerStyles
					is_hamburger_on={hamburgerOn}
					onClick={() => setHamburgerOn(!hamburgerOn)}
				>
					<div className="top"></div>
					<div className="middle"></div>
					<div className="bottom"></div>
				</HamburgerStyles>
				{/* Flex container */}
				{/* logo */}
				<LogoStyles>
					<Link to="/" onClick={() => setHamburgerOn(false)}>
						{hoverOn ? (
							<ImgStyles src={Logo_white} alt="logo" />
						) : (
							<>
								<ImgStyles variant="mobile" src={Logo_white} alt="logo" />
								<ImgStyles
									variant="web"
									is_hover_on={hoverOn}
									src={Logo_black}
									alt="logo"
								/>
							</>
						)}
					</Link>
				</LogoStyles>
				{/* menu items */}
				<MenuStyles
					is_hamburger_on={hamburgerOn}
					is_hover_on={hoverOn}
					onMouseEnter={() => setHoverOn(true)}
					onMouseLeave={() => setHoverOn(false)}
				>
					<ListGnbStyles>
						{/* path */}
						<TitleStyles>
							<Link to="/" className="title">
								수강신청
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/">강의 로드맵</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/">실시간 클래스</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/">데뷔 클래스</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/">스토리튠즈 특강</Link>
							</ItemStyles>
						</LinkGnbStyles>
					</ListGnbStyles>

					<ListGnbStyles>
						{/* path */}
						<TitleStyles>
							<Link to="/" className="title">
								데뷔 로드맵
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/">데뷔 히스토리</Link>
							</ItemStyles>
							<ItemStyles variant="web">
								<Link to="/">
									장학생 신청 및 <br /> 작품 투고
								</Link>
							</ItemStyles>
							<ItemStyles variant="mobile">
								<Link to="/">장학생 신청 및 작품 투고</Link>
							</ItemStyles>
						</LinkGnbStyles>
					</ListGnbStyles>

					<ListGnbStyles>
						{/* path */}
						<TitleStyles>
							<Link to="/" className="title">
								회사소개
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/">본원소개</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/">대표 강사진</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/">제휴업체</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/">오시는 길</Link>
							</ItemStyles>
						</LinkGnbStyles>
					</ListGnbStyles>

					<ListGnbStyles>
						{/* path */}
						<TitleStyles>
							<Link to="/" className="title">
								고객지원
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/">자주하는 질문</Link>
							</ItemStyles>
						</LinkGnbStyles>
					</ListGnbStyles>
				</MenuStyles>
				{/* button */}
				{/*logout  */}
				{/* my dashboard */}
				{userState ? null : width >= 1024 ? (
					<div>
						<Link to="/sign-in">
							<Button
								add_styles={tw`lg:mt-[1.125rem] lg:text-[0.9375rem] lg:hover:text-keyColor  `}
							>
								로그인
							</Button>
						</Link>
						<Link to="/sign-up">
							<Button
								variant="primary"
								add_styles={tw`lg:text-[0.9375rem] lg:px-8`}
							>
								회원가입
							</Button>
						</Link>
					</div>
				) : (
					<Link to="/sign-in">
						<Button variant="primary" add_styles={tw`text-[0.9375rem]`}>
							로그인
						</Button>
					</Link>
				)}
			</NavStyles>
		</HeaderStyles>
	);
}

export default Header;
