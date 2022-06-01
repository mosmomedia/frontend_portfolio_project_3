import { FaCheck, FaTimes, FaRss } from 'react-icons/fa';

import {
	WrapperStyles,
	BoxWrapperStyles,
	BoxStyles,
} from '../styles/HomeworkStyles';

function CheckIn({ myClass: { currentClass, userObjectId } }) {
	const { completedAt, classDetail, isOnAir } = currentClass;

	const getClassInfo = [];

	classDetail.forEach((item) => {
		if (item.isCompleted && completedAt >= item.classOrder) {
			const findStudentId = item.checkedInStudents.findIndex(
				(std) => std === userObjectId
			);

			if (findStudentId !== -1) {
				getClassInfo.push({ status: 'attended' });
			} else {
				getClassInfo.push({ status: 'absent' });
			}
		} else if (isOnAir && item.isOpen && completedAt + 1 === item.classOrder) {
			getClassInfo.push({ status: 'onAir' });
		} else if (
			!isOnAir &&
			!item.isOpen &&
			completedAt + 1 === item.classOrder
		) {
			getClassInfo.push({ status: 'offAir' });
		} else {
			getClassInfo.push({ status: 'wating' });
		}
	});

	return (
		<WrapperStyles>
			<h3>출석 및 수업 현황</h3>
			<BoxWrapperStyles>
				{getClassInfo.map(({ status }, id) => (
					<BoxStyles key={id} variant={status}>
						{status === 'attended' && <FaCheck size="32" color="4abb9b" />}
						{status === 'absent' && <FaTimes size="32" />}
						{status === 'onAir' && <FaRss size="28" color="#ff5263" />}
						{status === 'offAir' && <FaRss size="28" />}
						<span className="orderNum">{id + 1}</span>
					</BoxStyles>
				))}
			</BoxWrapperStyles>
		</WrapperStyles>
	);
}

export default CheckIn;
