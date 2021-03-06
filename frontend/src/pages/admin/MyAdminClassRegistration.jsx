import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import firebase from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAdminContext } from '../../contexts/admin/AdminContext';

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
	const [isDisabled, setIsDisabled] = useState(true);
	const [user, loading] = useAuthState(firebase.auth);

	const { isLoading, myClassList, dispatch } = useAdminContext();

	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		title: '',
		type: -1,
		status: -1,
		month: -1,
		weeks: -1,
		startDate: null,
		endDate: null,
		startHour: null,
		endHour: null,
		tutor: '',
		homework: true,
		price: -1,
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
			type !== -1 &&
			status !== -1 &&
			month !== -1 &&
			weeks !== -1 &&
			price !== -1 &&
			startDate &&
			startHour &&
			endDate &&
			endHour
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
				toast.success('??? ????????? ??????????????????.');
				navigate('/admin');
			} else {
				toast.error('?????? ????????? ????????? ???????????????.');
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
				<h2>?????? ????????????</h2>
				<InputGroupStyles>
					<h4>?????? : {tutor}</h4>
				</InputGroupStyles>

				<WrapperItemStyles>
					<LeftItemStyles>
						<InputGroupStyles>
							<label htmlFor="title">?????? ??????</label>
							<InputStyles
								type="text"
								id="title"
								value={title}
								onChange={handleChange}
								required
							/>
						</InputGroupStyles>

						<InputGroupStyles>
							<label htmlFor="type">?????? ??????</label>
							<SelectOptions
								defaultValue={type}
								name="typeOptions"
								formData={formData}
								setFormData={setFormData}
							/>
						</InputGroupStyles>

						<InputGroupStyles>
							<label htmlFor="status">?????? ??????</label>
							<SelectOptions
								name="statusOptions"
								defaultValue={status}
								formData={formData}
								setFormData={setFormData}
							/>
						</InputGroupStyles>

						<InputGroupStyles>
							<label htmlFor="weeks">?????? ??????(weeks)</label>

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
							<label htmlFor="month">?????? ??????(month)</label>
							<SelectOptions
								name="monthOptions"
								defaultValue={month}
								formData={formData}
								setFormData={setFormData}
							/>
						</InputGroupStyles>

						{/* ?????? ????????? / ????????? */}
						<InputGroupStyles>
							<ClassPeriod formData={formData} setFormData={setFormData} />
						</InputGroupStyles>

						{/* ?????? ?????? ?????? / ?????? ?????? */}
						<InputGroupStyles>
							<ClassHours formData={formData} setFormData={setFormData} />
						</InputGroupStyles>

						<InputGroupStyles>
							<label htmlFor="price">?????? ??????</label>

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
						<span>????????????</span>
					</ButtonStyles>
				</SubmitStyles>
			</FormStyles>
		</WrapperStyles>
	);
}

export default MyAdminOpenClass;
