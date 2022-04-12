import tw, { styled } from 'twin.macro';

function Button({ children, variant, add_styles }) {
	const ButtonStyles = styled.button`
		${tw`bg-primary text-primary py-1.5 px-3 rounded-md lg:py-2.5 lg:px-4`}
		${add_styles}
	`;

	return <ButtonStyles variant={variant}>{children}</ButtonStyles>;
}

export default Button;
