import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import firebase from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import { createNewClass } from '../../contexts/class/ClassActions';
import { createTutor } from '../../contexts/admin/AdminActions';

import SelectOptions from './components/AdminSelectOptions';
import ClassPeriod from './components/AdminClassPeriod';
import ClassHours from './components/AdminClassHours';

import { toast } from 'react-toastify';
import Spinner from '../../components/shared/Spinner';

import {
	WrapperStyles,
	FormStyles,
	WrapperItemStyles,
	LeftItemStyles,
	RightItemStyles,
	InputGroupStyles,
	InputStyles,
	SubmitStyles,
	ButtonStyles,
} from './styles/MyAdminClassRegistrationStyles';

function MyAdminOpenClass() {
	const [isLoading, setIsLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);
	const [user, loading] = useAuthState(firebase.auth);

	const navigate = useNavigate();

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
		homework: true,
		price: 300000,
		isOnAir: false,
		completedAt: -1,
	});

	const {
		title,
		tutor,
		status,
		type,
		month,
		weeks,
		startDate,
		startHour,
		endDate,
		endHour,
		price,
	} = formData;

	useEffect(() => {
		if (
			title &&
			type &&
			status &&
			month &&
			weeks &&
			startDate &&
			startHour &&
			endDate &&
			endHour &&
			price
		) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [
		title,
		type,
		status,
		month,
		weeks,
		startDate,
		startHour,
		endDate,
		endHour,
		price,
	]);

	useEffect(() => {
		if (user) {
			const { displayName } = user;
			setFormData({ ...formData, tutor: displayName });
		}
		// eslint-disable-next-line
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const { tutorId, _id: classId } = await createNewClass(formData);

			const { uid, email, displayName: name } = user;

			// create a new tutor in mongodb
			const { message } = await createTutor({
				firebaseId: uid,
				email,
				name,
				tutorId,
				classId,
			});

			if (message === 'success') {
				toast.success('새 강의를 개설했습니다.');
				navigate('/admin');
			} else {
				toast.error('강의 개설에 문제가 생겼습니다.');
			}
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	const handleChange = ({ target: { id, value } }) => {
		setFormData({ ...formData, [id]: value });
	};

	if (loading || isLoading) return <Spinner />;

	return (
		<WrapperStyles>
			<FormStyles onSubmit={handleSubmit}>
				<h2>강의 개설하기</h2>
				<InputGroupStyles>
					<h4>강사 : {tutor}</h4>
				</InputGroupStyles>

				<WrapperItemStyles>
					<LeftItemStyles>
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
							<label htmlFor="weeks">강의 기간(weeks)</label>

							<SelectOptions
								name="weeksOptions"
								defaultValue={0}
								formData={formData}
								setFormData={setFormData}
							/>
						</InputGroupStyles>
					</LeftItemStyles>
					<RightItemStyles>
						<InputGroupStyles>
							<label htmlFor="month">강의 시작(month)</label>
							<SelectOptions
								name="monthOptions"
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
					</RightItemStyles>
				</WrapperItemStyles>
				<SubmitStyles>
					<ButtonStyles disabled={isDisabled} isDisabled={isDisabled}>
						<span>개설하기</span>
					</ButtonStyles>
				</SubmitStyles>
			</FormStyles>
		</WrapperStyles>
	);
}

export default MyAdminOpenClass;
