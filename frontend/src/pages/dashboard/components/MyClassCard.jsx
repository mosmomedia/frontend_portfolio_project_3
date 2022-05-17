import React from 'react';

import {
	CardStyles,
	LeftItemStyles,
	RightItemStyles,
	ButtonStyles,
} from '../styles/MyClassCardStyles';

function MyClassCard({ item: { myClass } }) {
	const { title, type, weeks, hours, period, tutor, isOnAir, completedAt } =
		myClass;
	return (
		<CardStyles variant={type}>
			{/* left item - title, tutor, hours, period  */}
			<LeftItemStyles>
				<h2>{title}</h2>
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
				// onClick={handleOnClick}
				>
					강의실 입장
				</ButtonStyles>
			</RightItemStyles>
		</CardStyles>
	);
}

export default MyClassCard;
