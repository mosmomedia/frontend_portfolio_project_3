import { useState, useRef } from 'react';
import { Editor, EditorState, convertToRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

import {
	SectionStyles,
	FormStyles,
	HeaderStyles,
	InputGroupStyles,
	InfoStyles,
	EditorStyles,
	ButtonStyles,
} from '../styles/MyWorkWriteStyles';

function MyWorkWrite() {
	const [editorState, setEditorState] = useState(() =>
		EditorState.createEmpty()
	);

	const [subTitle, setSubTitle] = useState('');

	const editor = useRef(null);

	function focusEditor() {
		editor.current.focus();
	}

	const handleChange = ({ target: { value } }) => {
		setSubTitle(value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(subTitle);
		console.log(convertToRaw(editorState.getCurrentContent()));
	};

	return (
		<SectionStyles>
			<FormStyles onSubmit={handleSubmit}>
				<HeaderStyles>
					<InfoStyles>
						<h2>타이틀</h2>
						<span>|</span>
						<h4>장르</h4>
					</InfoStyles>
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
					<Editor
						ref={editor}
						editorState={editorState}
						onChange={setEditorState}
						placeholder={`... 작성 ..`}
					/>
				</EditorStyles>

				<ButtonStyles>새로운 글 등록하기</ButtonStyles>
			</FormStyles>
		</SectionStyles>
	);
}

export default MyWorkWrite;
