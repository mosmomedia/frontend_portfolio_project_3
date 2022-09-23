import React from 'react';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const CustomStyles = createGlobalStyle`

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
