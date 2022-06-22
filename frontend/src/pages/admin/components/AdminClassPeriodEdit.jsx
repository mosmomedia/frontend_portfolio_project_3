import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import { WrapperStyles, InputStyles } from '../styles/AdminClassPeriodStyles';

function ClassPeriodEdit({ formData, setFormData, myCurrentClass }) {
	const [startDate, setStartDate] = useState(
		new Date(myCurrentClass.startDate)
	);
	const [endDate, setEndDate] = useState(new Date(myCurrentClass.endDate));

	useEffect(() => {
		setFormData({
			...formData,
			startDate,
			endDate,
		});

		setFormData({
			...formData,
			type: myCurrentClass.type,
			status: myCurrentClass.status,
			weeks: myCurrentClass.weeks,
			month: myCurrentClass.month,
			price: myCurrentClass.price,
			startHour: new Date(myCurrentClass.startHour),
			endHour: new Date(myCurrentClass.endHour),
			startDate,
			endDate,
		});
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

export default ClassPeriodEdit;
