import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input/input';

import { useAuthState } from 'react-firebase-hooks/auth';

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
	const [user, loading] = useAuthState(firebase.auth);

	const [isLoading, setLoading] = useState(false);
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
							'????????? ??????????????? 6?????? ???????????? ??????????????????.'
						);
					}

					if (newPassword2 === '' || newPassword !== newPassword2) {
						console.log('Error: wrong new password');
						setLoading(false);
						return toast.error(
							'????????? ???????????? ?????? ??? ????????? ????????? ????????????.'
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
					toast.error('???????????? ?????? ?????? ????????????.');
				}
			}

			if (updatedFormData.phone || updatedFormData.nickname) {
				const { phone, nickname } = updatedFormData;
				const docRef = firebase.doc(firebase.db, 'users', user.uid);
				await firebase.updateDoc(docRef, { phone, nickname });
			}

			toast.success('?????? ????????? ??????????????? ?????????????????????!');

			setTimeout(() => {
				window.location.reload(false);
			}, 2000);
		} catch (error) {
			console.log(error);
			setLoading(false);
			toast.error('??????????????? ????????????.');
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
						<span tw="text-keyColor">*</span> ?????????
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
						<span tw="text-keyColor">*</span> ??????
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
							<span tw="text-keyColor">*</span> ?????? ????????????
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
					<label htmlFor="nickname">????????? &#40;??????&#41;</label>
					<InputStyles
						type="text"
						id="nickname"
						value={nickname}
						onChange={handleChange}
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="phone">????????? &#40;??????&#41;</label>
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
							<label htmlFor="newPassword">??? ???????????? &#40;??????&#41;</label>
							<InputStyles
								type="password"
								id="newPassword"
								value={newPassword}
								onChange={handleChange}
							/>
						</InputGroupStyles>

						<InputGroupStyles>
							<label htmlFor="newPassword2">
								??? ???????????? ?????? &#40;??????&#41;
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
						<span>????????????</span>
						<span tw="w-5"></span>
					</ButtonStyles>
				</SubmitStyles>
			</FormStyles>
		</MainStyles>
	);
}

export default ChangeUserInfo;
