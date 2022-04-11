import { useState } from 'react';
import { Link } from 'react-router-dom';

import tw, { styled } from 'twin.macro';
import Logo_black from '../assets/logos/logo.svg';
import Logo_white from '../assets/logos/logo_on.svg';

import Button from './shared/Button';

const HeaderStyles = styled.header`
	${tw`fixed w-full h-[4.5rem]`}
`;

const NavStyles = styled.nav`
	${tw` bg-[#343540] text-white flex justify-between items-center mx-auto h-full  px-6`}
`;

const HamburgerStyles = styled.button`
	${tw`md:hidden space-y-1`}

	div {
		${tw`w-6 h-0.5 bg-white rotate-0 transition-all`}
	}

	.top {
		${({ is_hamburger_on }) => is_hamburger_on && tw`rotate-45 translate-y-1`}
	}

	.middle {
		${({ is_hamburger_on }) => is_hamburger_on && tw`invisible`}
	}

	.bottom {
		${({ is_hamburger_on }) => is_hamburger_on && tw`-rotate-45 -translate-y-2`}
	}
`;

const LogoStyles = styled.div`
	${tw`h-12`}
`;

const ImgStyles = styled.img`
	${tw`h-full`}
`;

const MenuStyles = styled.div`
	${tw`absolute z-[-100] top-[4.5rem] py-3 left-0  w-full h-screen bg-[#343540] translate-y-[-115%] duration-300 ease-out space-y-14 tracking-widest  md:block`}

	${({ is_hamburger_on }) => is_hamburger_on && tw`translate-y-0`}
`;

const ListGnbStyles = styled.ul`
	> :first-child {
		${tw`inline-block py-3 px-6 text-[0.9375rem]`}
	}
`;

const LinkGnbStyles = styled.ul`
	${tw`flex px-6  flex-wrap`}

	> li {
		${tw`py-1.5 pr-10 text-[#ffe0e0e7]`}
	}
`;

function Header() {
	const [hamburgerOn, setHamburgerOn] = useState(false);
	return (
		<HeaderStyles>
			{/* Navbar */}
			<NavStyles>
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
						<ImgStyles src={Logo_white} alt="logo" />
					</Link>
				</LogoStyles>
				{/* menu items */}
				<MenuStyles is_hamburger_on={hamburgerOn}>
					<ListGnbStyles>
						{/* path */}
						<Link to="/">수강신청</Link>
						<LinkGnbStyles>
							<li>
								<Link to="/">강의 로드맵</Link>
							</li>
							<li>
								<Link to="/">실시간 클래스</Link>
							</li>
							<li>
								<Link to="/">데뷔 클래스</Link>
							</li>
							<li>
								<Link to="/">스토리튠즈 특강</Link>
							</li>
						</LinkGnbStyles>
					</ListGnbStyles>

					<ListGnbStyles>
						{/* path */}
						<Link to="/">데뷔 로드맵</Link>
						<LinkGnbStyles>
							<li>
								<Link to="/">데뷔 히스토리</Link>
							</li>
							<li>
								<Link to="/">장학생 신청 및 작품 투고</Link>
							</li>
						</LinkGnbStyles>
					</ListGnbStyles>

					<ListGnbStyles>
						{/* path */}
						<Link to="/">본원소개</Link>
						<LinkGnbStyles>
							<li>
								<Link to="/">대표 강사진</Link>
							</li>
							<li>
								<Link to="/">제휴업체</Link>
							</li>
							<li>
								<Link to="/">오시는 길</Link>
							</li>
						</LinkGnbStyles>
					</ListGnbStyles>

					<ListGnbStyles>
						{/* path */}
						<Link to="/">고객지원</Link>
						<LinkGnbStyles>
							<li>
								<Link to="/">자주하는 질문</Link>
							</li>
						</LinkGnbStyles>
					</ListGnbStyles>
				</MenuStyles>
				{/* button */}
				<Button>
					<Link to="/sign-in">로그인</Link>
				</Button>
			</NavStyles>
		</HeaderStyles>
	);
}

export default Header;
