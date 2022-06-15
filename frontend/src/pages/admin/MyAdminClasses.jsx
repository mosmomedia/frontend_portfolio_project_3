import { useAdminContext } from '../../contexts/admin/AdminContext';
import AdminClassCard from './components/AdminClassCard';

import {
	WrapperStyles,
	MainStyles,
	CardWrapperStyles,
} from './styles/MyAdminClassesStyles';

import 'twin.macro';
import 'styled-components/macro';

function MyAdminClass() {
	const { myClassList } = useAdminContext();
	return (
		<WrapperStyles>
			<MainStyles>
				<div>
					<h3>강의 리스트</h3>
				</div>
				<CardWrapperStyles>
					{myClassList.map((item) => (
						<AdminClassCard key={item._id} item={item} />
					))}
				</CardWrapperStyles>
			</MainStyles>
		</WrapperStyles>
	);
}

export default MyAdminClass;
