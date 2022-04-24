import React from 'react';
import tw, { styled } from 'twin.macro';

import Button from '../../components/shared/Button';

const CardStyles = styled.div`
	${tw`flex justify-between rounded-md p-4`}

	h2 {
		${tw`text-white text-[1.375rem] `}
		text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.5);
	}

	h3 {
		${tw`text-base font-normal`}
	}

	${
		({ variant }) => variant === 'basicClass' && tw`bg-basic`
		// tw`bg-gradient-to-br from-[#ffcd00] to-[#fccd5f]`
	}

	${({ variant }) =>
		variant === 'advClass' && tw`bg-gradient-to-tr from-[#5ed8b5] to-[#5bd8b5]`}
	${({ variant }) => variant === 'debutClass' && tw`bg-debut text-white`}
`;

const LeftItemStyles = styled.div`
	${tw`space-y-6`}
	div {
		${tw`space-y-[1px]`}
	}
`;
const RightItemStyles = styled.div`
	${tw`flex flex-col justify-between items-center text-center`}

	h2 {
		${tw`text-2xl tracking-wider`}
	}

	h3 {
		${tw`text-lg`}
	}
`;

function ClassCard({
	value: { title, type, status, month, weeks, hours, period, tutor, price },
}) {
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
				<h2>{weeks}주</h2>
				<h3>{price.toLocaleString('ko-KR')}원</h3>
				<Button variant="primary">신청하기</Button>
			</RightItemStyles>
		</CardStyles>
	);
}

export default ClassCard;
