import tw, { styled } from 'twin.macro';

export const ContentStyles = styled.div`
	${tw`space-y-8`}
	h1 {
		${tw`mb-10 xl:mb-16`}
	}

	${tw`md:grid md:grid-cols-2 md:auto-cols-auto md:space-y-0 md:gap-10 lg:gap-16 xl:px-2`}
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-8 lg:self-center`}

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
`;

export const RightItemStyles = styled.div`
	${tw`hidden md:block  md:self-end`}
	${tw`md:rounded-2xl md:shadow-inner`}
	div {
		${tw`md:w-auto md:h-96  md:rounded-2xl`}
	}
`;
