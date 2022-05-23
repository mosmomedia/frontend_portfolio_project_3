import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input/input';

import { useAuthContext } from '../../../contexts/auth/AuthContext';

import firebase from '../../../config/firebase';

import Spinner from '../../../components/shared/Spinner';

import 'twin.macro';
import 'styled-components/macro';

import Logo from '../../../assets/logos/logo_circle.svg';

import {
	MainStyles,
	FormStyles,
	InputGroupStyles,
	InputStyles,
	SubmitStyles,
	ButtonStyles,
} from '../styles/ChangeUserInfoStyles';
import { toast } from 'react-toastify';

function ChangeUserInfo() {
	const { isLoading, user } = useAuthContext();
	const [loading, setLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
	const [phoneNumber, setPhoneNumber] = useState();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
		newPassword: '',
		newPassword2: '',
		name: '',
		nickname: '',
		isProvided: false,
	});

	const {
		email,
		password,
		newPassword,
		newPassword2,
		name,
		nickname,
		isProvided,
	} = formData;

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			const docRef = firebase.doc(firebase.db, 'users', user.uid);
			const docSnap = await firebase.getDoc(docRef);

			const { email, name, nickname, phone, isProvided } = docSnap.data();

			setFormData((prevState) => ({
				...prevState,
				email,
				name,
				nickname,
				isProvided,
			}));

			setPhoneNumber(phone);
			setLoading(false);
		};

		fetchData();
	}, [user.uid]);

	useEffect(() => {
		if (email && password && name) {
			setIsDisabled(false);
		} else if (isProvided) {
			if (nickname || phoneNumber) {
				setIsDisabled(false);
			}
		} else {
			setIsDisabled(true);
		}
	}, [email, password, name, nickname, phoneNumber, isProvided]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			if (!isProvided) {
				// verify current password
				const credential = firebase.EmailAuthProvider.credential(
					email,
					password
				);
				await firebase.reauthenticateWithCredential(user, credential);

				// change password

				if (newPassword) {
					if (newPassword.trim().length < 6) {
						return toast.error(
							'새로운 비밀번호는 6자리 이상으로 입력하십시오.'
						);
					}

					if (newPassword2 === '' || newPassword !== newPassword2) {
						console.log('Error: wrong new password');
						setLoading(false);
						return toast.error(
							'새로운 비밀번호 입력 및 확인에 문제가 있습니다.'
						);
					} else if (newPassword === newPassword2) {
						await firebase.updatePassword(user, newPassword);
						console.log('password successfully changed');
					}
				}
			}

			let updatedFormData = { phone: '', nickname };

			// change phone number
			if (phoneNumber) {
				if (phoneNumber.length === 13) {
					updatedFormData.phone = phoneNumber;
				} else {
					toast.error('연락처를 다시 확인 하십시오.');
				}
			}

			if (updatedFormData.phone || updatedFormData.nickname) {
				const { phone, nickname } = updatedFormData;
				const docRef = firebase.doc(firebase.db, 'users', user.uid);
				await firebase.updateDoc(docRef, { phone, nickname });
			}

			toast.success('유저 정보를 성공적으로 변경하였습니다!');

			setTimeout(() => {
				window.location.reload(false);
			}, 2000);
		} catch (error) {
			console.log(error);
			setLoading(false);
			toast.error('비밀번호가 틀립니다.');
		}
	};

	const handleChange = ({ target }) => {
		setFormData((prevState) => ({
			...prevState,
			[target.id]: target.value,
		}));
	};

	if (isLoading || loading) return <Spinner />;

	return (
		<MainStyles>
			<FormStyles onSubmit={handleSubmit}>
				<InputGroupStyles>
					<label htmlFor="email">
						<span tw="text-keyColor">*</span> 이메일
					</label>
					<InputStyles
						type="email"
						id="email"
						value={email}
						isRequired={true}
						required
						readOnly
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
						isRequired={true}
						required
						readOnly
					/>
				</InputGroupStyles>

				{!isProvided && (
					<InputGroupStyles>
						<label htmlFor="password">
							<span tw="text-keyColor">*</span> 현재 비밀번호
						</label>
						<InputStyles
							type="password"
							id="password"
							value={password}
							isRequired={true}
							onChange={handleChange}
						/>
					</InputGroupStyles>
				)}

				<InputGroupStyles>
					<label htmlFor="nickname">닉네임 &#40;선택&#41;</label>
					<InputStyles
						type="text"
						id="nickname"
						value={nickname}
						onChange={handleChange}
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="phone">연락처 &#40;선택&#41;</label>
					<PhoneInput
						className="phoneInput"
						country="KR"
						value={phoneNumber}
						onChange={setPhoneNumber}
					/>
				</InputGroupStyles>

				{!isProvided && (
					<>
						<InputGroupStyles>
							<label htmlFor="newPassword">새 비밀번호 &#40;선택&#41;</label>
							<InputStyles
								type="password"
								id="newPassword"
								value={newPassword}
								onChange={handleChange}
							/>
						</InputGroupStyles>

						<InputGroupStyles>
							<label htmlFor="newPassword2">
								새 비밀번호 확인 &#40;선택&#41;
							</label>
							<InputStyles
								type="password"
								id="newPassword2"
								value={newPassword2}
								onChange={handleChange}
							/>
						</InputGroupStyles>
					</>
				)}

				<SubmitStyles>
					<ButtonStyles id="change-button" isDisabled={isDisabled}>
						<span>
							<img src={Logo} tw="w-5" alt="" />
						</span>
						<span>변경하기</span>
						<span tw="w-5"></span>
					</ButtonStyles>
				</SubmitStyles>
			</FormStyles>
		</MainStyles>
	);
}

export default ChangeUserInfo;
