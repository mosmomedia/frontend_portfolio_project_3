import tw, { styled } from 'twin.macro';

function Button({ children, variant, add_styles, disabled }) {
	// style props
	const BaseBtn = tw`py-1.5 px-3 lg:py-2.5 lg:px-4 tracking-wider rounded-lg`;
	const PrimaryBtn = tw`bg-primary text-primary rounded-lg shadow-md  hover:opacity-90 hover:shadow-inner`;
	const SubmitStyles = tw`bg-[#ea4b4e] text-white sm:py-2.5 sm:px-4 hover:opacity-90`;
	const DisabledStyles = tw`bg-st_bg1 text-gray-500 cursor-not-allowed sm:py-2.5 sm:px-4 `;

	//
	const ButtonStyles = styled.button`
		${BaseBtn}
		${variant === 'primary' && PrimaryBtn}
		${variant === 'submit' ? (disabled ? DisabledStyles : SubmitStyles) : null}
		${add_styles}
	`;

	return <ButtonStyles disabled={disabled}>{children}</ButtonStyles>;
}

export default Button;
