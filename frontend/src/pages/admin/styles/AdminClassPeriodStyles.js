import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.div`
	${tw`grid grid-cols-2  gap-4`}
`;

export const InputStyles = styled.div`
	${tw`space-y-2`}

	.react-datepicker-wrapper {
		${tw`border-st_alt1 border-solid border-[1px] border-opacity-30 rounded pl-2.5 py-1.5`}
	}
`;
