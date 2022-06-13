import tw, { styled } from 'twin.macro';

export const WrapperStyles = styled.div`
	${tw`py-[12vh] lg:grid lg:place-content-center lg:h-screen lg:text-sm`}
`;

export const MainStyles = styled.div`
	${tw`space-y-10 max-w-4xl mx-auto rounded bg-white py-8 px-4 w-[90%] md:w-[80%] lg:min-w-[640px] lg:p-5 lg:space-y-10`}
`;

export const CardWrapperStyles = styled.div`
	${tw`space-y-5`}
`;
