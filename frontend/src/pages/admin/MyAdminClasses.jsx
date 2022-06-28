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
					{myClassList.length > 0 ? (
						myClassList.map((item) => (
							<AdminClassCard key={item._id} item={item} />
						))
					) : (
						<div>개설 된 강의가 없습니다.</div>
					)}
				</CardWrapperStyles>
			</MainStyles>
		</WrapperStyles>
	);
}

export default MyAdminClass;
