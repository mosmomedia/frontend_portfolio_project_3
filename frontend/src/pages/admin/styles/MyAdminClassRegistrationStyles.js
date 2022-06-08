import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.div`
	${tw`py-[12vh] lg:grid lg:place-content-center tracking-wider lg:h-screen lg:text-sm`}
`;

export const FormStyles = styled.form`
	${tw`space-y-4  mx-auto rounded bg-white py-8 px-4 w-[85%]  md:w-[80%]  lg:w-[90%] lg:p-10 lg:space-y-10`}

	h2 {
		${tw`text-center mb-10`}
	}
`;

export const WrapperItemStyles = styled.div`
	${tw`lg:grid lg:grid-cols-2 gap-7`}
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-4 lg:space-y-6`}
`;

export const RightItemStyles = styled.div`
	${tw`space-y-4 lg:space-y-6`}
`;

export const InputGroupStyles = styled.div`
	${tw`flex flex-col space-y-2 `}

	h4 {
		${tw`text-base`}
	}
`;

export const InputStyles = styled.input`
	${tw` text-base py-1 px-1.5 rounded`}
	${tw`border-st_alt1 border-opacity-30 border-solid border-[1px]`}
`;

export const SubmitStyles = styled.div`
	${tw`pt-5 space-y-7 lg:max-w-md lg:mx-auto`}
`;

export const ButtonStyles = styled.button`
	${tw`py-1.5 px-3 sm:py-2.5 sm:px-4 tracking-wider rounded-lg sm:hover:opacity-90  lg:py-3 lg:text-[17px] `}

	${tw`bg-[#ea4b4e] text-white `}
	${tw`text-center w-full text-base`}

	${({ isDisabled }) =>
		isDisabled &&
		tw`bg-st_bg1 text-gray-500 cursor-not-allowed sm:hover:opacity-100`}
`;
