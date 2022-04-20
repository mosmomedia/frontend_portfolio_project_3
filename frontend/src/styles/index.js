import tw, { styled } from 'twin.macro';

export const MainStyles = styled.div`
	${tw`bg-body tracking-wide`}
	${tw`pt-16`}
	word-break: keep-all;
	${({ variant }) => variant === 'landing' && tw`pt-0`}
`;

export const SectionStyles = styled.div`
	${tw`py-16  sm:py-20 md:py-24 xl:py-32 2xl:py-40 `}

	h1 {
		${tw`font-bold text-3xl lg:text-4xl`}
	}

	${({ add_styles }) => add_styles && add_styles}

	${({ variant }) => variant === 'even' && tw`bg-[#fceded7c]`}

	@media (min-height: 976px) {
		${({ variant2 }) => typeof variant2 === 'number' && { minHeight: variant2 }}
	}
`;

export const ContainerStyles = styled.div`
	${tw`lg:container lg:mx-auto lg:px-2 xl:max-w-7xl `}
`;
