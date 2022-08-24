import { Link, useNavigate } from 'react-router-dom';

import { FaRss, FaFlagCheckered, FaEdit } from 'react-icons/fa';
import { useAdminContext } from '../../../contexts/admin/AdminContext';

import {
	CardStyles,
	LeftItemStyles,
	RightItemStyles,
	ButtonStyles,
	EditBtnStyles,
} from '../styles/AdminClassCardStyles';

function AdminClassCard({ item }) {
	const { dispatch } = useAdminContext();

	const navigate = useNavigate();

	const {
		_id,
		title,
		type,
		status,
		startDate,
		startHour,
		endDate,
		endHour,
		isOnAir,
	} = item;

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

	const handleOnClick = () => {
		dispatch({ type: 'GET_MY_CURRENT_CLASS', payload: item });
		navigate(`/admin/registration/edit/${_id}`);
	};

	return (
		<CardStyles variant={type}>
			{/* left item - title, tutor, hours, period  */}
			<LeftItemStyles>
				<div className="headerTitle">
					<h2>{title}</h2>

					{status === 'completed' && (
						<FaFlagCheckered size="18" className="completed" />
					)}
					{isOnAir && <FaRss size="18" />}
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
				<EditBtnStyles onClick={handleOnClick}>
					<FaEdit size="18" />
				</EditBtnStyles>
				<Link to={`/admin/class/${_id}`}>
					<ButtonStyles>강의실</ButtonStyles>
				</Link>
			</RightItemStyles>
		</CardStyles>
	);
}

export default AdminClassCard;
