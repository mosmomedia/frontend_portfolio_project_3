import tw, { styled } from 'twin.macro';
import 'twin.macro';
import 'styled-components/macro';

// hooks
import useWD from '../hooks/useWindowDimensions';

// styles
import { ContainerStyles } from '../styles';

import HeroSection from './HeroSection';

const MainStyles = styled.main`
	${tw``}
`;

function Landing() {
	const { width, isMobile } = useWD(768);

	return (
		<MainStyles>
			<ContainerStyles>
				{/* hero */}
				<HeroSection isMobile={isMobile} />
				<div tw="absolute bottom-1 left-2 text-sm text-black  ">{width}</div>
			</ContainerStyles>
		</MainStyles>
	);
}

export default Landing;
