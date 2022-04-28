import tw, { styled } from 'twin.macro';

export const SectionStyles = styled.div`
	${tw`py-16  md:py-20 lg:py-24 xl:py-28 `}

	h1 {
		${tw`font-bold text-3xl lg:text-4xl`}
	}

	${({ add_styles }) => add_styles && add_styles}

	${({ variant }) => variant === 'even' && tw`bg-[#fceded7c]`}

	@media (min-height: 976px) {
		${({ variant2 }) => typeof variant2 === 'number' && { minHeight: variant2 }}
	}
`;

export const ContentStyles = styled.div`
	${tw`space-y-8 lg:space-y-12 xl:space-y-16`}
`;

export const LeftItemStyles = styled.div`
	${tw`space-y-10 lg:grid lg:grid-cols-2 lg:space-y-0 lg:items-end`}

	.header {
		${tw`space-y-5`}
	}

	.groupSelect {
		${tw``}
		border: 1px solid rgba(255, 0, 0, 0.4);
	}
`;

export const RightItemStyles = styled.div`
	${tw``}
`;

export const BookListStyles = styled.ul`
	${tw`space-y-6 lg:grid lg:grid-cols-2 lg:space-y-0 lg:gap-4`}
`;

export const BookStyles = styled.li``;
