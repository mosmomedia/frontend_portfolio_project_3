import { Link } from 'react-router-dom';

import Logo from '../../../assets/logos/logo_circle.svg';

import SidebarIcon1 from '../../../assets/icons/ico_sidebar_1';
import SidebarIcon2 from '../../../assets/icons/ico_sidebar_2';
import SidebarIcon3 from '../../../assets/icons/ico_sidebar_3';

import {
	SidebarStyles,
	HeaderStyles,
	MainMenuStyles,
	MenuStyles,
	LogoStyles,
	MenuItemStyles,
	LogoutStyles,
} from '../styles/SidebarStyles';

function Sidebar() {
	return (
		<SidebarStyles>
			{/* side nav bar */}
			{/* header for mobile */}
			<HeaderStyles>
				<LogoStyles>
					{/* logo */}
					<Link to="/">
						<img src={Logo} alt="" />
					</Link>
				</LogoStyles>
			</HeaderStyles>
			{/* menu items */}
			<MenuStyles>
				<MainMenuStyles>
					<MenuItemStyles>
						<SidebarIcon1 />
						<h3>나의 강의실</h3>
						<ol>
							<li>실시간 강의</li>
							<li>녹화 강의</li>
						</ol>
					</MenuItemStyles>

					<MenuItemStyles>
						<SidebarIcon2 />
						<h3>연재 게시판</h3>
					</MenuItemStyles>

					<MenuItemStyles>
						<SidebarIcon3 />
						<h3>나의 정보</h3>
						<ol>
							<li>할인쿠폰</li>
							<li>정보변경</li>
							<li>회원탈퇴</li>
						</ol>
					</MenuItemStyles>
				</MainMenuStyles>
				<LogoutStyles>로그아웃</LogoutStyles>
			</MenuStyles>
			{/* main */}
		</SidebarStyles>
	);
}

export default Sidebar;
