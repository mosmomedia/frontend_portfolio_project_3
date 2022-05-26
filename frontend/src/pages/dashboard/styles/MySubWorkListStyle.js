import tw, { styled } from 'twin.macro';

export const LayoutStyles = styled.div`
	${tw`grid place-content-center h-screen container mx-auto`}
`;

export const SectionStyles = styled.form`
	${tw`bg-white rounded-lg h-[70vh] w-[90vw] max-w-6xl`}
	${tw`grid grid-rows-6`}
`;

export const HeaderStyles = styled.div`
	${tw`bg-st_bg1 p-5 rounded-t-lg`}
	${tw`space-y-10 flex flex-col`}
	${tw`row-span-2 tracking-wide`}
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

export const ShortDescriptionStyles = styled.div`
	${tw`text-gray-200  flex-auto p-2`}
	${tw`border-st_bg2 border-[1px] rounded`}

	p {
		${tw`text-sm`}
	}
`;

export const ButtonStyles = styled.button`
	${tw`py-1.5 px-3 lg:py-2.5 lg:px-4 tracking-wider rounded-md sm:hover:opacity-90`}

	${tw`bg-primary text-primary  shadow-md   sm:hover:shadow-inner`}

	${({ variant }) => variant === 'edit' && tw`bg-pd`}
`;

export const InputGroupStyles = styled.div`
	${tw`space-y-3`}

	input {
		${tw`w-full p-1`}
	}

	h4,
	span {
		${tw`text-white text-base`}
	}
`;

export const MainStyles = styled.div`
	${tw`row-span-4`}
	${tw`grid grid-rows-4`}
`;

export const PostsStyles = styled.div`
	${tw`grid grid-rows-5 row-span-5`}
`;

export const MySubWorkStyles = styled.div`
	${tw`p-5 flex justify-between items-center`}
	${tw`border-b-st_alt1 border-solid border-[1px] border-opacity-50`}

	h4 {
		${tw`text-base text-st_bg1 underline`}
		text-underline-offset: 4px;
		text-decoration-color: #afafaf;
		text-decoration-thickness: 1px;
	}
`;
