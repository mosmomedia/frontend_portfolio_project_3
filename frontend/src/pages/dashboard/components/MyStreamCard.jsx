import { FaRss } from 'react-icons/fa';
import { toast } from 'react-toastify';

import tw from 'twin.macro';
import {
	CardStyles,
	LeftItemStyles,
	RightItemStyles,
	MyButtonStyles,
} from '../styles/MyClassCardStyles';

function MyClassCard({ myClass }) {
	const {
		title,
		type,
		status,
		weeks,
		startDate,
		endDate,
		startHour,
		endHour,
		tutor,
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

	// ! enter on-Air room
	const handleClick = (e) => {
		if (isOnAir) {
			toast('서비스 준비 중입니다.');
		}
	};

	return (
		<CardStyles variant={type} add_styles={tw`rounded-b-none`}>
			{/* left item - title, tutor, hours, period  */}
			<LeftItemStyles>
				<div className="headerTitle">
					<h2>{title}</h2>
					{/* {isOnAir && <img src={OnAirIcon} alt="streamingNow" />} */}
					{isOnAir && <FaRss size="22" />}
				</div>
				<div>
					<h3>강사 : {tutor}</h3>

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
				<h2>
					{isOnAir ? completedAt + 2 : completedAt + 1} / {weeks}
				</h2>
				{status === 'completed' ? (
					<MyButtonStyles>수업 종료</MyButtonStyles>
				) : (
					<MyButtonStyles
						onClick={handleClick}
						isOnAir={isOnAir}
						disabled={!isOnAir}
					>
						수업 참여
					</MyButtonStyles>
				)}
			</RightItemStyles>
		</CardStyles>
	);
}

export default MyClassCard;
