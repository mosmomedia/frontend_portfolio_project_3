import useWD from '../hooks/useWindowDimensions';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import firebase from '../config/firebase';
import OAuth from '../components/OAuth';

import BackToHomeBar from '../components/BackToHomeBar';
import Button from '../components/shared/Button';
import Logo from '../assets/logos/logo_circle.svg';
import Img from '../assets/st_img_4.png';
import { toast } from 'react-toastify';

import 'twin.macro';
import 'styled-components/macro';
import tw, { styled } from 'twin.macro';

const Wrapper = styled.div`
	${tw`grid place-content-center bg-black text-[#7c7c7c]   tracking-wider h-screen md:text-sm xl:block`}
`;

const MainStyles = styled.div`
	${tw`xl:flex xl:items-center `}
`;

const LeftSectionStyles = styled.div`
	${tw`xl:w-3/5  `}
`;

const FormStyles = styled.form`
	${tw`space-y-6 max-w-sm mx-auto`}

	h2 {
		${tw`text-center text-white mb-10`}
	}
`;

const RightSectionStyles = styled.div`
	${tw`hidden xl:block  xl:h-screen xl:w-2/5`}
`;
const ImageStyles = styled.img`
	${tw`xl:absolute xl:bottom-0 xl:max-h-[95%]`}
`;

const InputGroupStyles = styled.div`
	${tw`flex flex-col space-y-1.5 `}
`;

const InputStyles = styled.input`
	${tw`text-st_bg1 py-0.5 px-1 rounded-sm text-base`}
`;

const LineStyles = styled.div`
	${tw`relative h-0.5 bg-[rgba(75, 75, 75, 0.4)] `}

	span {
		${tw`absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-58%] bg-black text-[#7c7c7c]`}
	}
`;

const InfoStyles = styled.label`
	span {
		${tw`text-keyColor`}
	}
`;

function SignUp() {
	const { width } = useWD();
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		password2: '',
		name: '',
		nickname: '',
		phone: '',
	});

	const { email, password, password2, name, nickname, phone } = formData;

	const navigate = useNavigate();

	const handleChange = ({ target: { id, value } }) => {
		setFormData({ ...formData, [id]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === password2) {
			try {
				const userCredential = await firebase.createUserWithEmailAndPassword(
					firebase.auth,
					email,
					password
				);

				firebase.updateProfile(userCredential.user, {
					displayName: name,
				});

				// create ObjId for mongoDB
				const userObjectId = firebase.createMongoObjectId();

				const userProfile = {
					userObjectId,
					email,
					name,
					nickname,
					phone,
					createdAt: firebase.serverTimestamp(),
				};

				const { uid } = userCredential.user;

				await firebase.setDoc(
					firebase.doc(firebase.db, 'users', uid),
					userProfile
				);

				toast(`Welcome, ${name}!`);
				navigate('/');
			} catch (error) {
				console.log(error);
				toast.error(error);
			}
		} else {
			toast.error('Please Confirm Password');
		}
	};

	if (loading) return 'Loading...';

	return (
		<>
			<Wrapper>
				<BackToHomeBar />
				<MainStyles>
					<LeftSectionStyles>
						<FormStyles onSubmit={handleSubmit}>
							<h2>회원 가입</h2>
							<InputGroupStyles>
								<label htmlFor="email">이메일</label>
								<InputStyles
									type="email"
									id="email"
									value={email}
									onChange={handleChange}
								/>
							</InputGroupStyles>

							<InputGroupStyles>
								<label htmlFor="password">비밀번호</label>
								<InputStyles
									type="password"
									id="password"
									value={password}
									onChange={handleChange}
								/>
							</InputGroupStyles>

							<InputGroupStyles>
								<label htmlFor="password2">비밀번호 확인</label>
								<InputStyles
									type="password"
									id="password2"
									value={password2}
									onChange={handleChange}
								/>
							</InputGroupStyles>

							<InputGroupStyles>
								<label htmlFor="name">이름</label>
								<InputStyles
									type="text"
									id="name"
									value={name}
									onChange={handleChange}
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

							<div>
								<InputStyles
									type="checkbox"
									id="personal_info"
									onChange={handleChange}
								/>
								<InfoStyles htmlFor="personal_info">
									{' '}
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
								</InfoStyles>
							</div>

							<Button
								variant="submit"
								add_styles={tw`flex justify-between items-center w-full text-white text-base`}
							>
								<span>
									<img src={Logo} tw="w-5" alt="" />
								</span>
								<span>가입하기</span>
								<span tw="w-5"></span>
							</Button>
							<LineStyles>
								<span>or</span>
							</LineStyles>
							<OAuth setLoading={setLoading} />
						</FormStyles>
					</LeftSectionStyles>
					<RightSectionStyles>
						<ImageStyles src={Img} alt="" />
					</RightSectionStyles>
				</MainStyles>
			</Wrapper>
			<div tw="absolute bottom-1 left-2 text-sm text-blue-200">{width}</div>
		</>
	);
}

export default SignUp;
