import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/auth/AuthContext';

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
} from '../styles/ChangeUserInfo';

function ChangeUserInfo() {
	const { isLoading, user } = useAuthContext();
	const [loading, setLoading] = useState(false);
	const [isChecked, setIsChecked] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
	console.log(user);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		newPassword: '',
		newPassword2: '',
		name: '',
		nickname: '',
		phone: '',
		isAdmin: false,
	});

	const { email, password, newPassword, newPassword2, name, nickname, phone } =
		formData;

	useEffect(() => {}, []);

	const handleSubmit = (params) => {};
	const handleChange = (params) => {};

	if (isLoading) return <Spinner />;

	return (
		<MainStyles>
			<FormStyles onSubmit={handleSubmit}>
				<h2>정보 변경</h2>
				<InputGroupStyles>
					<label htmlFor="email">
						<span tw="text-keyColor">*</span> 이메일
					</label>
					<InputStyles
						type="email"
						id="email"
						value={email}
						onChange={handleChange}
						isRequired={true}
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
						isRequired={true}
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
						isRequired={true}
						required
					/>
				</InputGroupStyles>

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
					<InputStyles
						type="tel"
						id="phone"
						value={phone}
						onChange={handleChange}
					/>
				</InputGroupStyles>

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
					<label htmlFor="newPassword2">새 비밀번호 확인</label>
					<InputStyles
						type="password"
						id="newPassword2"
						value={newPassword2}
						onChange={handleChange}
					/>
				</InputGroupStyles>

				<SubmitStyles>
					<ButtonStyles isDisabled={isDisabled}>
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
