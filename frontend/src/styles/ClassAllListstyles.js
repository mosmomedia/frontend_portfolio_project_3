import tw, { styled } from 'twin.macro';

export const CardWrapperStyles = styled.div`
	${tw`space-y-4 xl:space-y-0 xl:grid xl:grid-cols-2 xl:gap-4 `}
`;

export const FilterWrapperStyles = styled.div`
	${tw`flex space-x-4`}

	select {
		${tw`text-[13px] px-0.5 tracking-wide rounded-sm`}
	}

	ul {
		${tw`md:space-x-1.5`}
	}
`;

export const FilterStyles = styled.div`
	${tw`text-[13px] py-1 px-2.5 bg-white tracking-wide shadow-sm rounded-lg cursor-pointer md:px-3`}

	:hover {
		${tw`bg-black text-white`}
	}

	${({ is_selected, id }) =>
		is_selected && id === 'basicClass' && tw`bg-basic text-st_bg1`}
	${({ is_selected, id }) =>
		is_selected && id === 'advClass' && tw`bg-adv text-white`}
	${({ is_selected, id }) =>
		is_selected && id === 'pdClass' && tw`bg-pd text-white`}
`;
