import OnAirIcon from '../../../assets/icons/ico_onAir.png';
import tw, { styled } from 'twin.macro';
import {
	CardStyles,
	LeftItemStyles,
	RightItemStyles,
	ButtonStyles,
} from '../styles/MyClassCardStyles';

function MyClassCard({ myClass }) {
	const { title, type, weeks, hours, period, tutor, isOnAir, completedAt } =
		myClass;
	const handleClick = (e) => {
		if (isOnAir) {
			console.log(e.target);
		}
	};

	return (
		<CardStyles variant={type} add_styles={tw`rounded-b-none`}>
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
				<ButtonStyles
					onClick={handleClick}
					isOnAir={isOnAir}
					disabled={!isOnAir}
				>
					수업 참여
				</ButtonStyles>
			</RightItemStyles>
		</CardStyles>
	);
}

export default MyClassCard;
