import { useState } from 'react';
import { Link } from 'react-router-dom';

import tw, { styled } from 'twin.macro';
import Logo_black from '../assets/logos/logo.svg';
import Logo_white from '../assets/logos/logo_on.svg';

import Button from './shared/Button';

const HeaderStyles = styled.header`
	${tw`fixed w-full h-[4.5rem]  bg-[#343540] text-white`}
	${tw`lg:block lg:bg-header lg:text-main_text lg:h-[5rem] lg:pb-8 `}

	${({ is_hover_on }) =>
		is_hover_on && tw`lg:h-[unset] lg:bg-black lg:text-white`}
`;

const NavStyles = styled.nav`
	${tw`flex bg-[#343540]  justify-between items-center h-full mx-auto px-6 `}

	${tw`lg:container 2xl:max-w-7xl lg:items-start lg:h-[unset] lg:pl-4 lg:pr-6 lg:bg-none lg:bg-header`}

	${({ is_hover_on }) => is_hover_on && tw`lg:bg-black`}
`;

const HamburgerStyles = styled.button`
	${tw`space-y-1 lg:hidden`}

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
	${tw`lg:mt-5`}
`;

const ImgStyles = styled.img`
	${tw`h-full`}
	${({ variant }) => variant === 'mobile' && tw`lg:hidden`}
	${({ variant }) => variant === 'web' && tw`hidden lg:block`}
`;

const MenuStyles = styled.div`
	${tw`absolute z-[-100] top-[4.5rem] py-3 left-0  w-full h-screen bg-[#343540] translate-y-[-115%]  space-y-14 tracking-widest transition-transform`}

	${tw`lg:flex  lg:translate-y-0 lg:z-0  lg:space-y-0 lg:py-0 lg:h-full  lg:w-[unset] lg:static lg:transition-none lg:bg-white`} 

	${({ is_hover_on }) => is_hover_on && tw`lg:bg-black`}
	${({ is_hamburger_on }) => is_hamburger_on && tw`translate-y-0`}
`;

const ListGnbStyles = styled.ul``;

const TitleStyles = styled.li`
	${tw`inline-block py-3 px-6 text-[0.9375rem]`}
	${tw`lg:py-8 lg:px-12`}
`;

const LinkGnbStyles = styled.ul`
	${tw`flex px-6  flex-wrap `}
	${tw`lg:px-[unset] lg:flex-nowrap lg:pl-12 lg:hidden `} 
	${({ is_hover_on }) => is_hover_on && tw`lg:block`}
`;

const ItemStyles = styled.li`
	${tw`py-1.5 pr-10 text-[#ffe0e0e7]`}
	${tw`lg:pr-0 lg:text-[#acacac] lg:text-[0.9375rem]`}

	${({ variant }) => variant === 'mobile' && tw`lg:hidden`}
	${({ variant }) => variant === 'web' && tw`hidden lg:block`}
`;

function Header() {
	const [hamburgerOn, setHamburgerOn] = useState(false);
	const [hoverOn, setHoverOn] = useState(false);

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
					onMouseOver={() => setHoverOn(true)}
					onMouseOut={() => setHoverOn(false)}
				>
					<ListGnbStyles>
						{/* path */}
						<TitleStyles>
							<Link to="/">수강신청</Link>
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
							<Link to="/">데뷔 로드맵</Link>
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
							<Link to="/">회사소개</Link>
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
							<Link to="/">고객지원</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/">자주하는 질문</Link>
							</ItemStyles>
						</LinkGnbStyles>
					</ListGnbStyles>
				</MenuStyles>
				{/* button */}
				<Button add_styles={tw`lg:mt-5 lg:text-[0.9375rem]`}>
					<Link to="/sign-in">로그인</Link>
				</Button>
			</NavStyles>
		</HeaderStyles>
	);
}

export default Header;
