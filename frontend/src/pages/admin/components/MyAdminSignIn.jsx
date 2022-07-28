import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../../../config/firebase';

import { useAdminContext } from '../../../contexts/admin/AdminContext';
import { getMyClasses } from '../../../contexts/admin/AdminActions';

import Logo from '../../../assets/logos/logo_circle.svg';
import { toast } from 'react-toastify';
import Spinner from '../../../components/shared/Spinner';

import {
	WrapperStyles,
	FormStyles,
	InputGroupStyles,
	InputStyles,
	SubmitStyles,
	ButtonStyles,
} from '../styles/MyAdminSignInStyles';

function MyAdminSignIn() {
	const [loading, setLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	const { dispatch, isLoading } = useAdminContext();

	const [user] = useAuthState(firebase.auth);

	const [formData, setFormData] = useState({
		email: 'test@test.com',
		password: 'test1234',
	});

	const { email, password } = formData;

	const navigate = useNavigate();

	const handleChange = ({ target: { id, value } }) => {
		setFormData({ ...formData, [id]: value });
	};

	useEffect(() => {
		setLoading(true);
		const checkAdmin = async () => {
			const docRef = firebase.doc(firebase.db, 'users', user.uid);
			const docSnap = await firebase.getDoc(docRef);
			if (docSnap.data().isAdmin) {
				setLoading(false);
				navigate('/admin');
			}
		};

		if (user) {
			checkAdmin();
		} else {
			setLoading(false);
		}
	}, [user]);

	useEffect(() => {
		if (email && password) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [email, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (email && password) {
			try {
				const userCredential = await firebase.signInWithEmailAndPassword(
					firebase.auth,
					email,
					password
				);

				const { displayName, uid } = userCredential.user;

				const docRef = firebase.doc(firebase.db, 'users', uid);
				const docSnap = await firebase.getDoc(docRef);

				if (docSnap.data().isAdmin) {
					dispatch({ type: 'LOADING' });

					const { userObjectId, myClasses } = await getMyClasses();
					let myClassArr = [];
					if (myClasses) {
						myClassArr = myClasses.map(({ myClass }) => myClass);
					}

					dispatch({
						type: 'GET_MY_CLASSES',
						payload: { userObjectId, myClassArr },
					});

					toast(`반갑습니다! ${displayName} 관리자님!`);
					navigate('/admin');
				} else {
					firebase.auth.signOut();
					toast.error('회원 정보를 찾을 수가 없습니다.');
				}
			} catch (error) {
				if (error.code === 'auth/wrong-password') {
					toast.error('이메일 또는 비밀번호를 다시 확인하십시오.');
				}

				if (error.code === 'auth/user-not-found') {
					toast.error('회원 정보를 찾을 수가 없습니다.');
				}
				console.log(error);
			}
		} else {
			toast.error('이메일 / 비밀번호 모두 입력하십시오.');
		}
	};

	if (loading || isLoading) return <Spinner />;

	return (
		<WrapperStyles>
			<FormStyles onSubmit={handleSubmit}>
				<h2>관리자 로그인</h2>
				<InputGroupStyles>
					<label htmlFor="email">이메일</label>
					<InputStyles
						type="email"
						id="email"
						value={email}
						onChange={handleChange}
						required
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="password">비밀번호</label>
					<InputStyles
						type="password"
						id="password"
						value={password}
						onChange={handleChange}
						required
					/>
				</InputGroupStyles>

				<SubmitStyles>
					<ButtonStyles disabled={isDisabled} isDisabled={isDisabled}>
						<span>
							<img src={Logo} tw="w-5" alt="" />
						</span>
						<span>로그인</span>
						<span tw="w-5"></span>
					</ButtonStyles>
				</SubmitStyles>
			</FormStyles>
		</WrapperStyles>
	);
}

export default MyAdminSignIn;
