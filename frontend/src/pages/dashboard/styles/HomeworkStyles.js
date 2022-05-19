import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.div`
	${tw`h-[28vh] px-3 py-5`}

	h3 {
		${tw`text-base`}
	}
`;

export const BoxWrapperStyles = styled.div`
	${tw`h-full grid grid-cols-4 gap-4 py-8`}
`;

export const BoxStyles = styled.button`
	${tw`rounded-lg relative cursor-default max-h-24`}

	box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 6px 0px;

	.orderNum {
		${tw`absolute top-2 left-2.5 text-xs`}
	}

	svg,
	.submitBtn {
		${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
	}

	.submitBtn {
		${tw`text-5xl`}
	}
`;
