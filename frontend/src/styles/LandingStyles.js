import tw, { styled } from 'twin.macro';

export const MainStyles = styled.div`
	${tw``}
`;
export const SectionStyles = styled.div`
	${tw``}
	${({ variant }) =>
		variant === 'platform' &&
		tw`bg-[#fdfafa] border-b border-b-[#eae1f2b7] lg:border-none lg:bg-[#fceded7c]`}
`;

export const PlatformStyles = styled.div`
	${tw`flex justify-center `}

	div {
		${tw`flex-1 py-6 px-9 lg:py-8`}

		h4 {
			${tw`text-[0.9375rem] font-medium mb-6 lg:mb-8`}
		}
	}

	div:first-child ul {
		${tw`flex`}

		li {
			${tw`pr-4 lg:pr-10`}
		}

		img {
			${tw`w-7 lg:mx-auto`}
		}

		h5 {
			${tw`hidden lg:block lg:text-sm lg:mt-3`}
		}
	}

	div:last-child ul {
		${tw`flex flex-col lg:flex-row lg:justify-between`}
		li {
			${tw`pb-2 md:text-sm lg:font-medium 2xl:text-base`}
		}
	}
`;
