import tw, { styled } from 'twin.macro';

export const SectionStyles = styled.div`
	${({ variant }) =>
		variant === 'platform' &&
		tw`bg-[#fdfafa] border-b border-b-[#eae1f2b7] lg:border-none lg:bg-[#fceded7c]`}
	${({ variant }) => variant === 'first_section' && tw`bg-[#fceded7c]`}
`;

//@ platform
export const PlatformStyles = styled.div`
	${tw`flex justify-center `}

	div {
		${tw`flex-1 py-6 px-8 sm:px-12 lg:py-8`}

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
		${tw`grid grid-cols-2 lg:grid-cols-none lg:grid-flow-col lg:justify-between`}

		li {
			${tw`pb-2 md:text-sm lg:font-medium 2xl:text-base`}
		}
	}
`;

//@ class info

export const ClassInfoStyles = styled.div`
	${tw`py-20 px-6 sm:px-8 md:py-32 lg:py-36 xl:py-40`}

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

//@ content

export const ContentStyles = styled.div`
	${tw`py-20 px-10 space-y-8 md:py-24 lg:py-32 xl:py-36 2xl:py-40`}
	${tw`md:grid md:grid-cols-2 md:auto-cols-auto md:space-y-0 md:gap-10 lg:gap-16 xl:grid-cols-5 xl:gap-10 md:`}
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-8  lg:self-center xl:col-span-3 xl:pr-20`}

	h2 {
		${tw`font-bold xl:text-2xl`}
		font-family: 'Paybooc_B';
	}

	p {
		${tw`lg:pr-10`}
		${({ variant }) => variant === 'reverse_section' && tw`2xl:pr-0`}
	}

	button {
		${tw`pl-0 text-base text-keyColor`}
	}

	${({ variant }) =>
		variant === 'reverse_section' &&
		tw`xl:col-start-3 xl:col-span-3 xl:pr-0 xl:pl-36`}
`;

export const RightItemStyles = styled.div`
	${tw`xl:col-start-4 xl:col-span-2`}

	img {
		${tw`rounded-2xl`}
	}

	${({ variant }) =>
		variant === 'reverse_section' && tw`md:order-first xl:col-start-1`}
`;
