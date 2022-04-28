import React from 'react';
import { FaExternalLinkAlt, FaUser } from 'react-icons/fa';

import tw, { styled } from 'twin.macro';

const BookCardStyles = styled.div`
	${tw`flex p-4 bg-body rounded-md`}
	box-shadow: 0px 0px 4px rgb(50 50 71 / 8%), 0px 12px 32px rgb(50 50 71 / 2%);
`;

const ImageStyles = styled.img`
	${tw`max-w-[92px] rounded-2xl shadow-sm`}
`;
const InfoStyles = styled.div`
	${tw`flex-auto pl-4 space-y-3`}

	div {
		${tw`flex justify-between`}
	}

	h2 {
		${tw`text-base font-normal`}
	}

	ul {
		${tw`flex space-x-1 text-gray-600`}
	}

	li:first-child {
		${tw`flex items-center space-x-1`}
		svg {
			${tw`text-[13px] pt-0.5`}
		}
	}
`;

function BookCard({
	book: { title, author, genre, kkp_id, img_url, view, complete },
}) {
	const img = `/images/debut_list/${kkp_id}.png`;
	const link = `https://page.kakao.com/home?seriesId=${kkp_id}`;
	const view_k = `${Math.round(view / 1000)}k`;

	return (
		<BookCardStyles>
			{/* img */}
			<ImageStyles src={img} alt="" />
			{/* info */}
			<InfoStyles>
				<div>
					<h2>{title}</h2>
					<a href={link} target="_blank" rel="noreferrer">
						<FaExternalLinkAlt size={13} color="gray" />{' '}
					</a>
				</div>
				<ul>
					<li>
						<FaUser /> <span>{view_k}</span>
					</li>
					<li>&#8901; </li>
					<li>{genre} </li>
					<li>&#8901; </li>
					<li>{author} </li>
				</ul>
			</InfoStyles>
		</BookCardStyles>
	);
}

export default BookCard;
