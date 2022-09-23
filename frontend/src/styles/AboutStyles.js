import tw, { styled } from 'twin.macro';

export const ContentStyles = styled.div`
	${tw`space-y-8 `}
	h1 {
		${tw`mb-10 xl:mb-16`}
	}

	${tw`md:grid md:grid-cols-2 md:auto-cols-auto md:space-y-0 md:gap-10 lg:gap-16 xl:grid-cols-5 xl:gap-40`}
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-8 lg:self-center xl:col-span-3 xl:pr-20`}

	h2,
	h3 {
		${tw`text-lg font-bold lg:text-xl xl:text-2xl`}
		font-family: 'Paybooc';
	}
	h3 {
		${tw`xl:text-xl`}
	}

	p {
		${tw`md:text-[15px] lg:text-base lg:pr-10`}
	}

	${({ variant }) =>
		variant === 'reverse_section' &&
		tw`xl:col-start-3 xl:col-span-3 xl:pr-0 xl:pl-36`}
`;

export const RightItemStyles = styled.div`
	${tw` md:self-center xl:col-start-4 xl:col-span-2`}

	img {
		${tw`rounded-2xl`}
	}

	${({ variant }) =>
		variant === 'reverse_section' && tw`md:order-first xl:col-start-1`}
`;
