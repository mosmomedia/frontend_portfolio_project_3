import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../config/firebase';

import tw from 'twin.macro';
import 'twin.macro';
import 'styled-components/macro';

import Logo_black from '../assets/logos/logo.svg';
import Logo_white from '../assets/logos/logo_on.svg';
import Button from './shared/Button';

import { FaChalkboardTeacher } from 'react-icons/fa';
import Spinner from './shared/Spinner';

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

	const [user, loading] = useAuthState(firebase.auth);
	const { pathname } = useLocation();

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
		pathname === '/admin' ||
		pathname === '/admin/sign-in' ||
		pathname === '/admin/registration' ||
		pathname === `/admin/registration/edit/${id}` ||
		pathname === `/admin/class/${id}` ||
		pathname === '/admin/classes'
	)
		return null;

	const handleClick = () => {
		setHoverOn(false);
		setHamburgerOn(false);
	};

	if (loading) return <Spinner />;

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
								????????????
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/class-registration/roadmap" onClick={handleClick}>
									?????? ?????????
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link
									to="/class-registration/all-classes"
									onClick={handleClick}
								>
									?????? ?????????
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link
									to="/class-registration/all-classes/online"
									onClick={handleClick}
								>
									????????? ?????????
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
								?????? ?????????
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/student/debut-history" onClick={handleClick}>
									?????? ????????????
								</Link>
							</ItemStyles>
							<ItemStyles variant="web">
								<Link to="/student/scholarship" onClick={handleClick}>
									????????? ?????? ??? <br /> ?????? ??????
								</Link>
							</ItemStyles>
							<ItemStyles variant="mobile">
								<Link to="/student/scholarship" onClick={handleClick}>
									????????? ?????? ??? ?????? ??????
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
								????????????
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/company/about" onClick={handleClick}>
									????????????
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/company/team" onClick={handleClick}>
									?????? ?????????
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/company/partners" onClick={handleClick}>
									????????????
								</Link>
							</ItemStyles>
							<ItemStyles>
								<Link to="/company/location" onClick={handleClick}>
									????????? ???
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
								????????????
							</Link>
						</TitleStyles>
						<LinkGnbStyles is_hover_on={hoverOn}>
							<ItemStyles>
								<Link to="/customer/faq" onClick={handleClick}>
									???????????? ??????
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
									??? ?????????
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
									?????????
								</Button>
								<Button
									navtigate_to="/sign-up"
									variant="primary"
									add_styles={tw`lg:text-[0.9375rem] lg:px-8`}
								>
									????????????
								</Button>
							</div>
							<div className="mobile">
								<Button
									navtigate_to="/sign-in"
									variant="primary"
									add_styles={tw`lg:mt-[1.125rem] text-[0.9375rem]`}
								>
									?????????
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
