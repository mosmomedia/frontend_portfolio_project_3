import React from 'react';
import {
	WrapperStyles,
	BoxWrapperStyles,
	BoxStyles,
} from '../styles/HomeworkStyles';

function Homework({ myClass: { completedAt, classDetail } }) {
	// * homeworkAt
	const homeworkAt = -1;

	return (
		<WrapperStyles>
			<h3>과제 제출 현황</h3>
			<BoxWrapperStyles>
				{classDetail.map((item, id) => (
					<BoxStyles key={id}>
						<span className="submitBtn">{homeworkAt + 1 === id && '+'}</span>
					</BoxStyles>
				))}
			</BoxWrapperStyles>
		</WrapperStyles>
	);
}

export default Homework;
