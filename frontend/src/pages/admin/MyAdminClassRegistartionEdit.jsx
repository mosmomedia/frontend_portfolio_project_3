import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import firebase from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAdminContext } from '../../contexts/admin/AdminContext';

import { createNewClass } from '../../contexts/class/ClassActions';
import { createTutor } from '../../contexts/admin/AdminActions';

import AdminSelectOptionData from './components/AdminSelectOptionData';
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
	const [isDisabled, setIsDisabled] = useState(true);
	const [user, loading] = useAuthState(firebase.auth);

	const { isLoading, admin, myClassList, myCurrentClass, dispatch } =
		useAdminContext();

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		title: '',
		type: null,
		status: null,
		month: null,
		weeks: null,
		startDate: null,
		endDate: null,
		startHour: null,
		endHour: null,
		tutor: '',
		homework: true,
		price: null,
		isOnAir: false,
		completedAt: null,
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
		if (myCurrentClass) {
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
			} = myCurrentClass;

			const {
				monthOptions,
				statusOptions,
				weeksOptions,
				typeOptions,
				priceOptions,
			} = AdminSelectOptionData;

			let typeNum, monthNum, statusNum, weeksNum, priceNum;

			// find type order
			for (let i = 0; i < typeOptions.length; i++) {
				if (typeOptions[i].value === type) {
					typeNum = i;
				}
			}

			// find status order
			for (let i = 0; i < statusOptions.length; i++) {
				if (statusOptions[i].value === status) {
					statusNum = i;
				}
			}

			// find weeks order
			for (let i = 0; i < weeksOptions.length; i++) {
				if (weeksOptions[i].value === weeks) {
					weeksNum = i;
				}
			}

			// find month order
			for (let i = 0; i < monthOptions.length; i++) {
				if (monthOptions[i].value === month) {
					monthNum = i;
				}
			}

			// find price order
			for (let i = 0; i < priceOptions.length; i++) {
				if (priceOptions[i].value === price) {
					priceNum = i;
				}
			}

			console.log(startDate);

			setFormData({
				...formData,
				title,
				tutor,
				status: statusNum,
				type: typeNum,
				month: monthNum,
				weeks: weeksNum,
				startDate,
				startHour,
				endDate,
				endHour,
				price: priceNum,
			});
		}
	}, []);

	useEffect(() => {
		if (admin && !myCurrentClass) {
			navigate('/admin/classes');
		}

		// eslint-disable-next-line
	}, [admin, myCurrentClass]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch({ type: 'LOADING' });
		try {
			const newClass = await createNewClass(formData);

			const { tutorId, _id: classId } = newClass;

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
				const payload = [...myClassList, newClass];
				dispatch({ type: 'ADD_NEW_CLASS', payload });
				toast.success('새 강의를 개설했습니다.');
				navigate('/admin');
			} else {
				toast.error('강의 개설에 문제가 생겼습니다.');
			}
		} catch (error) {
			console.log(error);
		}
		dispatch({ type: 'OFF_LOADING' });
	};

	const handleChange = ({ target: { id, value } }) => {
		setFormData({ ...formData, [id]: value });
	};

	if (loading || isLoading) return <Spinner />;

	return (
		<WrapperStyles>
			<FormStyles onSubmit={handleSubmit}>
				<h2>강의 수정하기</h2>
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
								defaultValue={type}
								name="typeOptions"
								formData={formData}
								setFormData={setFormData}
							/>
						</InputGroupStyles>

						<InputGroupStyles>
							<label htmlFor="status">강의 상태</label>
							<SelectOptions
								name="statusOptions"
								defaultValue={status}
								formData={formData}
								setFormData={setFormData}
							/>
						</InputGroupStyles>

						<InputGroupStyles>
							<label htmlFor="weeks">강의 기간(weeks)</label>

							<SelectOptions
								name="weeksOptions"
								defaultValue={weeks}
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
								defaultValue={month}
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
								defaultValue={price}
								formData={formData}
								setFormData={setFormData}
							/>
						</InputGroupStyles>
					</RightItemStyles>
				</WrapperItemStyles>
				<SubmitStyles>
					<ButtonStyles disabled={isDisabled} isDisabled={isDisabled}>
						<span>변경하기</span>
					</ButtonStyles>
				</SubmitStyles>
			</FormStyles>
		</WrapperStyles>
	);
}

export default MyAdminOpenClass;
