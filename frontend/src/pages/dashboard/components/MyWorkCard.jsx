import React from 'react';

import { useNavigate } from 'react-router-dom';

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
import { toast } from 'react-toastify';

function MyWorkCard({ item: myWork }) {
	const { _id, title, genre, shortDesc, contentList } = myWork;

	const { dispatch } = useMyWorkContext();

	const navgate = useNavigate();

	const handleClick = (e) => {
		dispatch({ type: 'LOADING' });
		dispatch({ type: 'GET_MY_CURRENT_WORK', payload: myWork });
		navgate(`/dashboard/my-board/works/edit/${_id}`);
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
				<button onClick={handleClick}>
					<FaEdit />
				</button>
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
				>
					연재 게시판
				</ButtonStyles>
				<ButtonStyles
					variant="create"
					onClick={() => toast('서비스 준비 중입니다.')}
				>
					연재하기
				</ButtonStyles>
			</ButtonGroupStyles>
		</CardStyles>
	);
}

export default MyWorkCard;
