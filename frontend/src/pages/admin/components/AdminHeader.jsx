import { Link, useLocation, useNavigate } from 'react-router-dom';

import Logo from '../../../assets/logos/logo_circle.svg';

import {
	HeaderStyles,
	HeaderWrapperStyles,
	NavStyles,
	NavChildStyles,
	LogoStyles,
} from '../styles/AdminHeaderStyles';

function AdminHeader() {
	const { pathname } = useLocation();

	const handleLogoutClick = (params) => {};

	return (
		<HeaderStyles>
			<HeaderWrapperStyles>
				<LogoStyles>
					{/* logo */}
					<Link to="/">
						<img src={Logo} alt="" />
					</Link>
				</LogoStyles>
				<NavStyles>
					<Link to="/admin/class">
						<NavChildStyles is_selected={pathname === '/admin/class' ? 1 : 0}>
							강의 만들기
						</NavChildStyles>
					</Link>

					<NavChildStyles is_selected={pathname === '/' ? 1 : 0}>
						강의 관리
					</NavChildStyles>

					<NavChildStyles is_selected={pathname === '/' ? 1 : 0}>
						학생 관리
					</NavChildStyles>
					<NavChildStyles>
						<button onClick={handleLogoutClick}>로그아웃</button>
					</NavChildStyles>
				</NavStyles>
			</HeaderWrapperStyles>
		</HeaderStyles>
	);
}

export default AdminHeader;
