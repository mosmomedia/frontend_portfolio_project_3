import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { WrapperStyles, InputStyles } from '../styles/AdminClassPeriodStyles';

function ClassHours({ formData, setFormData, myCurrentClass }) {
	const [startHour, setStartHour] = useState(
		new Date(myCurrentClass.startHour)
	);
	const [endHour, setEndHour] = useState(new Date(myCurrentClass.endHour));

	useEffect(() => {
		setFormData({
			...formData,
			type: myCurrentClass.type,
			status: myCurrentClass.status,
			weeks: myCurrentClass.weeks,
			month: myCurrentClass.month,
			price: myCurrentClass.price,
			startDate: new Date(myCurrentClass.startDate),
			endDate: new Date(myCurrentClass.endDate),
			startHour,
			endHour,
		});
		// eslint-disable-next-line
	}, [startHour, endHour]);

	return (
		<WrapperStyles>
			<InputStyles>
				<label>강의 시작시간</label>
				<DatePicker
					selected={startHour}
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={30}
					timeCaption="Time"
					dateFormat="h:mm aa"
					onChange={(date) => setStartHour(date)}
				/>
			</InputStyles>
			<InputStyles>
				<label>강의 종료시간</label>
				<DatePicker
					selected={endHour}
					showTimeSelect
					showTimeSelectOnly
					timeIntervals={30}
					timeCaption="Time"
					dateFormat="h:mm aa"
					onChange={(date) => setEndHour(date)}
				/>
			</InputStyles>
		</WrapperStyles>
	);
}

export default ClassHours;
