import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RiDeleteBin6Line } from 'react-icons/ri';

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
			toast.success('강의를 변경 했습니다.');
			navigate('/admin/classes');
		} catch (error) {
			console.log(error);
			toast.error('강의 개설에 문제가 생겼습니다.');
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
				toast.success('삭제가 완료 되었습니다.');
				navigate('/admin/classes');
			}
		} catch (error) {
			console.log(error);
			toast.error('강의 삭제에 오류가 있습니다.');
		}
	};

	if (isLoading || myCurrentClass === null) return <Spinner />;

	return (
		<WrapperStyles>
			<FormStyles onSubmit={handleSubmit}>
				<DeleteBtnStyles onClick={handleDeleteBtn}>
					<RiDeleteBin6Line size={18} />
				</DeleteBtnStyles>
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
							<ClassPeriod
								status="edit"
								myCurrentClass={myCurrentClass}
								formData={formData}
								setFormData={setFormData}
							/>
						</InputGroupStyles>

						{/* 강의 시작 시간 / 종료 시간 */}
						<InputGroupStyles>
							<ClassHours
								status="edit"
								myCurrentClass={myCurrentClass}
								formData={formData}
								setFormData={setFormData}
							/>
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
