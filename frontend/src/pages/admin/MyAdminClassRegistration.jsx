import { useState, useEffect } from 'react';

import Spinner from '../../components/shared/Spinner';

import firebase from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import SelectOptions from './components/AdminSelectOptions';
import ClassPeriod from './components/AdminClassPeriod';
import ClassHours from './components/AdminClassHours';

import {
	WrapperStyles,
	FormStyles,
	InputGroupStyles,
	InputStyles,
	SubmitStyles,
	ButtonStyles,
} from './styles/MyAdminClassRegistrationStyles';

function MyAdminOpenClass() {
	const [isDisabled, setIsDisabled] = useState(false);
	const [user, loading] = useAuthState(firebase.auth);

	const [formData, setFormData] = useState({
		title: '',
		type: 'basicClass',
		status: 'pending',
		month: 1,
		weeks: 4,
		startDate: null,
		endDate: null,
		startHour: null,
		endHour: null,
		tutor: '',
		price: 300000,
		isOnAir: false,
		completedAt: -1,
	});

	const { title, tutor } = formData;

	useEffect(() => {
		if (user) {
			const { displayName } = user;
			setFormData({ ...formData, tutor: displayName });
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleChange = ({ target: { id, value } }) => {
		setFormData({ ...formData, [id]: value });
	};

	if (loading) return <Spinner />;

	return (
		<WrapperStyles>
			<FormStyles onSubmit={handleSubmit}>
				<h2>강의 개설하기</h2>
				<InputGroupStyles>
					<h4>강사 : {tutor}</h4>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="title">강의 제목</label>
					<InputStyles
						type="text"
						id="title"
						value={title}
						onChange={handleChange}
						// required
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="type">강의 타입</label>
					<SelectOptions
						defaultValue={0}
						name="typeOptions"
						formData={formData}
						setFormData={setFormData}
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="status">강의 상태</label>
					<SelectOptions
						name="statusOptions"
						defaultValue={1}
						formData={formData}
						setFormData={setFormData}
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="month">강의 시작(month)</label>
					<SelectOptions
						name="monthOptions"
						defaultValue={0}
						formData={formData}
						setFormData={setFormData}
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="weeks">강의 기간(weeks)</label>

					<SelectOptions
						name="weeksOptions"
						defaultValue={0}
						formData={formData}
						setFormData={setFormData}
					/>
				</InputGroupStyles>

				{/* 강의 시작일 / 종료일 */}
				<InputGroupStyles>
					<ClassPeriod formData={formData} setFormData={setFormData} />
				</InputGroupStyles>

				{/* 강의 시작 시간 / 종료 시간 */}
				<InputGroupStyles>
					<ClassHours formData={formData} setFormData={setFormData} />
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="price">강의 가격</label>

					<SelectOptions
						name="priceOptions"
						defaultValue={0}
						formData={formData}
						setFormData={setFormData}
					/>
				</InputGroupStyles>

				<SubmitStyles>
					<ButtonStyles isDisabled={isDisabled}>
						<span>개설하기</span>
					</ButtonStyles>
				</SubmitStyles>
			</FormStyles>
		</WrapperStyles>
	);
}

export default MyAdminOpenClass;
