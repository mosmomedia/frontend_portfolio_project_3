import { Link } from 'react-router-dom';
import OnAirIcon from '../../../assets/icons/ico_onAir.png';

import {
	CardStyles,
	LeftItemStyles,
	RightItemStyles,
	ButtonStyles,
} from '../styles/MyClassCardStyles';

const URI = '/dashboard/my-classroom/stream/';

function MyClassCard({ item: myClass }) {
	const {
		_id,
		title,
		type,
		status,
		weeks,
		tutor,
		startDate,
		startHour,
		endDate,
		endHour,
		isOnAir,
		completedAt,
	} = myClass;

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

	return (
		<CardStyles variant={type}>
			{/* left item - title, tutor, hours, period  */}
			<LeftItemStyles>
				<div className="headerTitle">
					<h2>{title}</h2>
					{isOnAir && <img src={OnAirIcon} alt="streamingNow" />}
				</div>
				<div>
					<h3>강사 : {tutor}</h3>
					<div>
						수강 시간 : {fmStartHour} - {fmEndHour}
					</div>
					<div id="fm_date">
						<div>수강 기간 : </div>
						<div>{fmStartDate} - </div>
						<div>{fmEndDate}</div>
					</div>
				</div>
			</LeftItemStyles>
			{/* right item - weeks, price, checkout btn */}
			<RightItemStyles>
				<h2>
					{isOnAir ? completedAt + 2 : completedAt + 1} / {weeks}
				</h2>
				<Link to={URI + _id}>
					<ButtonStyles variant={status === 'completed' && 'history'}>
						강의실 입장
					</ButtonStyles>
				</Link>
			</RightItemStyles>
		</CardStyles>
	);
}

export default MyClassCard;
