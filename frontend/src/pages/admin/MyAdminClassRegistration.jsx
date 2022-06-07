import { useState } from 'react';

import Select from 'react-select';
import Spinner from '../../components/shared/Spinner';

import {
	WrapperStyles,
	FormStyles,
	InputGroupStyles,
	InputStyles,
	SubmitStyles,
	ButtonStyles,
} from './styles/MyAdminClassRegistrationStyles';

const typeOptions = [
	{ value: 'basicClass', label: 'Basic Class', name: 'type' },
	{ value: 'advClass', label: 'Advanced Class', name: 'type' },
	{ value: 'pdClass', label: 'PD Class', name: 'type' },
];

const statusOptions = [
	{ value: 'open', label: 'Open', name: 'status' },
	{ value: 'pending', label: 'Pending', name: 'status' },
	{ value: 'closed', label: 'Closed', name: 'status' },
];

const weeksOptions = [
	{ value: 4, label: '4주', name: 'weeks' },
	{ value: 8, label: '8주', name: 'weeks' },
];

const priceOptions = [
	{ value: 300000, label: 300000, name: 'price' },
	{ value: 600000, label: 600000, name: 'price' },
];

const monthOptions = [
	{ value: 1, label: '1월', name: 'month' },
	{ value: 2, label: '2월', name: 'month' },
	{ value: 3, label: '3월', name: 'month' },
	{ value: 4, label: '4월', name: 'month' },
	{ value: 5, label: '5월', name: 'month' },
	{ value: 6, label: '6월', name: 'month' },
	{ value: 7, label: '7월', name: 'month' },
	{ value: 8, label: '8월', name: 'month' },
	{ value: 9, label: '9월', name: 'month' },
	{ value: 10, label: '10월', name: 'month' },
	{ value: 11, label: '11월', name: 'month' },
	{ value: 12, label: '12월', name: 'month' },
];

function MyAdminOpenClass() {
	const [loading, setLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	const [formData, setFormData] = useState({
		title: '',
		type: 'basicClass',
		status: 'pending',
		month: 1,
		weeks: 4,
		period: '',
		hours: '',
		tutor: '',
		price: 300000,
		isOnAir: false,
		completedAt: -1,
	});

	const { title } = formData;

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	const handleChange = ({ target: { id, value } }) => {
		setFormData({ ...formData, [id]: value });
	};

	const handleSelectionChange = ({ name, value }) => {
		setFormData({ ...formData, [name]: value });
	};

	return (
		<WrapperStyles>
			<FormStyles onSubmit={handleSubmit}>
				<h2>강의 개설하기</h2>
				<InputGroupStyles>
					<label htmlFor="title">강의 제목</label>
					<InputStyles
						type="text"
						id="title"
						value={title}
						onChange={handleChange}
						// required
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="type">강의 타입</label>
					<Select
						defaultValue={typeOptions[0]}
						options={typeOptions}
						onChange={handleSelectionChange}
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="status">강의 상태</label>
					<Select
						defaultValue={statusOptions[1]}
						options={statusOptions}
						onChange={handleSelectionChange}
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="month">강의 시작(month)</label>
					<Select
						defaultValue={monthOptions[0]}
						options={monthOptions}
						onChange={handleSelectionChange}
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="weeks">강의 기간(weeks)</label>
					<Select
						defaultValue={weeksOptions[0]}
						options={weeksOptions}
						onChange={handleSelectionChange}
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="price">강의 가격</label>
					<Select
						defaultValue={priceOptions[0]}
						options={priceOptions}
						onChange={handleSelectionChange}
					/>
				</InputGroupStyles>

				<SubmitStyles>
					<ButtonStyles isDisabled={isDisabled}>
						<span>개설하기</span>
					</ButtonStyles>
				</SubmitStyles>
			</FormStyles>
		</WrapperStyles>
	);
}

export default MyAdminOpenClass;
