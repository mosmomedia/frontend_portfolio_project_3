import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.div`
	/* ${tw`px-4 space-y-4 h-[80vh]`} */
	${tw`px-4 h-screen pt-[68px] md:pt-[80px]`}
`;

export const HeaderStyles = styled.div`
	${tw`flex justify-between items-center`}
	h2 {
		${tw`cursor-pointer`}
	}
	ul {
		${tw`flex space-x-1`}
	}
	${tw`h-[10vh]`}
`;

export const FilterWrapperStyles = styled.div`
	${tw`flex space-x-4`}
`;

export const FilterStyles = styled.div`
	${tw`text-[13px] py-1 px-2.5 bg-white shadow-sm rounded-lg cursor-pointer`}

	:hover {
		${tw`bg-black text-white`}
	}

	${({ is_selected }) => is_selected && tw`bg-black text-white`}
`;

export const MainStyles = styled.div`
	${tw`bg-white rounded-t-lg h-[80vh]`}
	box-shadow: 0px 0px 4px rgb(50 50 71 / 8%), 0px 12px 32px rgb(50 50 71 / 2%);
`;

export const SectionWrapperStyles = styled.div`
	${tw`relative overflow-auto h-full`}
	${tw`p-4 space-y-8 `}

	/* Hide scrollbar for Chrome, Safari and Opera */

	::-webkit-scrollbar {
		display: none;
	}
	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
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
