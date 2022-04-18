import tw, { styled } from 'twin.macro';

export const style = styled.div``;

// mt-[4.25rem] py-16 px-8 sm:py-20 md:px-6 md:py-24 xl:py-32   2xl:py-40
export const ContentStyles = styled.div`
	${tw`xl:grid xl:grid-cols-2`}

	h1 {
		${tw`mb-10 xl:mb-16`}
	}
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-6`}

	h2 {
		${tw`text-lg font-medium xl:text-xl`}
	}

	h3 {
		${tw`text-base`}
	}

	.support_wrapper {
		${tw`md:flex md:justify-between xl:flex-col`}
	}

	.support_info {
		${tw`space-y-2 xl:mt-10`}
		h2 {
			${tw`text-[1.25rem] font-medium xl:text-[1.375rem]`}
			font-family: 'Paybook_M';
		}
	}
	.support_links {
		${tw`hidden md:block`}
		${tw`md:flex md:space-x-1.5 md:items-end xl:mt-6`}

		img {
			${tw`md:h-[26px]`}
		}
	}
`;

export const RightItemStyles = styled.div`
	${tw`mt-16 py-10 px-6 bg-[#ffe0e073] rounded-lg md:px-10 xl:mt-0`}

	ul {
		${tw`space-y-10`}
	}

	h3 {
		${tw`text-base font-medium mb-5`}
	}

	p {
		${tw`text-[0.9375rem] py-1 sm:text-base`}
	}
`;
