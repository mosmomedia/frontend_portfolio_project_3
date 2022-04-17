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

//
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

//

export const ClassInfoStyles = styled.div`
	${tw`py-16 px-6 sm:px-8 md:py-24`}

	h2 {
		${tw`font-bold text-[1.25rem] text-center mb-14  lg:mb-24`}
		font-family: 'Paybooc_B';
	}
`;

export const CardListStyles = styled.div`
	${tw`space-y-10 md:space-y-0 md:grid md:grid-cols-2  md:gap-5 lg:gap-8 xl:grid-cols-4`}
`;

export const CardStyles = styled.div`
	${tw`relative py-5 px-6 space-y-1.5 rounded-xl bg-gradient-to-t from-[#f1effd] to-[#ffeaefd0]`}

	${tw`flex flex-col justify-between`}

	${tw`sm:py-10 sm:px-16 md:py-6 md:px-8`}

	h3 {
		${tw`text-lg font-medium`}
	}

	h4 {
		${tw`text-base py-4`}
	}
	p {
	}

	span {
		${tw`absolute w-3 h-3 rounded-full top-1 right-2`}
		${({ variant }) => variant === 'basic' && tw`bg-basic`}
		${({ variant }) => variant === 'adv' && tw`bg-adv`}
		${({ variant }) => variant === 'debut' && tw`bg-debut`}
		${({ variant }) => variant === 'kkp' && tw`bg-kkp`}
	}

	button {
		font-family: 'Paybooc_M';
		${tw`font-bold text-sm text-st_bg1 pt-8 px-0`}

		svg {
			${tw`ml-0`}
		}
	}
`;
