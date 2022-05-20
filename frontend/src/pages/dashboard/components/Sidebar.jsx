import firebase from '../../../config/firebase';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useMyClassContext } from '../../../contexts/myClassRoom/MyClassContext';

import { toast } from 'react-toastify';

import Logo from '../../../assets/logos/logo_circle.svg';

import SidebarIcon1 from '../../../assets/icons/ico_sidebar_1';
import SidebarIcon2 from '../../../assets/icons/ico_sidebar_2';
import SidebarIcon3 from '../../../assets/icons/ico_sidebar_3';

import {
	SidebarStyles,
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

	const navigate = useNavigate();
	const { myClassList } = useMyClassContext();
	const splitURI = pathname.split('/');

	const id = splitURI[splitURI.length - 1];

	const myCurrentList = [];
	const myHistoryList = [];

	myClassList.forEach(({ myClass }) => {
		if (myClass.isCompleted) {
			myHistoryList.push(myClass);
		} else {
			myCurrentList.push(myClass);
		}
	});

	const handleStreamClick = () => {
		if (myCurrentList.length > 0) {
			navigate('/dashboard/my-classroom/stream');
		} else {
			toast.error('현재 등록한 강의가 없습니다.');
		}
	};

	const handleRecordingClick = () => {
		if (myHistoryList.length > 0) {
			navigate('/dashboard/my-classroom/history');
		} else {
			toast.error('과거에 수강했던 강의가 없습니다.');
		}
	};

	const handleLogoutClick = () => {
		firebase.auth.signOut();
		toast.success('로그아웃 성공!');
		navigate('/');
	};

	return (
		<SidebarStyles>
			{/* side nav bar */}
			{/* header for mobile */}
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
							pathname === `/dashboard/my-classroom/stream/${id}` ||
							pathname === '/dashboard/my-classroom/history'
								? 1
								: 0
						}
					>
						<MobileNavChildStyles
							is_selected={
								pathname === '/dashboard/my-classroom/stream' ? 1 : 0
							}
							onClick={handleStreamClick}
						>
							나의 강의 리스트
						</MobileNavChildStyles>
						<MobileNavChildStyles
							is_selected={
								pathname === '/dashboard/my-classroom/history' ? 1 : 0
							}
							onClick={handleRecordingClick}
						>
							강의 히스토리
						</MobileNavChildStyles>
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
						<MobileNavChildStyles>정보변경</MobileNavChildStyles>
						<MobileNavChildStyles>
							<button onClick={handleLogoutClick}>로그아웃</button>
						</MobileNavChildStyles>
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
								pathname === `/dashboard/my-classroom/stream/${id}` ||
								pathname === '/dashboard/my-classroom/history'
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
								<li>정보변경</li>
								<li>회원탈퇴</li>
							</ol>
						</Link>
					</MenuItemStyles>
				</MainMenuStyles>
				<LogoutStyles>로그아웃</LogoutStyles>
			</MenuStyles>

			{/* main */}
		</SidebarStyles>
	);
}

export default Sidebar;
