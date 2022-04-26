import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.div`
	${tw`px-4 h-screen pt-[68px]`}
`;

export const HeaderStyles = styled.div`
	${tw`flex justify-between items-center`}
	ul {
		${tw`flex space-x-1`}
	}

	${tw`h-[10vh]`}
`;

export const NavStyles = styled.li`
	${tw`text-[13px] py-1 px-2.5 bg-white shadow-sm rounded-lg cursor-pointer`}

	:hover {
		${tw`bg-black text-white`}
	}

	${({ id, variant }) => id === variant && tw`bg-black text-white`}
`;

export const MainStyles = styled.div`
	${tw`bg-white rounded-t-lg h-[80vh]`}
`;

export const SectionWrapperStyles = styled.div`
	${tw`relative overflow-auto h-full`}

	/* Hide scrollbar for Chrome, Safari and Opera */
	::-webkit-scrollbar {
		display: none;
	}
	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`;

export const InfoSectionStyles = styled.section`
	${tw`pt-2.5 px-2.5 pb-20 space-y-6 rounded-lg bg-[#fffcfc]`}
	${tw`xl:pt-14 xl:pb-20 xl:px-20 xl:space-y-14`}


	h2 {
		${tw`bg-[#212121] text-white font-normal py-6 text-center rounded-md`}
	}

	.articleWrapper {
		${tw`space-y-14`}
	}
`;

export const CardStyles = styled.article`
	${tw`bg-white rounded-md`}
	box-shadow: 0px 0px 4px rgb(50 50 71 / 8%), 0px 12px 32px rgb(50 50 71 / 2%);

	h3 {
		${tw` font-normal text-[1.1875rem] px-2`}
	}

	.card_header {
		${tw`p-4 rounded-t-md`}
		${tw`flex justify-between items-center`}

		${({ variant }) => variant === 'basic' && tw`bg-basic text-[#141414]`}
		${({ variant }) =>
			variant === 'adv' && {
				background: 'linear-gradient(45deg, #5ed8b5, #5bd8b5)',
			}}
		${({ variant }) => variant === 'debut' && tw`bg-debut text-white`}
	}

	.card_body {
		${tw`py-12 pl-6 pr-4 space-y-7`}

		div {
			${tw`space-y-3`}
		}
	}
`;

export const SectionStyles = styled.section`
	${({ variant }) => variant === 'second' && tw`bg-[#212121] text-white`}

	${tw`pt-2.5 px-2.5 pb-24 space-y-6 `}
	${tw`xl:py-10 xl:pb-28 xl:px-20`}

	h3 {
		${tw`text-[1.25rem] font-normal text-center py-14`}
	}

	h4 {
		${tw`text-[#ffcd00] text-base pt-10`}
	}

	div {
		${tw`space-y-7 px-4`}
	}

	p {
		${tw`leading-7`}
	}
`;

export const BarIndicatorStyles = styled.div`
	${tw`py-3 px-4 bg-white rounded-b-lg border-t-[1px]  border-t-st_bg2   border-solid`}
`;

export const BarContainerStyles = styled.div`
	${tw`relative bg-[#f5f5f5] rounded-sm py-0.5`}
`;

export const BarStyles = styled.div`
	${tw`absolute top-1/2 -translate-y-1/2 opacity-95 h-0.5`}

	${({ widthInput }) => widthInput && { width: `${widthInput}%` }}
	
	background: linear-gradient(to right, #ff4d5e, #fc7c89);
`;
