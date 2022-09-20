import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.div`
	${tw`h-[24vh] xs:h-[28vh] px-3 py-3 xs:py-5`}

	h3 {
		${tw`text-base`}
	}
`;

export const BoxWrapperStyles = styled.div`
	${tw`h-full grid grid-cols-4 gap-4 py-8`}
`;

export const BoxStyles = styled.button`
	${tw`rounded-lg relative cursor-default max-h-[4.5rem] xs:max-h-24`}

	box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 6px 0px;

	.orderNum {
		${tw`absolute top-0.5 left-1.5 text-[10px] xs:top-2 xs:left-2.5 xs:text-xs`}
	}

	svg {
		${tw`h-6 xs:h-7`}

		${({ variant }) =>
			(variant === 'onAir' || variant === 'offAir') && tw`h-5 xs:h-6`}
	}

	svg,
	.submitBtn {
		${tw`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
	}

	.submitBtn {
		${tw`text-4xl xs:text-5xl`}
	}
`;
