import tw, { styled } from 'twin.macro';

export const nameStyles = styled.div`
	${tw``}
`;

export const SectionStyles = styled.div`
	${tw`container mx-auto px-6 pt-[68px] `}
`;

export const HeaderStyles = styled.div`
	${tw`hidden`}
`;

export const MainStyles = styled.div`
	${tw`lg:flex`}
`;

export const LeftItemStyles = styled.div`
	${tw``}
`;

export const RightItemStyles = styled.div`
	${tw`hidden lg:block`}
`;

export const NoticeStyles = styled.div`
	${tw`space-y-4 py-10`}

	h3 {
		${tw`text-base font-normal`}
	}
`;

export const CardStyles = styled.div`
	${tw`bg-white  rounded-lg p-4 flex flex-col space-y-14`}

	h4 {
		${tw`text-[15px] font-normal text-gray-700`}
	}

	.stress_col {
		${tw`text-keyColor`}
	}
`;

export const ButtonStyles = styled.button`
	${tw`text-sm py-2 px-4 self-end tracking-wider rounded-lg sm:hover:opacity-90 lg:py-2.5 lg:px-4`}

	${({ variant }) =>
		variant === 'primary' &&
		tw`bg-primary text-primary rounded-lg shadow-md sm:hover:shadow-inner`}

${({ disabled }) =>
		disabled &&
		tw`bg-st_bg1 text-gray-500 cursor-not-allowed sm:py-2.5 sm:px-4 sm:hover:opacity-100`}
`;
