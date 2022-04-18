import tw, { styled } from 'twin.macro';

export const ContentStyles = styled.div`
	${tw`grid grid-cols-2 auto-cols-auto gap-10 lg:gap-72 xl:gap-52 xl:grid-cols-5 `}

	h1 {
		${tw`mb-5`}
	}
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
