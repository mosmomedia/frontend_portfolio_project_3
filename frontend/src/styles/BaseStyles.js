import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const BaseStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap');
* {
	${tw`box-border`}
	font-family: 'Noto Sans KR', sans-serif;
}

body {
	${tw`bg-body text-main_text text-sm md:text-base`}
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
