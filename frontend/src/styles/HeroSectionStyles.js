import tw, { styled } from 'twin.macro';

export const SectionStyles = styled.div`
	${tw`pt-[4.25rem] sm:pt-0 md:flex md:justify-between md:items-center md:py-28 lg:py-10  xl:py-0  xl:h-screen`}
`;

export const LeftItemStyles = styled.div`
	${tw`relative bg-[#ffe0e0] md:w-1/2 md:bg-body md:p-5 lg:pr-16  xl:pr-[6rem]`}

	.mobile {
		${tw`md:hidden`}
	}

	.web {
		${tw`hidden md:block`}
	}

	@media (max-width: 767px) {
		${tw`before:content before:absolute before:inset-0  before:w-full before:h-full  before:bg-black/[50%]`}
	}
`;

export const MobileImgStyles = styled.div`
	${tw`md:hidden`}
`;

export const RightItemStyles = styled.div`
	${tw`hidden md:block`}
	${tw`relative md:w-1/2 md:p-5 lg:pr-1 xl:p-16 xl:pr-10 2xl:p-12 2xl:pr-0 2xl:w-[45%]`}
`;

export const HeroStyles = styled.img`
	${tw`rounded-2xl`}
`;

export const EffectStyles = styled.img`
	${tw`absolute inset-0 h-full w-full`}
	${tw`md:p-5 lg:pr-1 xl:p-16 xl:pr-10 2xl:p-12 2xl:pr-0`}
`;

export const TextWrapper = styled.div`
	${tw`absolute bottom-16 space-y-10 w-full`}
	${tw`sm:bottom-32 md:relative md:bottom-[unset]`}
`;

export const TextStyles = styled.div`
	${tw`text-center space-y-12 tracking-wider`}
	${tw`md:text-st_alt1 md:text-left`}

	h1,
	h2 ,
	h2 span,
	h4,
	h1 span {
		font-family: 'Paybooc_M';
		font-weight: 600;
		${tw`text-white md:text-main_text`}
	}

	h2 {
		${tw`text-lg xs:text-2xl sm:text-[1.75rem ] mb-1 xs:mb-4 md:text-xl xl:text-2xl`}
	}

	h2 span {
		${tw`relative`}

		&::after {
			${tw`content absolute w-1 h-1 rounded-full bg-keyColor -top-1.5 left-[35%] sm:left-[25%]  md:-top-1.5 md:left-[21%]`}
		}

		&:nth-child(2)::after {
			${tw`sm:left-[40%] md:left-[38%]`}
		}
	}

	h1 {
		${tw`text-2xl xs:text-3xl sm:text-[2.375rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-4xl`}

		span {
			${tw`md:text-keyColor`}
		}
	}

	h4 {
		${tw`text-[15px] xs:text-base sm:text-xl my-3 md:text-sm md:font-light md:leading-6 lg:text-[0.9375rem] lg:leading-7 xl:text-base xl:leading-7`}
	}
`;

export const LinkBtnStyles = styled.div`
	${tw`w-[80%] mx-auto space-y-3 text-sm`}
	${tw`xs:text-base sm:text-xl sm:w-2/3 md:text-sm md:w-4/5 md:mx-0 xl:text-base xl:w-2/3`}
`;

export const LinkUpperStyles = styled.div`
	${tw`flex justify-between`}

	button {
		${tw`w-[49%] py-2`}
	}
`;

export const LinkLowerStyles = styled.div`
	button {
		${tw`flex items-center justify-center w-full space-x-5 py-3 sm:tracking-widest md:space-x-2 lg:space-x-4 xl:space-x-2`}
	}

	img {
		${tw`h-6 sm:h-7  md:h-5 lg:h-6`}
	}
`;
