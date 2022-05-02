import tw, { styled } from 'twin.macro';

export const SidebarStyles = styled.div`
	${tw` bg-st_alt1`}
`;

export const ContainerStyles = styled.div`
	${tw`container mx-auto`}
`;

export const HeaderStyles = styled.div`
	${tw`px-6  py-5 flex items-center justify-between`}
`;

export const LogoStyles = styled.div`
	img {
		${tw`h-7`}
	}
`;

export const MobileNavStyles = styled.ul`
	${tw`text-gray-500 space-x-5 hidden`}

	${({ is_active }) => is_active === 1 && tw`flex items-center`}

	.add_icon {
		${tw`text-keyColor font-bold text-lg p-1`}
	}
`;

export const MobileNavChildStyles = styled.li`
	${({ is_selected }) => is_selected === 1 && tw`text-[#ffe0e0]`}
`;

export const MenuStyles = styled.div`
	${tw`fixed  bottom-0 left-0 w-full  bg-st_alt1 `}
`;

export const MainMenuStyles = styled.ul`
	${tw`container mx-auto flex justify-between px-6`}

	h3 {
		${tw`text-sm tracking-wide font-normal`}
	}

	ol {
		${tw`hidden`}
	}
`;

export const MenuItemStyles = styled.div`
	${tw`p-4`}
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
