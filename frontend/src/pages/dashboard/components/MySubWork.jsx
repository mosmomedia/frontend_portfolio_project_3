import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';

import { Editor, convertFromRaw, EditorState } from 'draft-js';

import {
	MySubWorkStyles,
	TitleStyles,
	ButtonStyles,
} from '../styles/MySubWorkStyles';
import Spinner from '../../../components/shared/Spinner';

function MySubWork({ post: { _id, subTitle, subContentHtml } }) {
	const { isLoading, dispatch } = useMyWorkContext();
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	const navigate = useNavigate();

	const handleEditClick = (e) => {
		e.preventDefault();
		dispatch({ type: 'LOADING' });
		const payload = { _id, subTitle, subContentHtml };
		dispatch({ type: 'GET_MY_SUB_WORK', payload });
		navigate(`/dashboard/my-board/work/edit/${_id}`);
	};

	const handleViewerClick = (e) => {
		dispatch({ type: 'LOADING' });
		const payload = { _id, subTitle, subContentHtml };
		dispatch({ type: 'GET_MY_SUB_WORK', payload });
		navigate(`/dashboard/my-board/work/viewer/${_id}`);
	};

	if (isLoading) return <Spinner />;

	return (
		<MySubWorkStyles>
			{' '}
			<TitleStyles onClick={handleViewerClick}>{subTitle} </TitleStyles>
			<Editor editorState={editorState} readOnly={true}></Editor>
			<ButtonStyles variant="edit" onClick={handleEditClick}>
				수정하기
			</ButtonStyles>
		</MySubWorkStyles>
	);
}

export default MySubWork;
