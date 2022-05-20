import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
	${tw`grid place-content-center bg-black text-[#7c7c7c]   tracking-wider h-screen md:text-sm xl:block`}
`;

export const MainStyles = styled.div`
	${tw` pt-[124px] `}
`;

export const FormStyles = styled.form`
	${tw`space-y-5 max-w-sm sm:max-w-md mx-auto p-5 py-7 bg-white rounded-lg shadow-sm`}

	h2 {
		${tw`text-center mb-10`}
	}
`;
export const InputGroupStyles = styled.div`
	${tw`flex flex-col space-y-1.5 `}
`;

export const InputStyles = styled.input`
	${tw`text-st_bg1 text-base py-0.5 px-1 min-w-[324px] rounded-sm border-[#4d4d4d] border-solid border-[1px] border-opacity-30`}

	${tw``}

	${({ isRequired }) => isRequired && tw`bg-[#f5f5f5]`}
`;

export const SubmitStyles = styled.div`
	${tw`pt-5 space-y-7`}
`;

export const ButtonStyles = styled.button`
	${tw`py-2.5 px-3  sm:px-4 tracking-wider rounded-lg sm:hover:opacity-90`}
	${tw`bg-[#ea4b4e] text-white `}
	${tw`flex justify-between items-center w-full  text-base`}

	${({ isDisabled }) =>
		isDisabled &&
		tw`bg-st_bg1 text-gray-500 cursor-not-allowed sm:hover:opacity-100`}
`;
