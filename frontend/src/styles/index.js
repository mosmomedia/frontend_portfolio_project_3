import tw, { styled } from 'twin.macro';

export const MainStyles = styled.div`
	${tw`bg-body tracking-wide`}
	word-break: keep-all;
`;

export const ContainerStyles = styled.div`
	${tw` lg:container lg:mx-auto lg:px-2 xl:max-w-7xl `}
`;

export const SectionStyles = styled.div`
	${tw`py-16  sm:py-20 md:py-24 xl:py-32 2xl:py-40 `}

	h1 {
		${tw`font-bold text-3xl lg:text-4xl`}
	}

	${({ add_styles }) => add_styles && add_styles}

	${({ variant }) =>
		variant === 'first' && tw`pt-32 sm:pt-36 md:pt-40 xl:pt-48 2xl:pt-56`}
	${({ variant }) => variant === 'even' && tw`bg-[#fceded7c]`}

	@media (min-height: 976px) {
		${({ variant2 }) => typeof variant2 === 'number' && { height: variant2 }}
	}
`;
