import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.div`
	${tw`grid place-content-center tracking-wider bg-st_alt1 h-screen md:text-sm`}
`;

export const FormStyles = styled.form`
	${tw`space-y-5 max-w-sm mx-auto bg-white py-8 px-4  min-w-[360px]`}

	h2 {
		${tw`text-center mb-16`}
	}
`;
export const InputGroupStyles = styled.div`
	${tw`flex flex-col space-y-1.5 `}
`;

export const InputStyles = styled.input`
	${tw`bg-st_alt1 text-white text-base py-1 px-1.5 rounded-sm`}
`;

export const SubmitStyles = styled.div`
	${tw`pt-5 space-y-7`}
`;

export const ButtonStyles = styled.button`
	${tw`py-1.5 px-3 sm:py-2.5 sm:px-4 tracking-wider rounded-lg sm:hover:opacity-90`}
	${tw`bg-[#ea4b4e] text-white `}
	${tw`flex justify-between items-center w-full  text-base`}

	${({ isDisabled }) =>
		isDisabled &&
		tw`bg-st_bg1 text-gray-500 cursor-not-allowed sm:hover:opacity-100`}
`;
