import tw, { styled } from 'twin.macro';

export const SectionStyles = styled.div`
	${tw`container mx-auto px-6 pt-[68px]  xl:max-w-6xl 2xl:max-w-6xl`}
`;

export const HeaderStyles = styled.div`
	${tw`pt-10 pb-5 lg:py-10`}

	${tw`text-[17px] text-white md:text-lg xl:text-[19px]`}
`;

export const MainStyles = styled.div`
	${tw`bg-white rounded-lg`}

	box-shadow: 0px 0px 4px rgb(50 50 71 / 8%), 0px 12px 32px rgb(50 50 71 / 2%);
`;

export const InfoWrapperStyles = styled.div`
	${tw`grid md:px-4  lg:grid-cols-2 lg:gap-10 lg:py-10 lg:px-2`}
`;
