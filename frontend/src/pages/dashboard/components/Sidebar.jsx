import { Link, useLocation } from 'react-router-dom';

import Logo from '../../../assets/logos/logo_circle.svg';

import SidebarIcon1 from '../../../assets/icons/ico_sidebar_1';
import SidebarIcon2 from '../../../assets/icons/ico_sidebar_2';
import SidebarIcon3 from '../../../assets/icons/ico_sidebar_3';

import {
	SidebarStyles,
	ContainerStyles,
	HeaderStyles,
	MobileNavStyles,
	MobileNavChildStyles,
	MainMenuStyles,
	MenuStyles,
	LogoStyles,
	MenuItemStyles,
	LogoutStyles,
} from '../styles/SidebarStyles';

function Sidebar() {
	const { pathname } = useLocation();
	return (
		<SidebarStyles>
			{/* side nav bar */}
			{/* header for mobile */}
			{/* <ContainerStyles> */}
			<HeaderStyles>
				<div className="headerWrapper">
					<LogoStyles>
						{/* logo */}
						<Link to="/">
							<img src={Logo} alt="" />
						</Link>
					</LogoStyles>
					<MobileNavStyles
						is_active={
							pathname === '/dashboard/my-classroom' ||
							pathname === '/dashboard/my-classroom/stream' ||
							pathname === '/dashboard/my-classroom/recording'
								? 1
								: 0
						}
					>
						<Link to="/dashboard/my-classroom/stream">
							<MobileNavChildStyles
								is_selected={
									pathname === '/dashboard/my-classroom/stream' ? 1 : 0
								}
							>
								실시간 강의
							</MobileNavChildStyles>
						</Link>
						<Link to="/dashboard/my-classroom/recording">
							<MobileNavChildStyles
								is_selected={
									pathname === '/dashboard/my-classroom/recording' ? 1 : 0
								}
							>
								녹화 강의
							</MobileNavChildStyles>
						</Link>
					</MobileNavStyles>
					<MobileNavStyles
						is_active={pathname === '/dashboard/my-board' ? 1 : 0}
					>
						<Link to="/dashboard/my-board/new-item">
							<MobileNavChildStyles
								is_selected={pathname === '/dashboard/my-board' ? 1 : 0}
							>
								새로운 연재 시작하기 <span className="add_icon">+</span>{' '}
							</MobileNavChildStyles>
						</Link>
					</MobileNavStyles>

					<MobileNavStyles
						is_active={pathname === '/dashboard/my-page' ? 1 : 0}
					>
						<MobileNavChildStyles>할인쿠폰</MobileNavChildStyles>
						<MobileNavChildStyles>정보변경</MobileNavChildStyles>
						<MobileNavChildStyles>로그아웃</MobileNavChildStyles>
					</MobileNavStyles>
				</div>
			</HeaderStyles>
			{/* menu items */}
			<MenuStyles>
				<MainMenuStyles>
					<MenuItemStyles>
						<Link
							to="/dashboard/my-classroom"
							className={
								pathname === '/dashboard/my-classroom' ||
								pathname === '/dashboard/my-classroom/stream' ||
								pathname === '/dashboard/my-classroom/recording'
									? 'active'
									: 'inactive'
							}
						>
							<SidebarIcon1 />
							<h3>나의 강의실</h3>
							<ol>
								<li>실시간 강의</li>
								<li>녹화 강의</li>
							</ol>
						</Link>
					</MenuItemStyles>

					<MenuItemStyles>
						<Link
							to="/dashboard/my-board"
							className={
								pathname === '/dashboard/my-board' ? 'active' : 'inactive'
							}
						>
							<SidebarIcon2 />
							<h3>연재 게시판</h3>
						</Link>
					</MenuItemStyles>

					<MenuItemStyles>
						<Link
							to="/dashboard/my-page"
							className={
								pathname === '/dashboard/my-page' ? 'active' : 'inactive'
							}
						>
							<SidebarIcon3
								variant={pathname === '/dashboard/my-page' && 'iconActive'}
							/>
							<h3>나의 정보</h3>
							<ol>
								<li>할인쿠폰</li>
								<li>정보변경</li>
								<li>회원탈퇴</li>
							</ol>
						</Link>
					</MenuItemStyles>
				</MainMenuStyles>
				<LogoutStyles>로그아웃</LogoutStyles>
			</MenuStyles>
			{/* </ContainerStyles> */}

			{/* main */}
		</SidebarStyles>
	);
}

export default Sidebar;
