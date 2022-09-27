import React from 'react';

import { useNavigate } from 'react-router-dom';

import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';

import { FaEdit } from '@react-icons/all-files/fa/FaEdit';

import {
	CardStyles,
	HeaderStyles,
	ButtonGroupStyles,
	DescriptionStyles,
	CountStyles,
	ButtonStyles,
} from '../styles/MyWorkCardStyles';

function MyWorkCard({ item: myWork }) {
	const { _id, title, genre, shortDesc, contentList } = myWork;

	const { dispatch } = useMyWorkContext();

	const navigate = useNavigate();

	const handleClick = ({ currentTarget: { name, id } }) => {
		dispatch({ type: 'LOADING' });
		dispatch({ type: 'GET_MY_CURRENT_WORK', payload: myWork });
		if (id === 'edit') {
			navigate(`/dashboard/my-board/edit/${_id}`);
		} else if (name) {
			navigate(`/dashboard/my-board/work/${name}/${_id}`);
		}
	};

	return (
		<CardStyles variant="">
			{/* header */}
			<HeaderStyles>
				<div className="left_item">
					<h2>{title}</h2>
					<span>|</span>
					<h4>{genre}</h4>
				</div>
				<FaEdit className="edit-link" id="edit" onClick={handleClick} />
			</HeaderStyles>
			<DescriptionStyles>{shortDesc} </DescriptionStyles>
			<CountStyles>
				<span>{contentList.length}</span>
				개의 게시글이 있습니다.
			</CountStyles>
			<ButtonGroupStyles>
				<ButtonStyles
					variant={contentList.length === 0 ? 'disabled' : 'edit'}
					disabled={contentList.length === 0 ? 1 : 0}
					name="list"
					onClick={handleClick}
				>
					연재 게시판
				</ButtonStyles>

				<ButtonStyles name="write" onClick={handleClick}>
					연재하기
				</ButtonStyles>
			</ButtonGroupStyles>
		</CardStyles>
	);
}

export default MyWorkCard;
