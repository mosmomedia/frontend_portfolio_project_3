import { useNavigate } from 'react-router-dom';

import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';
import { MySubWorkStyles, ButtonStyles } from '../styles/MySubWorkStyles';
import Spinner from '../../../components/shared/Spinner';

function MySubWork({ post: { _id, subTitle, subContentHtml } }) {
	const { isLoading, dispatch } = useMyWorkContext();

	const navigate = useNavigate();

	const handleEditClick = (e) => {
		e.preventDefault();
		dispatch({ type: 'LOADING' });
		const payload = { _id, subTitle, subContentHtml };
		dispatch({ type: 'GET_MY_SUB_WORK', payload });
		navigate(`/dashboard/my-board/work/edit/${_id}`);
	};

	if (isLoading) return <Spinner />;

	return (
		<MySubWorkStyles>
			{' '}
			<h4>{subTitle} </h4>
			<ButtonStyles variant="edit" onClick={handleEditClick}>
				수정하기
			</ButtonStyles>
		</MySubWorkStyles>
	);
}

export default MySubWork;
