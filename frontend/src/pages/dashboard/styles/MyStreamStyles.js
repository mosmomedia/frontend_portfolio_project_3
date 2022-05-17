import tw, { styled } from 'twin.macro';

export const SectionStyles = styled.div`
	${tw`container mx-auto px-6 pt-[68px] space-y-5`}
`;

export const HeaderStyles = styled.div`
	${tw`pt-10`}
	h2 {
		${tw`text-[17px] md:text-lg xl:text-[19px] `}
	}
`;

export const MainStyles = styled.div`
	${tw`bg-white rounded-t-lg h-[69vh]`}

	box-shadow: 0px 0px 4px rgb(50 50 71 / 8%), 0px 12px 32px rgb(50 50 71 / 2%);
`;
