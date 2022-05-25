import tw, { styled } from 'twin.macro';

export const MainStyles = styled.div`
	${tw`h-screen relative grid place-content-center`}
`;

export const FormStyles = styled.form`
	${tw`space-y-8 max-w-sm sm:max-w-md mx-auto p-5 py-7 bg-white rounded-lg shadow-sm`}

	h4 {
		${tw`text-[17px] font-normal`}
	}
`;
export const InputGroupStyles = styled.div`
	${tw`flex flex-col space-y-2 `}
`;

export const InputStyles = styled.input`
	${tw`text-st_bg1 text-sm py-1 px-1 tracking-wide min-w-[324px] rounded-sm border-[#4d4d4d] border-solid border-[1px] border-opacity-30 md:min-w-[400px]`}
`;

export const GenreWrapperStyles = styled.div`
	${tw`grid grid-cols-3 gap-1.5`}
`;

export const GenreGroupStyles = styled.div`
	${tw`text-center relative rounded-sm shadow-sm py-1`}
	${tw`border-[#4d4d4d] border-solid border-[1px] border-opacity-30`}


	.label-title {
		${tw`relative z-10 cursor-pointer`}
	}

	.label-checked {
		${tw`cursor-pointer absolute inset-x-0 top-0 h-full rounded-sm`}
		content: '';
	}

	input:checked ~ .label-title {
		color: #ffcd00;
	}

	input:checked ~ .label-checked {
		background-color: #000000;
	}
`;

export const GenreInputStyles = styled.input`
	${tw`opacity-0 absolute cursor-pointer`}
`;

export const DescriptionStyles = styled.textarea`
	${tw`text-st_bg1 text-sm py-1 px-1 tracking-wide min-w-[324px] rounded-sm border-[#4d4d4d] border-solid border-[1px] border-opacity-30`}
`;

export const SubmitStyles = styled.div`
	${({ variant }) =>
		variant === 'edit' && tw`grid grid-cols-2 gap-2 text-[15px]`}
`;

export const ButtonStyles = styled.button`
	${tw`py-2.5 px-3 w-full  sm:px-4 tracking-wider rounded-lg sm:hover:opacity-90`}

	${tw`bg-pd text-white `}

	${({ isDisabled }) =>
		isDisabled &&
		tw`bg-st_bg1 text-gray-500 cursor-not-allowed sm:hover:opacity-100`}
`;

export const RemoveButtonStyles = styled.div`
	${tw`py-2.5 px-3 w-full  sm:px-4 tracking-wider rounded-lg sm:hover:opacity-90 cursor-pointer`}

	${tw`bg-keyColor text-white text-center`}
`;
