import tw, { styled } from 'twin.macro';

export const CardWrapperStyles = styled.div`
	${tw`space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4 `}
`;

export const FilterWrapperStyles = styled.div`
	${tw`flex space-x-4`}
`;

export const FilterStyles = styled.div`
	${tw`text-[13px] py-1 px-2.5 bg-white shadow-sm rounded-lg cursor-pointer`}

	:hover {
		${tw`bg-black text-white`}
	}

	${({ is_selected }) => is_selected && tw`bg-black text-white`}
`;
