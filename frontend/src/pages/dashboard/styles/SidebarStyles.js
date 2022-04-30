import tw, { styled } from 'twin.macro';

export const SidebarStyles = styled.div``;

export const HeaderStyles = styled.div`
	${tw`bg-st_alt1 px-4  py-5`}
`;

export const LogoStyles = styled.div`
	img {
		${tw`h-8`}
	}
`;

export const MenuStyles = styled.div`
	${tw`flex w-full`}
`;

export const MainMenuStyles = styled.ul`
	${tw`fixed justify-around bottom-0 w-full bg-st_alt1 text-gray-500`}

	${tw`flex`}
	
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
		${tw`fill-[#919191] h-9 mx-auto py-2`}
	}

	:first-child svg {
		${tw`py-[7px]`}
	}

	:last-child svg {
		${tw`py-[7px]`}
	}
`;

export const LogoutStyles = styled.div`
	${tw`hidden`}
`;
