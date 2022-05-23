import React from 'react';

import { Link } from 'react-router-dom';

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
	console.log(_id);
	return (
		<CardStyles variant="">
			{/* header */}
			<HeaderStyles>
				<div className="left_item">
					<h2>{title}</h2>
					<span>|</span>
					<h4>{genre}</h4>
				</div>
				<Link to="">
					<FaEdit />
				</Link>
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
				<ButtonStyles variant="create">연재하기</ButtonStyles>
			</ButtonGroupStyles>
		</CardStyles>
	);
}

export default MyWorkCard;
