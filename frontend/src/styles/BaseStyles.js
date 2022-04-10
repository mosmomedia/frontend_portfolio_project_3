import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`
* {
	${tw`box-border`}
}

body {
	${tw`bg-body text-main_text text-base`}
}

h1{
	${tw`text-2xl`}
}

h2{
	${tw`text-xl`}
}

p{
	${tw`text-base`}
}

a {
	${tw` no-underline`}
}
`;

export default BaseStyles;
