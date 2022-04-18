import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import firebase from '../../config/firebase';
import OAuth from '../../components/OAuth';

import BackToHomeBar from '../../components/BackToHomeBar';
import Button from '../../components/shared/Button';
import Logo from '../../assets/logos/logo_circle.svg';
import Img from '../../assets/st_img_sign_in.png';
import { toast } from 'react-toastify';
import Spinner from '../../components/shared/Spinner';

import 'twin.macro';
import 'styled-components/macro';
import tw from 'twin.macro';

import {
	Wrapper,
	MainStyles,
	LeftSectionStyles,
	FormStyles,
	RightSectionStyles,
	ImageStyles,
	InputGroupStyles,
	InputStyles,
	LineStyles,
	AdsInfoStyles,
	SubmitStyles,
	LinkStyles,
} from '../../styles/AuthStyles';

function SignIn() {
	const [loading, setLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const navigate = useNavigate();

	const handleChange = ({ target: { id, value } }) => {
		setFormData({ ...formData, [id]: value });
	};

	useEffect(() => {
		if (email && password) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [email, password]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		if (email && password) {
			try {
				const userCredential = await firebase.signInWithEmailAndPassword(
					firebase.auth,
					email,
					password
				);
				const { displayName } = userCredential.user;

				if (displayName) {
					toast(`Welcome, ${displayName}!`);
					navigate('/');
				}
			} catch (error) {
				if (error.code === 'auth/wrong-password') {
					toast.error('auth or wong-password');
				}
				console.log(error);
				setLoading(false);
			}
		} else {
			toast.error('Please fill out this form');
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
							<h2>로그인</h2>
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
								<Button
									disabled={isDisabled}
									variant="submit"
									add_styles={tw`flex justify-between items-center w-full  text-base`}
								>
									<span>
										<img src={Logo} tw="w-5" alt="" />
									</span>
									<span>로그인</span>
									<span tw="w-5"></span>
								</Button>
								<LineStyles>
									<span>or</span>
								</LineStyles>
								<OAuth setLoading={setLoading} />
							</SubmitStyles>
							<LinkStyles>
								<span>
									<Link to="/forgot-password">비밀번호를 잊으셨나요?</Link>
								</span>
								<p>
									회원이 아니신가요?{' '}
									<span>
										<Link to="/sign-up">회원가입</Link>
									</span>
								</p>
							</LinkStyles>
						</FormStyles>
					</LeftSectionStyles>
					<RightSectionStyles>
						<ImageStyles src={Img} alt="Ads images" />
						<AdsInfoStyles>
							<h3>회귀한 엑스트라가 천재가 됨</h3>
							<h4>스튠 x 텍골 작가</h4>
						</AdsInfoStyles>
					</RightSectionStyles>
				</MainStyles>
			</Wrapper>
		</>
	);
}

export default SignIn;
