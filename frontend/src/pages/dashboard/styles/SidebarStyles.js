import tw, { styled } from 'twin.macro';

export const SidebarStyles = styled.div`
	${tw` bg-st_alt1 relative`}
`;

export const HeaderStyles = styled.header`
	${tw`fixed inset-x-0 top-0 bg-st_alt1  h-[8vh] z-50 grid`}

	.headerWrapper {
		${tw`container mx-auto `}
		${tw`px-6  py-5 flex items-center justify-between`}
	}
`;

export const LogoStyles = styled.div`
	img {
		${tw`h-5  xs:h-7`}
	}
`;

export const MobileTitleStyles = styled.ul`
	${tw`hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `}

	${({ is_active }) =>
		is_active === 1 && tw`block text-[#ffe0e0] text-base tracking-wide`}
`;

export const MobileNavStyles = styled.ul`
	${tw`text-gray-500 space-x-8 hidden`}

	${({ is_active }) => is_active === 1 && tw`flex items-center`}

	.add_icon {
		${tw`text-keyColor font-bold text-lg p-1`}
	}
`;

export const MobileNavChildStyles = styled.li`
	${tw`hover:text-white duration-300 cursor-pointer`}
	${({ is_selected }) => is_selected === 1 && tw`text-[#ffe0e0]`}
`;

export const MenuStyles = styled.footer`
	${tw`fixed  inset-x-0 bottom-0  bg-st_alt1 z-50 grid`}
	${tw`h-[8vh]`}
`;

export const MainMenuStyles = styled.ul`
	${tw`container mx-auto flex justify-between items-center px-6 `}

	h3 {
		${tw`text-xs  xs:text-sm tracking-wide font-normal`}
	}

	ol {
		${tw`hidden`}
	}
`;

export const MenuItemStyles = styled.div`
	svg {
		${tw` h-9 mx-auto py-2`}
	}

	:first-child svg {
		${tw`py-[7px]`}
	}

	:last-child svg {
		${tw`py-[7px]`}
	}

	.active {
		${tw`text-white`}
	}

	.inactive {
		${tw`text-gray-500`}
	}

	.active svg {
		${tw`fill-[#ffcc00]`}
	}

	.inactive svg {
		${tw`fill-[#919191]`}
	}
`;

export const LogoutStyles = styled.div`
	${tw`hidden`}
`;
