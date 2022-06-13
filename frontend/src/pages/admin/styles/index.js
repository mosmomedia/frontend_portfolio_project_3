import tw, { styled } from 'twin.macro';

export const ContainerStyles = styled.div`
	${tw`bg-black min-h-full lg:py-0 `}
`;

export const WrapperStyles = styled.div`
	${tw`py-[12vh]`}
`;

export const MainStyles = styled.div`
	${tw`space-y-10 max-w-4xl mx-auto rounded bg-white py-8 px-4 w-[90%] md:w-[80%] lg:min-w-[640px] lg:p-5 lg:space-y-10`}

	h3 {
		${tw`text-lg`}
	}
`;

export const InfoWrapperStyles = styled.div`
	${tw`space-y-4 tracking-wide text-base`}

	span {
		${tw`text-keyColor`}
	}
`;
