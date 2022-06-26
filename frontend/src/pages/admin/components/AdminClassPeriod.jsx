import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { WrapperStyles, InputStyles } from '../styles/AdminClassPeriodStyles';

function ClassPeriod({ formData, setFormData }) {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	useEffect(() => {
		setFormData({
			...formData,
			startDate,
			endDate,
		});
	}, [startDate, endDate]);

	return (
		<WrapperStyles>
			<InputStyles>
				<label>강의 시작일</label>

				<DatePicker
					placeholderText="선택..."
					selected={startDate}
					selectsStart
					onChange={(date) => setStartDate(date)}
				/>
			</InputStyles>
			<InputStyles>
				<label>강의 종료일</label>
				<DatePicker
					placeholderText="선택..."
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
