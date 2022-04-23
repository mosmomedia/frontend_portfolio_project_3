import React from 'react';
import tw, { styled } from 'twin.macro';

const CardStyles = styled.div`
	border: 1px solid rgba(255, 0, 0, 0.4);
`;

const LeftItemStyles = styled.div``;
const RightItemStyles = styled.div``;

function ClassCard({
	value: { title, type, status, month, weeks, hours, period, tutor, price },
}) {
	return (
		<CardStyles>
			{/* left item - title, tutor, hours, period  */}
			<LeftItemStyles>
				<h2>{title}</h2>
				<div>
					<div>강사 : {tutor}</div>
					<div>수강 시간 : {hours}</div>
					<div>수강 기간 : {period}</div>
				</div>
			</LeftItemStyles>
			{/* right item - weeks, price, checkout btn */}
			<RightItemStyles>
				<h2>{weeks}주</h2>
				<div>
					<div>{price} 원</div>
					<button>신청하기</button>
				</div>
			</RightItemStyles>
		</CardStyles>
	);
}

export default ClassCard;
