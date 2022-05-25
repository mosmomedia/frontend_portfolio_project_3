import tw, { styled } from 'twin.macro';

export const CardStyles = styled.div`
	${tw`rounded-md p-4 bg-gray-100  space-y-5`}
	${tw`border-st_alt1 border-[1px] border-opacity-10 shadow-md`}
${tw`w-96 md:w-80 lg:w-96 xl:w-[444px]`}

	h2 {
		${tw`text-st_bg1 text-xl `}
	}

	h4 {
		${tw`text-sm font-normal text-st_alt1`}
	}

	${({ add_styles }) => add_styles}
`;

export const HeaderStyles = styled.header`
	${tw`flex items-center justify-between`}
	.left_item {
		${tw`flex items-center space-x-2`}
	}
`;

export const DescriptionStyles = styled.div`
	${tw`py-2`}
`;

export const CountStyles = styled.div`
	${tw`tracking-wider`}
	span {
		${tw`text-keyColor`}
	}
`;

export const ButtonGroupStyles = styled.div`
	${tw` grid grid-cols-2 gap-2`}
`;

export const ButtonStyles = styled.button`
	${tw`py-2 px-3 bg-keyColor text-primary cursor-pointer tracking-wider  w-full  rounded-md hover:bg-st_bg1 duration-200 md:text-[15px] `}

	${({ variant }) => variant === 'edit' && tw`bg-pd`}
	${({ variant }) =>
		variant === 'disabled' &&
		tw`bg-st_alt1 text-gray-500 hover:bg-st_alt1 cursor-not-allowed`}
`;
