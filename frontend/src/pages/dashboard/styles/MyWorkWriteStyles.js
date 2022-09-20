import tw, { styled } from 'twin.macro';

export const SectionStyles = styled.div`
	${tw`grid place-content-center h-screen container mx-auto`}
`;

export const FormStyles = styled.form`
	${tw`bg-white rounded-lg xs:h-[70vh]  w-[90vw] max-w-6xl`}
	${tw`grid grid-rows-4`}
`;

export const HeaderStyles = styled.div`
	${tw`bg-st_bg1 p-5 rounded-t-lg`}
	${tw`flex flex-col justify-between`}
	${tw`row-span-1 tracking-wide`}
`;

export const UpperGroupStyles = styled.div`
	${tw`flex items-start justify-between`}
`;

export const InfoStyles = styled.div`
	${tw`flex items-center space-x-2 `}

	h2,  span {
		${tw`text-white`}
	}

	h4 {
		${tw`text-pink-100 text-base`}
	}
`;

export const InputGroupStyles = styled.div`
	${tw`space-y-5`}

	input {
		${tw`w-full p-1`}
	}

	h4,
	span {
		${tw`text-white text-base`}
	}
`;

export const EditorStyles = styled.div`
	${tw`cursor-text row-span-3`}

	${tw`p-5`}
`;

export const EditorOutlineStyles = styled.div`
	${tw`text-st_bg1 text-sm py-1 px-1 tracking-wide  rounded-sm border-[#4d4d4d] border-solid border-[1px] border-opacity-30 `}

	${tw`relative overflow-auto h-full`}
`;

export const SubmitStyles = styled.div`
	${tw`flex space-x-2`}
`;

export const ButtonStyles = styled.button`
	${tw` py-1.5 px-3 lg:py-2.5 lg:px-4 tracking-wider rounded-md cursor-pointer  sm:hover:opacity-90`}

	${tw`bg-pd text-primary  shadow-md   sm:hover:shadow-inner`}
`;

export const RemoveButtonStyles = styled.div`
	${tw` py-1.5 px-3 lg:py-2.5 lg:px-4 tracking-wider rounded-md cursor-pointer  sm:hover:opacity-90`}

	${tw`bg-keyColor text-white text-center`}
`;
