import { FaRss } from '@react-icons/all-files/fa/FaRss';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';

import {
	WrapperStyles,
	BoxWrapperStyles,
	BoxStyles,
} from '../styles/MyAdminClassCheckInStyles';

function CheckIn({ myClass: { currentClass } }) {
	const { completedAt, classDetail, isOnAir } = currentClass;
	const getClassInfo = [];

	classDetail.forEach(({ isOpen, isCompleted, classOrder }) => {
		if (isCompleted) {
			getClassInfo.push({ status: 'completed' });
		} else if (isOnAir && isOpen && completedAt + 1 === classOrder) {
			getClassInfo.push({ status: 'onAir' });
		} else if (!isOnAir && !isOpen && completedAt + 1 === classOrder) {
			getClassInfo.push({ status: 'offAir' });
		} else {
			getClassInfo.push({ status: 'wating' });
		}
	});
	return (
		<WrapperStyles>
			<h3>수업 현황</h3>
			<BoxWrapperStyles>
				{getClassInfo.map(({ status }, id) => (
					<BoxStyles key={id} variant={status}>
						{status === 'completed' && <FaCheck size="32" color="4abb9b" />}
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
