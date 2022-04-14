import tw, { styled } from 'twin.macro';

function Button({ children, variant, add_styles, disabled }) {
	// style props
	const BaseBtn = tw`py-1.5 px-3 lg:py-2.5 lg:px-4 tracking-wider rounded-lg hover:opacity-90`;
	const PrimaryBtn = tw`bg-primary text-primary rounded-lg shadow-md   hover:shadow-inner`;
	const SubmitStyles = tw`bg-[#ea4b4e] text-white sm:py-2.5 sm:px-4 `;
	const DisabledStyles = tw`bg-st_bg1 text-gray-500 cursor-not-allowed sm:py-2.5 sm:px-4 hover:opacity-100`;
	const DashboardStyle = tw`flex justify-between  items-center w-[8.375rem]  lg:mt-[1rem] bg-[#212121] text-white lg:text-[0.9375rem] rounded-md lg:py-2.5`;
	//
	const ButtonStyles = styled.button`
		${BaseBtn}
		${variant === 'primary' && PrimaryBtn}
		${variant === 'submit' ? (disabled ? DisabledStyles : SubmitStyles) : null}
		${variant === 'dashboard' && DashboardStyle}
		${add_styles}
	`;

	return <ButtonStyles disabled={disabled}>{children}</ButtonStyles>;
}

export default Button;
