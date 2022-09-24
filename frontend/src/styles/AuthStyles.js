import tw, { styled } from 'twin.macro';

export const Wrapper = styled.div`
	${tw`xs:grid xs:place-content-center bg-black text-[#7c7c7c] tracking-wider h-full xs:h-screen md:text-sm xl:block`}
`;

export const MainStyles = styled.div`
	${tw`xl:flex xl:items-center xl:h-full `}

	${tw`pt-28 xs:pt-0`}
`;

export const LeftSectionStyles = styled.div`
	${tw`xl:w-3/5`}
`;

export const FormStyles = styled.form`
	${tw`space-y-5 w-[85%] xs:w-full  xs:max-w-sm mx-auto`}

	h2 {
		${tw`text-center text-white mb-10`}
	}
`;
export const InputGroupStyles = styled.div`
	${tw`flex flex-col space-y-1.5 `}
`;

export const InputStyles = styled.input`
	${tw`text-st_bg1 text-base py-0.5 px-1 xs:min-w-[360px] rounded-sm`}
`;

export const SubmitStyles = styled.div`
	${tw`pt-5 space-y-7`}
`;

export const RightSectionStyles = styled.div`
	/* ${tw`hidden xl:block xl:w-2/5 xl:self-end xl:max-h-[95%] `} */
	${tw`hidden xl:block`}/* ${tw`overflow-hidden`} */
`;

export const SignInImageStyles = styled.div`
	${tw`fixed top-[5%] left-[55%] right-0 bottom-0`}
	background-image: url(/images/st_img_sign_in.webp);
	background-repeat: no-repeat;
	background-size: cover;
`;

export const SignUpImageStyles = styled.div`
	${tw`fixed top-[5%] left-[60%] right-0 bottom-0`}
	background-image: url(/images/st_img_sign_up.webp);
	background-repeat: no-repeat;
	background-size: cover;
`;

export const LineStyles = styled.div`
	${tw`relative h-0.5 bg-[rgba(75, 75, 75, 0.4)] `}

	span {
		${tw`absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-58%] bg-black text-[#7c7c7c]`}
	}
`;

export const InfoStyles = styled.div`
	${tw`text-[13px] xs:text-base flex items-center space-x-1.5`}

	label {
		${tw`pb-[1px]`}
	}

	span {
		${tw`text-keyColor`}
	}
`;

export const AdsInfoStyles = styled.div`
	${tw`absolute bottom-4 right-4 text-[#9e9e9e] bg-[#111111] py-4 px-6 space-y-1.5 text-base rounded-md`}

	h4 {
		${tw`text-[#5c5c5c]`}
	}
`;

export const LinkStyles = styled.div`
	${tw`space-y-1`}
	p {
		${tw`text-sm text-white`}
	}

	span {
		${tw`text-[#ea4b4e]`}
	}
`;

export const ButtonStyles = styled.button`
	${tw`py-1.5 px-3 sm:py-2.5 sm:px-4 tracking-wider rounded-lg sm:hover:opacity-90`}
	${tw`bg-[#ea4b4e] text-white `}
	${tw`flex justify-between items-center w-full  text-base`}

	${({ isDisabled }) =>
		isDisabled &&
		tw`bg-st_bg1 text-gray-500 cursor-not-allowed sm:hover:opacity-100`}
`;
