import tw, { styled } from 'twin.macro';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

export const NavStyles = styled.nav`
	${tw`p-4 w-full  bg-st_bg1 rounded-b-lg text-white`}
	${tw`flex items-end justify-center space-x-1`}
`;

export const ButtonStyles = styled.button`
	${tw`hover:text-keyColor hover:duration-200`}

	${tw`disabled:text-gray-600 disabled:cursor-not-allowed`}
`;

export const PageStyles = styled.button`
	${tw`text-base px-1`}

	${tw`hover:text-keyColor hover:duration-200`}

	${tw`disabled:text-[#ffcc00] disabled:font-medium disabled:cursor-default`}
`;

function Pagination({ total, limit, page, setPage }) {
	const numPage = Math.ceil(total / limit);
	return (
		<NavStyles>
			<ButtonStyles onClick={() => setPage(page - 1)} disabled={page === 1}>
				<MdNavigateBefore size="22" />
			</ButtonStyles>
			{Array.from({ length: numPage }, (_, i) => (
				<PageStyles
					key={i}
					disabled={page === i + 1}
					onClick={() => setPage(i + 1)}
				>
					{i + 1}
				</PageStyles>
			))}
			<ButtonStyles
				onClick={() => setPage(page + 1)}
				disabled={page === numPage}
			>
				<MdNavigateNext size="22" />
			</ButtonStyles>
		</NavStyles>
	);
}

export default Pagination;
