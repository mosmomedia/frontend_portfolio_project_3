import { Link } from 'react-router-dom';
import OnAirIcon from '../../../assets/icons/ico_onAir.png';

import {
	CardStyles,
	LeftItemStyles,
	RightItemStyles,
	ButtonStyles,
} from '../styles/MyClassCardStyles';

const URI = '/dashboard/my-classroom/stream/';

function MyClassCard({ item: { myClass } }) {
	const {
		_id,
		title,
		type,
		weeks,
		hours,
		period,
		tutor,
		isOnAir,
		completedAt,
	} = myClass;

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
					<div>수강 시간 : {hours}</div>
					<div>수강 기간 : {period}</div>
				</div>
			</LeftItemStyles>
			{/* right item - weeks, price, checkout btn */}
			<RightItemStyles>
				<h2>
					{completedAt} / {weeks}
				</h2>
				<Link to={URI + _id}>
					<ButtonStyles>강의실 입장</ButtonStyles>
				</Link>
			</RightItemStyles>
		</CardStyles>
	);
}

export default MyClassCard;
