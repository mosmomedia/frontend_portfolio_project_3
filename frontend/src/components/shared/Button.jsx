import 'twin.macro';
import 'styled-components/macro';

function Button({ children, variant }) {
	return (
		<button
			variant={variant}
			tw="bg-primary text-primary py-1.5 px-3 rounded-md"
		>
			{children}
		</button>
	);
}

export default Button;
