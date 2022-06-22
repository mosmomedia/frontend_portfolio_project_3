import { useState, useEffect } from 'react';
import Select from 'react-select';
import Spinner from '../../../components/shared/Spinner';

import GroupOptions from './AdminSelectOptionData';

function SelectOptionsEdit({ name, defaultValue, formData, setFormData }) {
	const [selectOrder, setSelectOrder] = useState(null);

	useEffect(() => {
		if (defaultValue) {
			for (let i = 0; i < GroupOptions[name].length; i++) {
				if (GroupOptions[name][i]['value'] === defaultValue) {
					return setSelectOrder(i);
				}
			}
		}
	}, [defaultValue]);

	const handleSelectionChange = ({ name, value }) => {
		setFormData({ ...formData, [name]: value });
	};

	if (defaultValue === null || selectOrder === null) return <Spinner />;

	return (
		<Select
			placeholder="선택..."
			defaultValue={GroupOptions[name][selectOrder]}
			options={GroupOptions[name]}
			onChange={handleSelectionChange}
		/>
	);
}

export default SelectOptionsEdit;
