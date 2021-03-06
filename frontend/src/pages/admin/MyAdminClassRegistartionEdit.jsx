import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RiDeleteBin6Line } from 'react-icons/ri';

import firebase from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAdminContext } from '../../contexts/admin/AdminContext';

import { updateClass, removeClass } from '../../contexts/class/ClassActions';

import { removeClassInTutorDb } from '../../contexts/admin/AdminActions';

import SelectOptions from './components/AdminSelectOptionsEdit';
import ClassPeriod from './components/AdminClassPeriodEdit';
import ClassHours from './components/AdminClassHoursEdit';

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
	DeleteBtnStyles,
} from './styles/MyAdminClassRegistrationStyles';

function MyAdminOpenClass() {
	const [isDisabled, setIsDisabled] = useState(true);

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
			type !== null &&
			status !== null &&
			month !== null &&
			weeks !== null &&
			price !== null &&
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

			setFormData({
				...formData,
				title,
				tutor,
				status,
				type,
				month,
				weeks,
				startDate: new Date(startDate),
				startHour: new Date(startHour),
				endDate: new Date(endDate),
				endHour: new Date(endHour),
				price,
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
			const { _id: classId } = myCurrentClass;
			const updatedClass = await updateClass(classId, formData);

			const updatedMyClassList = myClassList.map((item) => {
				if (item._id === classId) {
					return updatedClass;
				} else {
					return item;
				}
			});

			dispatch({
				type: 'UPDATE_CLASS',
				payload: { updatedMyClassList, updatedClass },
			});
			toast.success('????????? ?????? ????????????.');
			navigate('/admin/classes');
		} catch (error) {
			console.log(error);
			toast.error('?????? ????????? ????????? ???????????????.');
		}
		dispatch({ type: 'OFF_LOADING' });
	};

	const handleChange = ({ target: { id, value } }) => {
		setFormData({ ...formData, [id]: value });
	};

	const handleDeleteBtn = async () => {
		try {
			const { _id: classId, tutorId } = myCurrentClass;
			const { message: deleteMyClass } = await removeClass(classId);
			const { message: deleteMyClassInTutorDb } = await removeClassInTutorDb(
				tutorId,
				classId
			);

			if (deleteMyClass === 'success' && deleteMyClassInTutorDb === 'success') {
				const payload = myClassList.filter((item) => item._id !== classId);

				dispatch({ type: 'DELETE_MY_CURRENT_CLASS', payload });
				toast.success('????????? ?????? ???????????????.');
				navigate('/admin/classes');
			}
		} catch (error) {
			console.log(error);
			toast.error('?????? ????????? ????????? ????????????.');
		}
	};

	if (isLoading || myCurrentClass === null) return <Spinner />;

	return (
		<WrapperStyles>
			<FormStyles onSubmit={handleSubmit}>
				<DeleteBtnStyles onClick={handleDeleteBtn}>
					<RiDeleteBin6Line size={18} />
				</DeleteBtnStyles>
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
							<ClassPeriod
								status="edit"
								myCurrentClass={myCurrentClass}
								formData={formData}
								setFormData={setFormData}
							/>
						</InputGroupStyles>

						{/* ?????? ?????? ?????? / ?????? ?????? */}
						<InputGroupStyles>
							<ClassHours
								status="edit"
								myCurrentClass={myCurrentClass}
								formData={formData}
								setFormData={setFormData}
							/>
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
