import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { WrapperStyles, InputStyles } from '../styles/AdminClassPeriodStyles';

function ClassHours({ formData, setFormData }) {
	const [startHour, setStartHour] = useState(null);
	const [endHour, setEndHour] = useState(null);

	useEffect(() => {
		setFormData({
			...formData,
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
					placeholderText="선택..."
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
					placeholderText="선택..."
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
