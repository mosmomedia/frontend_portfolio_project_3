import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { WrapperStyles, InputStyles } from '../styles/AdminClassPeriodStyles';

function ClassPeriod({ formData, setFormData }) {
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	useEffect(() => {
		setFormData({
			...formData,
			startDate,
			endDate,
		});
		// eslint-disable-next-line
	}, [startDate, endDate]);

	return (
		<WrapperStyles>
			<InputStyles>
				<label>강의 시작일</label>
				<DatePicker
					selected={startDate}
					selectsStart
					onChange={(date) => setStartDate(date)}
				/>
			</InputStyles>
			<InputStyles>
				<label>강의 종료일</label>
				<DatePicker
					selected={endDate}
					selectsEnd
					minDate={startDate}
					onChange={(date) => setEndDate(date)}
				/>
			</InputStyles>
		</WrapperStyles>
	);
}

export default ClassPeriod;
