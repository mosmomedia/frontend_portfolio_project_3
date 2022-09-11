import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';

import { addSubWork } from '../../../contexts/myWorkBoard/MyWorkActions';

import { Editor, EditorState, convertToRaw } from 'draft-js';

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
import Spinner from '../../../components/shared/Spinner';

function MyWorkWrite() {
	const { currentWork, myWorkList, dispatch, isLoading } = useMyWorkContext();

	const [currentWorkState, setCurrentWorkState] = useState({
		workId: null,
		title: null,
		genre: null,
	});

	const { workId, title, genre } = currentWorkState;

	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);
	const [subTitle, setSubTitle] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		if (currentWork) {
			const { _id, title, genre } = currentWork;

			setCurrentWorkState({ workId: _id, title, genre });
		} else {
			navigate('/dashboard/my-board');
		}

		// eslint-disable-next-line
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
			try {
				dispatch({ type: 'LOADING' });

				const subContentHtml = JSON.stringify(
					convertToRaw(editorState.getCurrentContent())
				);

				const formData = { subTitle, subContentHtml };
				const updatedMyWork = await addSubWork(formData, workId);
				const { _id: updatedWorkId } = updatedMyWork;

				const payload = myWorkList.map((item) => {
					if (item._id === updatedWorkId) {
						return updatedMyWork;
					} else {
						return item;
					}
				});

				dispatch({ type: 'GET_MY_CURRENT_WORK', payload: updatedMyWork });
				dispatch({ type: 'ADD_SUB_WORK', payload });
				toast('새 글이 성공적으로 등록 되었습니다.');
				navigate(`/dashboard/my-board/work/list/${workId}`);
			} catch (error) {
				console.log(error);
			}
		} else {
			toast.error('본문 내용을 입력하세요.');
		}
	};

	if (isLoading) return <Spinner />;

	return (
		<SectionStyles>
			<FormStyles onSubmit={handleSubmit}>
				<HeaderStyles>
					<UpperGroupStyles>
						<Link to={`/dashboard/my-board/work/list/${workId}`}>
							<InfoStyles>
								<h2>{title}</h2>
								<span>|</span>
								<h4>{genre}</h4>
							</InfoStyles>
						</Link>
						<ButtonStyles>등록하기</ButtonStyles>
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

export default MyWorkWrite;
