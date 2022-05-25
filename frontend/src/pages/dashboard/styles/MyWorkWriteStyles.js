import tw, { styled } from 'twin.macro';

export const SectionStyles = styled.div`
	${tw`grid place-content-center h-screen container mx-auto`}
`;

export const FormStyles = styled.form`
	${tw`bg-white rounded-lg h-[70vh] w-[90vw] max-w-6xl`}
`;

export const HeaderStyles = styled.div`
	${tw`bg-st_alt1 p-5 rounded-t-lg`}

	h2, h4, span {
		${tw`text-white`}
	}
`;

export const InfoStyles = styled.div`
	${tw`flex items-center space-x-2`}
`;

export const InputGroupStyles = styled.div``;

export const EditorStyles = styled.div`
	${tw`cursor-text`}
	${tw`text-st_bg1 text-sm py-1 px-1 tracking-wide  rounded-sm border-[#4d4d4d] border-solid border-[1px] border-opacity-30`}
`;

export const ButtonStyles = styled.button``;
