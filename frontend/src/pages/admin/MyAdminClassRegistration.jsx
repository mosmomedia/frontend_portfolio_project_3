import { useState } from 'react';

import {
	WrapperStyles,
	FormStyles,
	InputGroupStyles,
	InputStyles,
	SubmitStyles,
	ButtonStyles,
} from './styles/MyAdminSignInStyles';

function MyAdminOpenClass() {
	const [loading, setLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	const [formData, setFormData] = useState({
		title: '',
		type: '',
		status: '',
		month: null,
		weeks: null,
		period: '',
		hours: '',
		tutor: '',
		price: null,
		isOnAir: false,
		completedAt: null,
	});

	const { title } = formData;

	const handleSubmit = (params) => {};

	const handleChange = ({ target: { id, value } }) => {
		setFormData({ ...formData, [id]: value });
	};
	return (
		<WrapperStyles>
			<FormStyles onSubmit={handleSubmit}>
				<h2>강의 개설하기</h2>
				<InputGroupStyles>
					<label htmlFor="title">강의 제목</label>
					<InputStyles
						type="text"
						id="title"
						value={title}
						onChange={handleChange}
						required
					/>
				</InputGroupStyles>

				<SubmitStyles>
					<ButtonStyles isDisabled={isDisabled}>
						<span>로그인</span>
						<span tw="w-5"></span>
					</ButtonStyles>
				</SubmitStyles>
			</FormStyles>
		</WrapperStyles>
	);
}

export default MyAdminOpenClass;
