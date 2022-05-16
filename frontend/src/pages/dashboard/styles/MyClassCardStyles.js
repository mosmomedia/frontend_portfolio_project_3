import tw, { styled } from 'twin.macro';

export const CardStyles = styled.div`
	${tw`flex justify-between rounded-md p-4`}
	${tw`lg:h-40`}

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
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-6`}
	div {
		${tw`space-y-[1px]`}
	}
`;

export const RightItemStyles = styled.div`
	${tw`flex flex-col justify-between items-center text-center`}

	h2 {
		${tw`text-2xl tracking-wider`}
	}

	h3 {
		${tw`text-lg`}
	}
`;

export const ButtonStyles = styled.div`
	${tw`py-1.5 px-3 bg-st_alt1 text-primary cursor-pointer  tracking-wider rounded-lg sm:hover:opacity-90 lg:py-2.5 lg:px-4 `}
`;
