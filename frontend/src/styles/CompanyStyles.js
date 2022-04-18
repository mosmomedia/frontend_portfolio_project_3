import tw, { styled } from 'twin.macro';

export const style = styled.div``;

export const SectionStyles = styled.div`
	h1 {
		${tw`font-bold text-3xl mb-10 xl:mb-16`}
	}

	${({ variant }) => variant === 'first' && tw`mt-[4.25rem]`}
	${({ variant }) => variant === 'even' && tw`bg-[#fceded7c]`}
`;

export const ContentStyles = styled.div`
	${tw`py-16 px-10 space-y-8 sm:py-20 md:px-6 md:py-24 xl:py-32  xl:pl-4 xl:pr-2 2xl:py-40`}

	${tw`space-y-8`}
	${tw`md:grid md:grid-cols-2 md:auto-cols-auto md:space-y-0 md:gap-10 lg:gap-16 xl:grid-cols-5 xl:gap-10 md:`}
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-8 lg:self-center xl:col-span-3 xl:pr-20`}

	h2,h3,p {
		${tw`tracking-wide`}
		word-break: keep-all;
	}

	h2,
	h3 {
		${tw`text-lg font-bold lg:text-xl xl:text-2xl`}
		font-family: 'Paybooc_B';
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
