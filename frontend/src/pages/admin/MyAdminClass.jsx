import React from 'react';

import { useAdminContext } from '../../contexts/admin/AdminContext';

import 'twin.macro';
import 'styled-components/macro';

function MyAdminClass() {
	const { isLoading, admin, myClassList } = useAdminContext();
	return (
		<div tw="py-[12vh]">
			<div tw="space-y-4 max-w-sm mx-auto bg-white py-8 px-4  min-w-[380px] md:min-w-[480px] lg:min-w-[920px] lg:p-10 lg:space-y-10"></div>
		</div>
	);
}

export default MyAdminClass;
