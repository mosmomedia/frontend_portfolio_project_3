import tw, { styled } from 'twin.macro';

export const style = styled.div``;

export const SectionStyles = styled.div`
	${tw`mt-[4.25rem] p-8 lg:py-16`}

	* {
		word-break: keep-all;
	}

	h1 {
		${tw`font-bold text-3xl mb-10 xl:mb-16`}
	}

	.items_wrapper {
		${tw`xl:grid xl:grid-cols-2`}
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
