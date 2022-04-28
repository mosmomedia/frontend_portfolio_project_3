import tw, { styled } from 'twin.macro';

export const ContentStyles = styled.div`
	${tw`lg:grid lg:grid-cols-2`}

	h1 {
		${tw`mb-10 lg:mb-16`}
	}
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-2 lg:space-y-4`}

	h2 {
		${tw`text-base font-medium xl:text-xl`}
	}
`;

export const SupportStyles = styled.div`
	${tw`hidden lg:block lg:space-y-2 lg:pt-8`}
	h3 {
		${tw`lg:text-base lg:pb-2`}
	}
`;

export const RightItemStyles = styled.div`
	${tw`mt-16 py-10 px-6 bg-[#ffe0e073] rounded-lg md:px-10 xl:mt-0`}

	h2 {
		${tw`text-center text-lg`}
	}

	h3 {
		${tw`text-sm font-medium pt-10 pb-2 sm:text-base`}
	}

	p {
		${tw`text-[0.9375rem]  sm:text-base py-1`}
	}

	h4 {
		${tw`bg-body text-center py-4 mt-12 rounded-lg sm:text-xl`}
	}
`;
