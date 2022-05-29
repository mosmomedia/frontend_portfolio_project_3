import tw, { styled } from 'twin.macro';

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

export const TitleStyles = styled.h4`
	${tw`cursor-pointer`}
`;

export const ButtonStyles = styled.button`
	${tw`py-1.5 px-3 lg:py-2.5 lg:px-4 tracking-wider rounded-md sm:hover:opacity-90`}

	${tw`bg-primary text-primary  shadow-md   sm:hover:shadow-inner`}

	${({ variant }) => variant === 'edit' && tw`bg-pd`}
`;
