import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthContext } from '../contexts/auth/AuthContext';

import tw from 'twin.macro';
import 'twin.macro';
import 'styled-components/macro';

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

	const [currentPath, setCurrentPath] = useState('');

	const { pathname } = useLocation();
	const { user } = useAuthContext();

	//* tmp -  get token
	if (user) {
		// console.log(user.accessToken);
		// console.log(user);
	}

	const splitURI = pathname.split('/');
	const id = splitURI[splitURI.length - 1];

	useEffect(() => {
		setCurrentPath(splitURI[1]);
	}, [splitURI]);

	// exclude header in specific components
	if (
		pathname === '/sign-in' ||
		pathname === '/sign-up' ||
		pathname === '/forgot-password' ||
		pathname === '/dashboard' ||
		pathname === '/dashboard/my-classroom' ||
		pathname === '/dashboard/my-classroom/stream' ||
		pathname === `/dashboard/my-classroom/stream/${id}` ||
		pathname === '/dashboard/my-classroom/history' ||
		pathname === '/dashboard/my-board' ||
		pathname === `/dashboard/my-board/${id}` ||
		pathname === `/dashboard/my-board/edit/${id}` ||
		pathname === `/dashboard/my-board/work/write/${id}` ||
		pathname === `/dashboard/my-board/work/edit/${id}` ||
		pathname === `/dashboard/my-board/work/list/${id}` ||
		pathname === `/dashboard/my-board/work/viewer/${id}` ||
		pathname === '/dashboard/my-board/publish' ||
		pathname === '/dashboard/my-page/change-myinfo' ||
		pathname === '/dashboard/my-page' ||
		pathname === '/admin/' ||
		pathname === '/admin/registration' ||
		pathname === `/admin/class/${id}` ||
		pathname === '/admin/classes'
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
							<Link
								to="/class-registration/roadmap"
								className={
									currentPath === 'class-registration' && !hoverOn
										? 'active'
										: 'inactive'
								}
								onClick={handleClick}
							>
								수강신청
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/class-registration/roadmap" onClick={handleClick}>
									강의 로드맵
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link
									to="/class-registration/all-classes"
									onClick={handleClick}
								>
									전체 클래스
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link
									to="/class-registration/all-classes/online"
									onClick={handleClick}
								>
									실시간 클래스
								</Link>
							</ItemStyles>
						</LinkGnbStyles>
					</ListGnbStyles>

					<ListGnbStyles>
						{/* path */}
						<TitleStyles>
							<Link
								to="/student/debut-history"
								className={
									currentPath === 'student' && !hoverOn ? 'active' : 'inactive'
								}
								onClick={handleClick}
							>
								데뷔 로드맵
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/student/debut-history" onClick={handleClick}>
									데뷔 히스토리
								</Link>
							</ItemStyles>
							<ItemStyles variant="web">
								<Link to="/student/scholarship" onClick={handleClick}>
									장학생 신청 및 <br /> 작품 투고
								</Link>
							</ItemStyles>
							<ItemStyles variant="mobile">
								<Link to="/student/scholarship" onClick={handleClick}>
									장학생 신청 및 작품 투고
								</Link>
							</ItemStyles>
						</LinkGnbStyles>
					</ListGnbStyles>

					<ListGnbStyles>
						{/* path */}
						<TitleStyles>
							<Link
								to="/company/about"
								onClick={handleClick}
								className={
									currentPath === 'company' && !hoverOn ? 'active' : 'inactive'
								}
							>
								회사소개
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/company/about" onClick={handleClick}>
									본원소개
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/company/team" onClick={handleClick}>
									대표 강사진
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/company/partners" onClick={handleClick}>
									제휴업체
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/company/location" onClick={handleClick}>
									오시는 길
								</Link>
							</ItemStyles>
						</LinkGnbStyles>
					</ListGnbStyles>

					<ListGnbStyles>
						{/* path */}
						<TitleStyles>
							<Link
								to="/customer/faq"
								onClick={handleClick}
								className={
									currentPath === 'customer' && !hoverOn ? 'active' : 'inactive'
								}
							>
								고객지원
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/customer/faq" onClick={handleClick}>
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
					{user ? (
						<>
							<div className="web">
								<Button
									navtigate_to="/dashboard/my-classroom"
									variant="dashboard"
								>
									내 강의실
									<FaChalkboardTeacher size={'1.5625rem'} />
								</Button>
							</div>
							<Link className="mobile" to="/dashboard/my-classroom">
								<FaChalkboardTeacher size={'1.5625rem'} />
							</Link>
						</>
					) : (
						<>
							<div className="web">
								<Button
									navtigate_to="/sign-in"
									add_styles={tw`lg:mt-[1.125rem] lg:text-[0.9375rem] xl:hover:text-keyColor  `}
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
