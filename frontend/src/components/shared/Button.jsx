import tw, { styled } from 'twin.macro';

function Button({ children, variant, add_styles }) {
	const ButtonStyles = styled.button`
		${tw`py-1.5 px-3 lg:py-2.5 lg:px-4 tracking-wider`}

		${variant === 'primary' &&
		tw`bg-primary text-primary rounded-lg shadow-md hover:opacity-90 hover:shadow-inner`}

		${add_styles}
	`;

	return <ButtonStyles variant={variant}>{children}</ButtonStyles>;
}

export default Button;
