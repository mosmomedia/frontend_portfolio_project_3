import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import paybooc_M from './fonts/paybooc_medium.otf';

const BaseStyles = createGlobalStyle`

/* paybook Medium */
@font-face {
  font-family: 'Paybooc_M';
	src: url(${paybooc_M}) format('opentype')
}

* {
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
