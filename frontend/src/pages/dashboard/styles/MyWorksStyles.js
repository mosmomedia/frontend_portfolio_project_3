import tw, { styled } from 'twin.macro';

export const SectionStyles = styled.div`
	${tw`grid place-content-center h-screen`}
`;

export const MainStyles = styled.div`
	${tw`bg-white rounded-t-lg h-[70vh]  xs:h-[65vh] `}

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
	${tw`space-y-8`}
	${tw`md:space-y-0 md:grid md:grid-cols-2 md:gap-6`}
`;
