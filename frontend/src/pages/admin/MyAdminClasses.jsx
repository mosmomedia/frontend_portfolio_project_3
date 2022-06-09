import React from 'react';

import { useAdminContext } from '../../contexts/admin/AdminContext';

import AdminClassCard from './components/AdminClassCard';

import 'twin.macro';
import 'styled-components/macro';

function MyAdminClass() {
	const { myClassList } = useAdminContext();
	return (
		<div tw="py-[12vh] lg:grid lg:place-content-center lg:h-screen lg:text-sm">
			<div tw="space-y-10 max-w-4xl mx-auto rounded bg-white py-8 px-4 w-[90%] md:w-[80%] lg:min-w-[640px] lg:p-5 lg:space-y-10">
				<div>
					<h3>강의 리스트</h3>
				</div>
				<div tw="space-y-5">
					{myClassList.map((item) => (
						<AdminClassCard key={item._id} item={item} />
					))}
				</div>
			</div>
		</div>
	);
}

export default MyAdminClass;
