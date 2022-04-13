import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
	${tw`grid place-content-center bg-black text-[#7c7c7c]   tracking-wider h-screen md:text-sm xl:block`}
`;

export const MainStyles = styled.div`
	${tw`xl:flex xl:items-center `}
`;

export const LeftSectionStyles = styled.div`
	${tw`xl:w-3/5  `}
`;

export const FormStyles = styled.form`
	${tw`space-y-6 max-w-sm mx-auto`}

	h2 {
		${tw`text-center text-white mb-10`}
	}
`;

export const RightSectionStyles = styled.div`
	${tw`hidden xl:block  xl:h-screen xl:w-2/5`}
`;
export const ImageStyles = styled.img`
	${tw`xl:absolute xl:bottom-0 xl:max-h-[95%]`}
`;

export const InputGroupStyles = styled.div`
	${tw`flex flex-col space-y-1.5 `}
`;

export const InputStyles = styled.input`
	${tw`text-st_bg1 text-base py-0.5 px-1 min-w-[380px] rounded-sm`}
`;

export const LineStyles = styled.div`
	${tw`relative h-0.5 bg-[rgba(75, 75, 75, 0.4)] `}

	span {
		${tw`absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-58%] bg-black text-[#7c7c7c]`}
	}
`;

export const InfoStyles = styled.div`
	${tw`flex items-center space-x-1.5`}

	label {
		${tw`pb-[1px]`}
	}

	span {
		${tw`text-keyColor`}
	}
`;
