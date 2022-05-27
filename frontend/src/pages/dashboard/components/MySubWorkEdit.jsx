import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';

import { updateSubWork } from '../../../contexts/myWorkBoard/MyWorkActions';

import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';

import Spinner from '../../../components/shared/Spinner';

import {
	SectionStyles,
	FormStyles,
	HeaderStyles,
	InputGroupStyles,
	InfoStyles,
	UpperGroupStyles,
	EditorStyles,
	EditorOutlineStyles,
	ButtonStyles,
} from '../styles/MyWorkWriteStyles';
import { toast } from 'react-toastify';

function MySubWorkEdit() {
	const { isLoading, currentSubWork, currentWork, myWorkList, dispatch } =
		useMyWorkContext();

	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	const [subTitle, setSubTitle] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		if (!currentWork) {
			navigate('/dashboard/my-board');
		}

		const subContentHtml = EditorState.createWithContent(
			convertFromRaw(JSON.parse(currentSubWork.subContentHtml))
		);

		setEditorState(subContentHtml);
		setSubTitle(currentSubWork.subTitle);
	}, []);

	const editor = useRef(null);

	function focusEditor() {
		editor.current.focus();
	}

	const handleChange = ({ target: { value } }) => {
		setSubTitle(value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const content = editorState.getCurrentContent();

		if (content.hasText()) {
			// dispatch({ type: 'LOADING' });
			// const subContentHtml = draftToHtml(convertToRaw(content));

			// const formData = { subTitle, subContentHtml };

			const subContentHtml = JSON.stringify(
				convertToRaw(editorState.getCurrentContent())
			);

			const formData = { subTitle, subContentHtml };
			console.log(formData);
			// const updatedMyWork = await updateSubWork(formData, currentWork._id);
			// const { _id: updatedWorkId } = updatedMyWork;

			// const payload = myWorkList.map((item) => {
			// 	if (item._id === updatedWorkId) {
			// 		return updatedMyWork;
			// 	} else {
			// 		return item;
			// 	}
			// });

			// dispatch({ type: 'GET_MY_CURRENT_WORK', payload: updatedMyWork });
			// dispatch({ type: 'ADD_SUB_WORK', payload });
			// toast('새 글이 성공적으로 등록 되었습니다.');
			// navigate(`/dashboard/my-board/work/list/${currentWork._id}`);
		} else {
			toast.error('본문 내용을 입력하세요.');
		}
	};

	if (isLoading || !currentWork) return <Spinner />;

	return (
		<SectionStyles>
			<FormStyles onSubmit={handleSubmit}>
				<HeaderStyles>
					<UpperGroupStyles>
						<Link to={`/dashboard/my-board/work/list/${currentWork._id}`}>
							<InfoStyles>
								<h2>{currentWork.title}</h2>
								<span>|</span>
								<h4>{currentWork.genre}</h4>
							</InfoStyles>
						</Link>
						<ButtonStyles>변경하기</ButtonStyles>
					</UpperGroupStyles>
					<InputGroupStyles>
						<label htmlFor="subTitle">
							<h4>챕터 제목</h4>
						</label>
						<input
							type="text"
							id="subTitle"
							name="subTitle"
							value={subTitle}
							onChange={handleChange}
							required
						/>
					</InputGroupStyles>
				</HeaderStyles>

				<EditorStyles onClick={focusEditor}>
					<EditorOutlineStyles>
						<Editor
							ref={editor}
							editorState={editorState}
							onChange={setEditorState}
						/>
					</EditorOutlineStyles>
				</EditorStyles>
			</FormStyles>
		</SectionStyles>
	);
}

export default MySubWorkEdit;
