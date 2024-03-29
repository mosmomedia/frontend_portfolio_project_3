import tw, { styled } from 'twin.macro';

export const CardStyles = styled.div`
	${tw`flex justify-between rounded-md p-4`}
	${tw`lg:px-6 lg:py-5`}

	h2 {
		${tw`text-white text-[1.375rem] `}
		text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.5);
	}

	h3 {
		${tw`text-base font-normal`}
	}

	${({ variant }) => variant === 'basicClass' && tw`bg-basic`}

	${({ variant }) =>
		variant === 'advClass' && tw`bg-gradient-to-tr from-[#5ed8b5] to-[#5bd8b5]`}
	${({ variant }) => variant === 'pdClass' && tw`bg-pd text-white`}

	${({ add_styles }) => add_styles}
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-6`}

	div {
		${tw`space-y-[1px]`}
	}

	.headerTitle {
		${tw`flex items-center`}
	}

	svg {
		${tw`ml-2 text-keyColor animate-pulse `}
	}

	img {
		${tw`w-7 ml-3.5 pt-0.5 opacity-90 animate-pulse`}
	}

	#fm_date {
		${tw`sm:flex sm:items-center`}
	}
`;

export const RightItemStyles = styled.div`
	${tw`flex flex-col justify-between items-center text-center`}

	h2 {
		${tw`text-2xl tracking-wider `}
		${tw`border-solid border-[3px] border-white px-4 py-2 rounded-md`}
	}

	h3 {
		${tw`text-lg`}
	}
`;

export const ButtonStyles = styled.button`
	${tw`py-2 px-3 bg-keyColor text-primary cursor-pointer  tracking-wider rounded-lg hover:bg-st_bg1 duration-200 md:text-[15px] `}

	${({ variant }) => variant === 'expired' && tw`bg-st_bg1 px-[1.125rem]`}
	${({ variant }) => variant === 'history' && tw`bg-pd `}
`;

export const MyButtonStyles = styled.button`
	${tw`py-2 px-3 bg-keyColor text-primary cursor-pointer  tracking-wider rounded-lg hover:bg-st_bg1 duration-200 md:text-[15px] `}

	${({ isOnAir }) =>
		!isOnAir &&
		tw`bg-st_alt1 text-gray-400 hover:bg-st_alt1 cursor-not-allowed`}
`;
