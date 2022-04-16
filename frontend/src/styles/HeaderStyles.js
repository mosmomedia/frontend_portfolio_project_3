import tw, { styled } from 'twin.macro';

export const HeaderStyles = styled.header`
	${tw`fixed w-full h-[4.5rem]  text-white z-50`}
	${tw`lg:block lg:bg-header lg:text-main_text lg:h-[5rem]  `}

	${({ is_hover_on }) =>
		is_hover_on && tw`lg:h-[unset] lg:bg-black lg:text-white`}
`;

export const NavStyles = styled.nav`
	${tw`flex justify-between items-center h-full mx-auto px-6 tracking-wider  bg-mobile_alt1`}

	${tw`lg:container  lg:items-start lg:h-[unset] lg:pl-2 lg:pr-3 lg:bg-none lg:bg-header xl:max-w-7xl`}

	${({ is_hover_on }) => is_hover_on && tw`lg:bg-black`}
`;

export const HamburgerStyles = styled.button`
	${tw`space-y-1 lg:hidden`}

	div {
		${tw`w-6 h-0.5 bg-white rotate-0 transition-all`}
	}

	.top {
		${({ is_hamburger_on }) => is_hamburger_on && tw`rotate-45 translate-y-1`}
	}

	.middle {
		${({ is_hamburger_on }) => is_hamburger_on && tw`opacity-0`}
	}

	.bottom {
		${({ is_hamburger_on }) => is_hamburger_on && tw`-rotate-45 -translate-y-2`}
	}
`;

export const LogoStyles = styled.div`
	${tw`h-12`}
	${tw`lg:mt-4 lg:-ml-1 xl:mt-[1rem] xl:h-[3.25rem]`}
`;

export const ImgStyles = styled.img`
	${tw`h-full`}
	${({ variant }) => variant === 'mobile' && tw`lg:hidden`}
	${({ variant }) => variant === 'web' && tw`hidden lg:block`}
`;

export const MenuStyles = styled.div`
	${tw`absolute z-[-1] top-[4.5rem] py-7 left-0  w-full h-screen bg-[#343540] translate-y-[-115%]  space-y-14  ease-in-out duration-500`}

	${tw`lg:flex  lg:translate-y-0 lg:z-0  lg:space-y-0 lg:py-0   lg:h-full  lg:w-[unset] lg:static lg:transition-none lg:bg-white`} 

	${({ is_hover_on }) => is_hover_on && tw`lg:bg-black lg:pb-6`}
	${({ is_hamburger_on }) => is_hamburger_on && tw`translate-y-0`}
`;

export const ListGnbStyles = styled.ul`
	.title {
		${tw`lg:relative`}
	}
	:hover .title::after {
		${tw`lg:content lg:absolute lg:left-0 lg:-top-7 lg:w-full lg:h-0.5 lg:bg-primary opacity-80`}
	}
`;

export const TitleStyles = styled.li`
	${tw`inline-block py-3 px-6 text-[0.9375rem]`}
	${tw`lg:py-7 lg:px-12 `}
`;

export const LinkGnbStyles = styled.ul`
	${tw`flex px-6  flex-wrap `}
	${tw`lg:px-[unset] lg:flex-nowrap lg:pl-12 lg:hidden `} 
	${({ is_hover_on }) => is_hover_on && tw`lg:block`}
`;

export const ItemStyles = styled.li`
	${tw`py-2.5 pr-10 text-[#ffe0e0e7]`}
	${tw`lg:py-2.5 lg:pr-0 lg:text-[#acacac] lg:text-[0.9375rem] lg:hover:text-white`}

	${({ variant }) => variant === 'mobile' && tw`lg:hidden`}
	${({ variant }) => variant === 'web' && tw`hidden lg:block`}
`;
