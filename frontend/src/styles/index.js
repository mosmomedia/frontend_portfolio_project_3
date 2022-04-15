import tw, { styled } from 'twin.macro';

export const ContainerStyles = styled.div`
	${tw` lg:container lg:px-2 xl:max-w-7xl `}
`;

export const CenterWrapper = styled.div`
	${tw`absolute bottom-6`}

	border: 1px solid rgba(255, 0, 0, 0.4);
`;
