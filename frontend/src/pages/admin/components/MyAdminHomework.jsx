import {
	WrapperStyles,
	BoxWrapperStyles,
	BoxStyles,
} from '../styles/MyAdminClassCheckInStyles';

function Homework({ myClass: { completedAt, classDetail } }) {
	// * homeworkAt
	const homeworkAt = -1;

	return (
		<WrapperStyles>
			<h3>과제 체크 현황 (서비스 준비 중)</h3>
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
