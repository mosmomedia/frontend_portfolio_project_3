import tw, { styled } from 'twin.macro';

export const ContainerStyles = styled.div`
	${tw` lg:container lg:mx-auto lg:px-2 xl:max-w-7xl `}
`;

export const SectionStyles = styled.div`
	${tw`py-16 sm:py-20 md:py-24 xl:py-32 2xl:py-40 `}

	* {
		${tw`tracking-wide`}
		word-break: keep-all;
	}

	h1 {
		${tw`font-bold text-3xl lg:text-4xl`}
	}

	${({ add_styles }) => add_styles && add_styles}

	${({ variant }) => variant === 'first' && tw`mt-[4.25rem]`}
	${({ variant }) => variant === 'even' && tw`bg-[#fceded7c]`}
`;
