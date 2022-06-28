import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAdminContext } from '../../../contexts/admin/AdminContext';

import Logo from '../../../assets/logos/logo_circle.svg';
import firebase from '../../../config/firebase';

import {
	HeaderStyles,
	HeaderWrapperStyles,
	NavStyles,
	NavChildStyles,
	LogoStyles,
} from '../styles/AdminHeaderStyles';

function AdminHeader() {
	const { pathname } = useLocation();
	const { admin } = useAdminContext();

	const splitURI = pathname.split('/');
	const id = splitURI[splitURI.length - 1];

	const navigate = useNavigate();

	const handleLogoutClick = () => {
		firebase.auth.signOut();
		toast.success('로그아웃 성공');
		navigate('/');
	};

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
					<Link to="/admin">
						<NavChildStyles is_selected={pathname === '/admin' ? 1 : 0}>
							관리자 홈
						</NavChildStyles>
					</Link>

					<Link to="/admin/registration">
						<NavChildStyles
							is_selected={pathname === '/admin/registration' ? 1 : 0}
						>
							강의 만들기
						</NavChildStyles>
					</Link>

					<Link to="/admin/classes">
						<NavChildStyles
							is_selected={
								pathname === '/admin/classes' ||
								pathname === `/admin/class/${id}` ||
								pathname === `/admin/registration/edit/${id}`
									? 1
									: 0
							}
						>
							강의 관리
						</NavChildStyles>
					</Link>

					<NavChildStyles is_selected={pathname === '/' ? 1 : 0}>
						학생 관리
					</NavChildStyles>
					{admin && (
						<NavChildStyles>
							<button onClick={handleLogoutClick}>로그아웃</button>
						</NavChildStyles>
					)}
				</NavStyles>
			</HeaderWrapperStyles>
		</HeaderStyles>
	);
}

export default AdminHeader;
