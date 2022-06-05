import tw, { styled } from 'twin.macro';

export const HeaderStyles = styled.div`
	${tw`fixed inset-x-0 top-0 bg-st_alt1  h-[8vh] z-50 grid`}
`;

export const HeaderWrapperStyles = styled.header`
	${tw`container mx-auto `}
	${tw`px-6  py-5 flex items-center justify-between`}
`;

export const LogoStyles = styled.div`
	img {
		${tw`h-7`}
	}
`;

export const NavStyles = styled.ul`
	${tw`text-gray-500 space-x-8 flex items-center `}

	/* ${({ is_active }) => is_active === 1 && tw`flex items-center`} */

	.add_icon {
		${tw`text-keyColor font-bold text-lg p-1`}
	}
`;

export const NavChildStyles = styled.li`
	${tw`hover:text-white duration-300 cursor-pointer`}
	${({ is_selected }) => is_selected === 1 && tw`text-[#ffe0e0]`}
`;
