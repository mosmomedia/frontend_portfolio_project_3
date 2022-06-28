import Select from 'react-select';

import GroupOptions from './AdminSelectOptionData';

function SelectOptions({ name, defaultValue, formData, setFormData }) {
	const handleSelectionChange = ({ name, value }) => {
		setFormData({ ...formData, [name]: value });
	};

	return (
		<Select
			placeholder="선택..."
			defaultValue={GroupOptions[name][defaultValue]}
			options={GroupOptions[name]}
			onChange={handleSelectionChange}
		/>
	);
}

export default SelectOptions;
