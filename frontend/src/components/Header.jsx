import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth/AuthContext';
import tw from 'twin.macro';

import Logo_black from '../assets/logos/logo.svg';
import Logo_white from '../assets/logos/logo_on.svg';
import Button from './shared/Button';

import { FaChalkboardTeacher } from 'react-icons/fa';

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
	ButtonStyles,
} from '../styles/HeaderStyles';

function Header() {
	const [hamburgerOn, setHamburgerOn] = useState(false);
	const [hoverOn, setHoverOn] = useState(false);
	const { pathname } = useLocation();
	const userState = useAuthContext();

	// exclude header in specific components
	if (
		pathname === '/sign-in' ||
		pathname === '/sign-up' ||
		pathname === '/forgot-password' ||
		pathname === '/dashboard'
	)
		return null;

	const handleClick = () => {
		setHoverOn(false);
		setHamburgerOn(false);
	};

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
							<Link to="/about" className="title" onClick={handleClick}>
								회사소개
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/about" onClick={handleClick}>
									본원소개
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/team" onClick={handleClick}>
									대표 강사진
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/partners" onClick={handleClick}>
									제휴업체
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/loaction" onClick={handleClick}>
									오시는 길
								</Link>
							</ItemStyles>
						</LinkGnbStyles>
					</ListGnbStyles>

					<ListGnbStyles>
						{/* path */}
						<TitleStyles>
							<Link to="/faq" className="title" onClick={handleClick}>
								고객지원
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/faq" onClick={handleClick}>
									자주하는 질문
								</Link>
							</ItemStyles>
						</LinkGnbStyles>
					</ListGnbStyles>
				</MenuStyles>
				{/* button */}
				{/*logout  */}
				{/* my dashboard */}
				<ButtonStyles>
					{userState ? (
						<>
							<div className="web">
								<Button navtigate_to="/dashboard" variant="dashboard">
									내 강의실
									<FaChalkboardTeacher size={'1.5625rem'} />
								</Button>
							</div>
							<Link className="mobile" to="/dashboard">
								<FaChalkboardTeacher size={'1.5625rem'} />
							</Link>
						</>
					) : (
						<>
							<div className="web">
								<Button
									navtigate_to="/sign-in"
									add_styles={tw`xl:mt-[1.125rem] xl:text-[0.9375rem] xl:hover:text-keyColor  `}
								>
									로그인
								</Button>
								<Button
									navtigate_to="/sign-up"
									variant="primary"
									add_styles={tw`lg:text-[0.9375rem] lg:px-8`}
								>
									회원가입
								</Button>
							</div>
							<div className="mobile">
								<Button
									navtigate_to="/sign-in"
									variant="primary"
									add_styles={tw`lg:mt-[1.125rem] text-[0.9375rem]`}
								>
									로그인
								</Button>
							</div>
						</>
					)}
				</ButtonStyles>
			</NavStyles>
		</HeaderStyles>
	);
}

export default Header;
