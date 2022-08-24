import { FaRss } from 'react-icons/fa';
import { toast } from 'react-toastify';

import {
	updateClass,
	handleOnairClass,
} from '../../../contexts/class/ClassActions';

import Spinner from '../../../components/shared/Spinner';

import {
	CardStyles,
	LeftItemStyles,
	RightItemStyles,
	MyButtonStyles,
} from '../styles/MyAdminClassHeaderStyles';

function MyClassCard({
	value: { currentClass, dispatch, myClassList, isLoading },
}) {
	const {
		_id,
		title,
		type,
		status,
		weeks,
		startDate,
		endDate,
		startHour,
		endHour,
		isOnAir,
		completedAt,
		classDetail,
	} = currentClass;

	const dateToString = (date) => {
		const formattedDateKR = new Intl.DateTimeFormat('ko-KR').format(date);
		const formattedWeekdayKR = new Intl.DateTimeFormat('ko-KR', {
			weekday: 'short',
		}).format(date);

		const formattedDate = `${formattedDateKR} (${formattedWeekdayKR})`;

		return formattedDate;
	};

	const hourToString = (hour) => {
		const hrs = hour.getHours();
		const min = hour.getMinutes();
		return `${hrs < 10 ? hrs.toString().padStart(2, '0') : hrs}:${
			min < 10 ? min.toString().padStart(2, '0') : min
		}`;
	};

	const fmStartDate = dateToString(new Date(startDate));
	const fmEndDate = dateToString(new Date(endDate));

	const fmStartHour = hourToString(new Date(startHour));
	const fmEndHour = hourToString(new Date(endHour));

	const handleOpenClassClick = async () => {
		dispatch({ type: 'LOADING' });

		try {
			const currentAt = completedAt + 1;

			classDetail[currentAt].isOpen = true;

			const { message } = await handleOnairClass(_id, {
				isOnAir: true,
				classDetail,
			});

			if (message === 'success') {
				const updatedClass = { ...currentClass, isOnAir: true, classDetail };

				const updatedMyClassList = myClassList.map((item) => {
					if (item._id === _id) {
						return updatedClass;
					} else {
						return item;
					}
				});

				dispatch({
					type: 'UPDATE_CLASS',
					payload: { updatedMyClassList, updatedClass },
				});

				toast.success('수업을 시작합니다.');
			}
		} catch (error) {
			console.log(error);
		}

		dispatch({ type: 'OFF_LOADING' });
	};

	const handleCloseClassClick = async () => {
		dispatch({ type: 'LOADING' });

		try {
			const currentAt = completedAt + 1;

			classDetail[currentAt].isOpen = false;
			classDetail[currentAt].isCompleted = true;

			const updatedformData = {
				isOnAir: false,
				completedAt: currentAt,
				classDetail,
				status: currentAt + 1 === weeks ? 'completed' : status,
			};

			const { message } = await handleOnairClass(_id, updatedformData);

			if (message === 'success') {
				const updatedClass = {
					...currentClass,
					...updatedformData,
				};

				const updatedMyClassList = myClassList.map((item) => {
					if (item._id === _id) {
						return updatedClass;
					} else {
						return item;
					}
				});

				dispatch({
					type: 'UPDATE_CLASS',
					payload: { updatedMyClassList, updatedClass },
				});

				toast.success('수업을 종료합니다.');
			}
		} catch (error) {
			console.log(error);
		}

		dispatch({ type: 'OFF_LOADING' });
	};

	if (isLoading) return <Spinner />;

	return (
		<CardStyles variant={type}>
			{/* left item - title, tutor, hours, period  */}
			<LeftItemStyles>
				<div className="headerTitle">
					<h2>{title}</h2>
					{isOnAir && <FaRss size="22" />}
				</div>
				<div>
					<div>
						수강 시간 : {fmStartHour} - {fmEndHour}
					</div>
					<div id="fm_date">
						<div>수강 기간 : {fmStartDate} - </div>
						<div>{fmEndDate}</div>
					</div>
				</div>
			</LeftItemStyles>
			{/* right item - weeks, price, checkout btn */}
			<RightItemStyles>
				<h2>
					{isOnAir ? completedAt + 2 : completedAt + 1} / {weeks}
				</h2>

				{status === 'completed' ? (
					<MyButtonStyles isCompleted={true} disabled>
						수업 완료
					</MyButtonStyles>
				) : isOnAir ? (
					<MyButtonStyles onClick={handleCloseClassClick}>
						수업 종료
					</MyButtonStyles>
				) : (
					<MyButtonStyles onClick={handleOpenClassClick}>
						수업 시작
					</MyButtonStyles>
				)}
			</RightItemStyles>
		</CardStyles>
	);
}

export default MyClassCard;
