import Select from 'react-select';

const groupOptions = {
	typeOptions: [
		{ value: 'basicClass', label: 'Basic Class', name: 'type' },
		{ value: 'advClass', label: 'Advanced Class', name: 'type' },
		{ value: 'pdClass', label: 'PD Class', name: 'type' },
	],

	statusOptions: [
		{ value: 'open', label: 'Open', name: 'status' },
		{ value: 'pending', label: 'Pending', name: 'status' },
		{ value: 'closed', label: 'Closed', name: 'status' },
		{ value: 'completed', label: 'Completed', name: 'status' },
	],

	weeksOptions: [
		{ value: 4, label: '4주', name: 'weeks' },
		{ value: 8, label: '8주', name: 'weeks' },
	],

	priceOptions: [
		{ value: 300000, label: 300000, name: 'price' },
		{ value: 600000, label: 600000, name: 'price' },
	],

	monthOptions: [
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
	],
};

function SelectOptions({ name, defaultValue, formData, setFormData }) {
	const handleSelectionChange = ({ name, value }) => {
		setFormData({ ...formData, [name]: value });
	};
	return (
		<Select
			defaultValue={groupOptions[name][defaultValue]}
			options={groupOptions[name]}
			onChange={handleSelectionChange}
		/>
	);
}

export default SelectOptions;
