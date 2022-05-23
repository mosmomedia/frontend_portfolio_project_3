import tw, { styled } from 'twin.macro';

export const SectionStyles = styled.div`
	${tw`container mx-auto px-6 pt-[68px] `}
`;

export const MainStyles = styled.div`
	${tw`md:max-w-4xl md:mx-auto`}
`;

export const NoticeStyles = styled.div`
	${tw`space-y-4 py-10 lg:space-y-8`}

	h3 {
		${tw`text-base font-normal lg:text-lg`}
	}
`;

export const CardStyles = styled.div`
	${tw`bg-white  rounded-lg p-4 flex flex-col space-y-14`}

	h4 {
		${tw`text-[15px] font-normal text-gray-700 lg:text-base`}
	}

	.stress_col {
		${tw`text-keyColor`}
	}

	a {
		${tw`self-end`}
	}
`;

export const ButtonStyles = styled.button`
	${tw`text-sm py-2 px-4 self-end tracking-wider rounded-lg sm:hover:opacity-90 lg:py-2.5 lg:px-4`}

	${({ variant }) =>
		variant === 'primary' &&
		tw`bg-primary text-primary rounded-lg shadow-md sm:hover:shadow-inner`}
`;
