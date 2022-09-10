import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';

import {
	updateSubWork,
	removeSubWork,
} from '../../../contexts/myWorkBoard/MyWorkActions';

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
	SubmitStyles,
	ButtonStyles,
	RemoveButtonStyles,
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
			dispatch({ type: 'LOADING' });

			const subContentHtml = JSON.stringify(
				convertToRaw(editorState.getCurrentContent())
			);

			const formData = { subTitle, subContentHtml };

			const updatedMyWork = await updateSubWork(
				formData,
				currentWork._id,
				currentSubWork._id
			);

			const { _id: updatedWorkId } = updatedMyWork;

			const payload = myWorkList.map((item) => {
				if (item._id === updatedWorkId) {
					return updatedMyWork;
				} else {
					return item;
				}
			});

			dispatch({ type: 'GET_MY_CURRENT_WORK', payload: updatedMyWork });
			dispatch({ type: 'UPDATE_SUB_WORK', payload });
			toast('성공적으로 수정 되었습니다.');
			navigate(`/dashboard/my-board/work/list/${currentWork._id}`);
		} else {
			toast.error('본문 내용을 입력하세요.');
		}
	};

	const handleRemoveClick = async () => {
		if (window.confirm('정말 삭제 하시겠습니까?')) {
			try {
				dispatch({ type: 'LOADING' });
				const { _id: workId } = currentWork;
				const { _id: subWorkId } = currentSubWork;

				const { message: deleteMySubWork } = await removeSubWork(
					workId,
					subWorkId
				);

				if (deleteMySubWork === 'success') {
					const { contentList } = currentWork;
					const filteredContentList = contentList.filter(
						(item) => item._id !== subWorkId
					);

					const payload = myWorkList.map((item) => {
						if (item._id === workId) {
							item.contentList = filteredContentList;
							return item;
						} else {
							return item;
						}
					});

					dispatch({ type: 'DELETE_MY_CURRENT_SUB_WORK', payload });
					toast.success('삭제가 완료 되었습니다.');
					navigate(`/dashboard/my-board/work/list/${workId}`);
				}
			} catch (error) {
				dispatch({ type: 'OFF_LOADING' });

				toast.error('문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
				console.log(error);
			}
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
						<SubmitStyles>
							<RemoveButtonStyles
								id="remove-button"
								onClick={handleRemoveClick}
							>
								삭제하기
							</RemoveButtonStyles>
							<ButtonStyles>변경하기</ButtonStyles>
						</SubmitStyles>
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
