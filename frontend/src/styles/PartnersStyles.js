import tw, { styled } from 'twin.macro';

export const name = styled.div`
	${tw``}
`;

export const ContentStyles = styled.div`
	${tw`md:grid md:grid-cols-2 md:gap-16 `}
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-10 xl:space-y-16`}

	h1,
	h2 {
		${tw`font-bold`}
	}

	h3 {
		${tw`pr-4 sm:pr-14 md:pr-0 xl:text-xl 2xl:pr-10 2xl:text-[22px]`}
	}

	.wrapper {
		${tw`grid grid-cols-2 sm:flex sm:space-x-24`}
		h2 {
			${tw`mb-8 xl:text-2xl`}
		}
		div {
			${tw`space-y-2`}
		}
	}
`;

export const RightItemStyles = styled.div`
	${tw`hidden md:block md:self-center`}

	img {
		${tw`md:rounded-2xl`}
	}
`;

export const PlatformStyles = styled.div`
	${tw`space-y-14 xl:space-y-16`}

	h2 {
		${tw`text-xl 2xl:text-2xl`}
		font-family: 'Paybooc_B';
	}

	div {
		${tw`space-y-6 pl-1 pr-10 md:pl-4 md:pr-12 lg:pl-6 xl:pr-24`}
		p {
			${tw`xl:text-[17px] 2xl:text-lg`}
		}
	}
`;
