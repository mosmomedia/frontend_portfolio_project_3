import tw, { styled } from 'twin.macro';

export const SectionStyles = styled.div`
	${tw`container mx-auto px-6 space-y-7 pt-[68px] 2xl:px-32`}
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

export const SectionWrapperStyles = styled.div`
	${tw`relative overflow-auto h-full`}

	${tw`border-[1rem] rounded-t-lg  border-white`}

	${({ add_styles }) => add_styles}

	/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
		display: none;
	}
	/* Hide scrollbar for IE, Edge and Firefox */
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
`;

export const CardWrapperStyles = styled.div`
	${tw`space-y-4`}
	${tw`lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-4`}
`;