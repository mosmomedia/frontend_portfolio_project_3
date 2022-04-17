import tw, { styled } from 'twin.macro';

export const SectionStyles = styled.div`
	${tw`bg-black text-white p-10 lg:py-24`}
`;

export const Wrapper = styled.div`
	${tw`lg:grid lg:grid-cols-2 lg:gap-0 xl:flex xl:justify-between xl:max-w-7xl xl:mx-auto`}
	a,
	p,
	span {
		${tw`tracking-wider md:text-base `}
	}
`;

export const LeftItemStyles = styled.div`
	${tw`hidden xl:flex xl:flex-col xl:justify-between xl:items-end`}
	span {
		${tw`text-sm tracking-widest`}
	}
`;

export const LogoStyles = styled.div`
	${tw`flex space-x-3`}

	img {
		${tw`h-10`}
	}

	div {
		${tw`flex flex-col`}
	}
`;

export const LinkListStyles = styled.div`
	${tw`flex space-x-1`}
	img {
		${tw`h-7`}
	}
`;

export const CenterItemStyles = styled.div`
	${tw`text-base space-y-3 lg:space-y-5`}
	div {
		${tw`text-[#999999] flex justify-between sm:justify-start `}

		* {
			${tw`pb-5 sm:pr-10 lg:pr-8 lg:py-0 `}
		}
	}
`;

export const RightItemStyles = styled.div`
	${tw`space-y-3 mt-3 lg:mt-0 lg:justify-self-end lg:space-y-5`}
`;
