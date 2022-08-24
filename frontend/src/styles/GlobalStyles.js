import React from 'react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';
import paybooc_M from './fonts/paybooc_medium.otf';
import paybooc_B from './fonts/paybooc_bold.otf';

const CustomStyles = createGlobalStyle`

/* paybook Medium */
@font-face {
  font-family: 'Paybooc_M';
	src: url(${paybooc_M}) format('opentype')
}

@font-face {
  font-family: 'Paybooc_B';
	font-weight: bold;
	src: url(${paybooc_B}) format('opentype')
}

:root {
	font-family: 'Noto Sans KR', sans-serif;
	${tw`min-h-screen h-full bg-black`}
}

#root{
	${tw`h-full`}
}

body {
	${tw`bg-body text-main_text  h-full  text-sm md:text-base`}
}

h1{
	${tw`text-3xl font-medium text-[#2f2f2f]`}
}

h2{
	${tw`text-xl font-medium text-[#2f2f2f]`}
}

h3,
h4{
	${tw`text-lg font-medium`}
}

p{
	${tw`text-base`}
}`;

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);

export default GlobalStyles;
