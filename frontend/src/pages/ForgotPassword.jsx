import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import firebase from '../config/firebase';

import BackToHomeBar from '../components/BackToHomeBar';
import Button from '../components/shared/Button';
import Logo from '../assets/logos/logo_circle.svg';
import Img from '../assets/st_img_sign_in.png';
import { toast } from 'react-toastify';
import Spinner from '../components/shared/Spinner';

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
	AdsInfoStyles,
	SubmitStyles,
} from '../styles/AuthStyles';

function ForgotPassword() {
	const [loading, setLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	const [email, setEmail] = useState('');

	const navigate = useNavigate();

	const handleChange = ({ target: { value } }) => {
		setEmail(value);
	};

	useEffect(() => {
		if (email) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [email]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		if (email) {
			try {
				await firebase.sendPasswordResetEmail(firebase.auth, email);
				toast(`Email was sent`);
				navigate('/');
			} catch (error) {
				toast.error('Could not send reset email');
				console.log(error);
				setLoading(false);
			}
		} else {
			toast.error('Please type your email in this form');
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
							<h2>비밀번호 재설정</h2>
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

							<SubmitStyles>
								<Button
									disabled={isDisabled}
									variant="submit"
									add_styles={tw`flex justify-between items-center w-full  text-base`}
								>
									<span>
										<img src={Logo} tw="w-5" alt="" />
									</span>
									<span>이메일 보내기</span>
									<span tw="w-5"></span>
								</Button>
							</SubmitStyles>
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

export default ForgotPassword;
