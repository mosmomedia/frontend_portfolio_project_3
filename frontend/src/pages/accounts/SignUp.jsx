import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import firebase from '../../config/firebase';
import OAuth from '../../components/OAuth';
import { createStudent } from '../../contexts/myClassRoom/MyClassActions';

import BackToHomeBar from '../../components/BackToHomeBar';
import Logo from '../../assets/logos/logo_circle.svg';
import { toast } from 'react-toastify';
import Spinner from '../../components/shared/Spinner';

import 'twin.macro';
import 'styled-components/macro';

import {
	Wrapper,
	MainStyles,
	LeftSectionStyles,
	FormStyles,
	SignUpImageStyles,
	InputGroupStyles,
	InputStyles,
	LineStyles,
	InfoStyles,
	SubmitStyles,
	AdsInfoStyles,
	ButtonStyles,
} from '../../styles/AuthStyles';

function SignUp() {
	const [loading, setLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		password2: '',
		name: '',
		nickname: '',
		phone: '',
		isAdmin: false,
		isProvided: false,
	});

	const {
		email,
		password,
		password2,
		name,
		nickname,
		phone,
		isAdmin,
		isProvided,
	} = formData;

	const navigate = useNavigate();

	const handleCheckbox = ({ target }) => {
		setIsChecked(target.checked);
	};

	const handleChange = ({ target: { id, value } }) => {
		setFormData({ ...formData, [id]: value });
	};

	useEffect(() => {
		if (email && password && password2 && name && isChecked) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [email, password, password2, name, isChecked]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		if (isChecked && password === password2) {
			try {
				const userCredential = await firebase.createUserWithEmailAndPassword(
					firebase.auth,
					email,
					password
				);

				firebase.updateProfile(userCredential.user, {
					displayName: name,
				});

				const { uid } = userCredential.user;

				// create a student in mongodb
				const newStudent = await createStudent(
					{
						firebaseId: uid,
						email,
						name,
					},
					userCredential.user
				);

				const { _id } = newStudent;

				const userProfile = {
					userObjectId: _id,
					email,
					name,
					nickname,
					phone,
					isAdmin,
					isProvided,
					createdAt: firebase.serverTimestamp(),
				};

				await firebase.setDoc(
					firebase.doc(firebase.db, 'users', uid),
					userProfile
				);

				toast(`반갑습니다, ${name}님!`);
				navigate('/');
			} catch (error) {
				if (error.code === 'auth/weak-password') {
					toast.error('Password should be at least 6 characters');
				} else if (error.code === 'auth/email-already-in-use') {
					toast.error('This email is already in use');
				}
				console.log(error);
				setLoading(false);
			}
		} else {
			toast.error('Please Confirm Password');
		}
	};

	if (loading) return <Spinner />;

	return (
		<>
			<Wrapper>
				<BackToHomeBar />
				<MainStyles>
					<LeftSectionStyles>
						<FormStyles onSubmit={handleSubmit}>
							<h2>회원 가입</h2>
							<InputGroupStyles>
								<label htmlFor="email">
									<span tw="text-keyColor">*</span> 이메일
								</label>
								<InputStyles
									type="email"
									id="email"
									value={email}
									onChange={handleChange}
									required
								/>
							</InputGroupStyles>

							<InputGroupStyles>
								<label htmlFor="password">
									<span tw="text-keyColor">*</span> 비밀번호
								</label>
								<InputStyles
									type="password"
									id="password"
									value={password}
									onChange={handleChange}
									required
								/>
							</InputGroupStyles>

							<InputGroupStyles>
								<label htmlFor="password2">
									<span tw="text-keyColor">*</span> 비밀번호 확인
								</label>
								<InputStyles
									type="password"
									id="password2"
									value={password2}
									onChange={handleChange}
									required
								/>
							</InputGroupStyles>

							<InputGroupStyles>
								<label htmlFor="name">
									<span tw="text-keyColor">*</span> 이름
								</label>
								<InputStyles
									type="text"
									id="name"
									value={name}
									onChange={handleChange}
									required
								/>
							</InputGroupStyles>

							<InputGroupStyles>
								<label htmlFor="nickname">닉네임</label>
								<InputStyles
									type="text"
									id="nickname"
									value={nickname}
									onChange={handleChange}
								/>
							</InputGroupStyles>

							<InputGroupStyles>
								<label htmlFor="phone">연락처</label>
								<InputStyles
									type="number"
									id="phone"
									value={phone}
									onChange={handleChange}
								/>
							</InputGroupStyles>

							<InfoStyles>
								<input
									type="checkbox"
									id="personal_info"
									onChange={handleCheckbox}
									checked={isChecked}
									required
								/>
								<label htmlFor="personal_info">
									<span tw="text-keyColor">*</span>
									약관 동의 :{' '}
									<span>
										<Link to="/privary" target="_blank">
											이용약관
										</Link>
									</span>{' '}
									및{' '}
									<span>
										<Link to="/term" target="_blank">
											정보수집
										</Link>
									</span>
									에 동의합니다.
								</label>
							</InfoStyles>
							<SubmitStyles>
								<ButtonStyles isDisabled={isDisabled}>
									<span>
										<img src={Logo} tw="w-5" alt="" />
									</span>
									<span>가입하기</span>
									<span tw="w-5"></span>
								</ButtonStyles>
								<LineStyles>
									<span>or</span>
								</LineStyles>
								<OAuth setLoading={setLoading} />
							</SubmitStyles>
						</FormStyles>
					</LeftSectionStyles>
					{/* <RightSectionStyles> */}
					<SignUpImageStyles />
					<AdsInfoStyles>
						<h3>절대자도 아빠는 처음이라</h3>
						<h4>스튠 x 제이 작가</h4>
					</AdsInfoStyles>
					{/* </RightSectionStyles> */}
				</MainStyles>
			</Wrapper>
		</>
	);
}

export default SignUp;
