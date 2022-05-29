import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';

import { updateSubWork } from '../../../contexts/myWorkBoard/MyWorkActions';

import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';

import Spinner from '../../../components/shared/Spinner';

import {
	SectionStyles,
	WrapperStyles,
	HeaderStyles,
	InputGroupStyles,
	InfoStyles,
	UpperGroupStyles,
	EditorStyles,
	EditorOutlineStyles,
	ButtonStyles,
} from '../styles/MySubWorkViewerStyles';
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

	if (isLoading || !currentWork) return <Spinner />;

	return (
		<SectionStyles>
			<WrapperStyles>
				<HeaderStyles>
					<UpperGroupStyles>
						<Link to={`/dashboard/my-board/work/list/${currentWork._id}`}>
							<InfoStyles>
								<h2>{currentWork.title}</h2>
								<span>|</span>
								<h4>{currentWork.genre}</h4>
							</InfoStyles>
						</Link>
					</UpperGroupStyles>
					<InputGroupStyles>
						<h4>{subTitle}</h4>
					</InputGroupStyles>
				</HeaderStyles>

				<EditorStyles onClick={focusEditor}>
					<EditorOutlineStyles>
						<Editor
							ref={editor}
							editorState={editorState}
							readOnly={true}
							onChange={setEditorState}
						/>
					</EditorOutlineStyles>
				</EditorStyles>
			</WrapperStyles>
		</SectionStyles>
	);
}

export default MySubWorkEdit;
