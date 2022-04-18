import tw, { styled } from 'twin.macro';

export const style = styled.div``;

export const SectionStyles = styled.div`
	${tw`py-16 px-6 space-y-8 sm:py-20 md:px-6 md:py-24 xl:py-28  xl:px-20`}

	h1 {
		${tw`font-bold text-3xl mb-5 lg:text-4xl `}
	}

	${({ variant }) => variant === 'first' && tw`mt-[4.25rem]`}
	${({ variant }) => variant === 'even' && tw`bg-[#fceded7c]`}
`;

export const ContentStyles = styled.div`
	${tw`grid grid-cols-2 auto-cols-auto gap-10 lg:gap-72 xl:gap-52 xl:grid-cols-5 `}
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-7 lg:self-center xl:col-span-3`}

	h2,h3,h4,p {
		${tw`tracking-wide`}
		word-break: keep-all;
	}

	h2,
	h3,
	h4 {
		${tw`text-lg font-bold lg:text-xl`}
		font-family: 'Paybooc_B';
	}

	h2 {
		${tw`text-xl lg:text-2xl`}
	}

	h3 {
		${tw`xl:text-xl`}
	}

	p {
		${tw`md:text-[15px] lg:text-base lg:pr-10`}
	}
`;

export const RightItemStyles = styled.div`
	${tw`self-center xl:col-start-4 xl:col-span-2`}

	img {
		${tw`rounded-2xl`}
	}
`;
