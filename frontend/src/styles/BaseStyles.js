import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import noto300 from './fonts/noto-sans-kr-v26-korean-300.woff';
import noto500 from './fonts/noto-sans-kr-v26-korean-500.woff';
import noto700 from './fonts/noto-sans-kr-v26-korean-700.woff';
import notoRegular from './fonts/noto-sans-kr-v26-korean-regular.woff';

const BaseStyles = createGlobalStyle`
/* noto-sans-kr-300 - korean */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 300;
	src: local('Noto Sans KR'),
	url(${noto300}) format('woff')
 
}
/* noto-sans-kr-regular - korean */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
	src: local('Noto Sans KR'),
	url(${notoRegular}) format('woff')
}
/* noto-sans-kr-500 - korean */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
	src: local('Noto Sans KR'),
	url(${noto500}) format('woff')

}
/* noto-sans-kr-700 - korean */
@font-face {
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
	src: local('Noto Sans KR'),
	url(${noto700}) format('woff')
}

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
