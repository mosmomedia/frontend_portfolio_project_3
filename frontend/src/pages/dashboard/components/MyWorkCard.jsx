import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';

import { FaEdit } from 'react-icons/fa';

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

	const navgate = useNavigate();

	const handleEditClick = (e) => {
		dispatch({ type: 'LOADING' });
		dispatch({ type: 'GET_MY_CURRENT_WORK', payload: myWork });
		navgate(`/dashboard/my-board/edit/${_id}`);
	};

	const handleWriteClick = (e) => {
		dispatch({ type: 'LOADING' });
		dispatch({ type: 'GET_MY_CURRENT_WORK', payload: myWork });
		navgate(`/dashboard/my-board/work/write/${_id}`);
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
				<button onClick={handleEditClick}>
					<FaEdit />
				</button>
			</HeaderStyles>
			<DescriptionStyles>{shortDesc} </DescriptionStyles>
			<CountStyles>
				<span>{contentList.length}</span>
				개의 게시글이 있습니다.
			</CountStyles>
			<ButtonGroupStyles>
				<Link to={`/dashboard/my-board/work/list/${_id}`}>
					<ButtonStyles
						variant={contentList.length === 0 ? 'disabled' : 'edit'}
						disabled={contentList.length === 0 ? 1 : 0}
					>
						연재 게시판
					</ButtonStyles>
				</Link>

				<ButtonStyles variant="create" onClick={handleWriteClick}>
					연재하기
				</ButtonStyles>
			</ButtonGroupStyles>
		</CardStyles>
	);
}

export default MyWorkCard;
