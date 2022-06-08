import { useState } from 'react';
import Spinner from '../../../components/shared/Spinner';

import {
	CardStyles,
	LeftItemStyles,
	RightItemStyles,
	ButtonStyles,
} from '../styles/AdminClassCardStyles';

function AdminClassCard({ item }) {
	const [isLoading, setIsLoading] = useState(false);

	const { title, type, weeks, startDate, startHour, endDate, endHour } = item;

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

	const handleOnClick = (params) => {};

	if (isLoading) return <Spinner />;
	return (
		<CardStyles variant={type}>
			{/* left item - title, tutor, hours, period  */}
			<LeftItemStyles>
				<h2>{title}</h2>
				<div>
					<div>
						수강 시간 : {fmStartHour} - {fmEndHour}
					</div>
					<div>
						수강 기간 : {fmStartDate} - {fmEndDate}
					</div>
				</div>
			</LeftItemStyles>
			{/* right item - weeks, price, checkout btn */}
			<RightItemStyles>
				<h2>{weeks}주</h2>
				<ButtonStyles onClick={handleOnClick}>강의실</ButtonStyles>
			</RightItemStyles>
		</CardStyles>
	);
}

export default AdminClassCard;
