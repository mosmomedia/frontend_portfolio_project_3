import React from 'react';
import { Link } from 'react-router-dom';
import Logo_white from '../assets/logos/logo_on.svg';
import tw, { styled } from 'twin.macro';

const LogoStyles = styled.header`
	${tw`fixed z-50 p-2 md:p-5`}
`;

const ImgStyles = styled.img`
	${tw`h-12`}
`;

function BackToHomeBar() {
	return (
		<LogoStyles>
			<Link to="/">
				<ImgStyles src={Logo_white} alt="" />
			</Link>
		</LogoStyles>
	);
}

export default BackToHomeBar;
