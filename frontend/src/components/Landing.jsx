// hooks
import useWD from '../hooks/useWindowDimensions';

// styles
import { ContainerStyles } from '../styles';
import {
	MainStyles,
	SectionStyles,
	PlatformStyles,
} from '../styles/LandingStyles';

import ico_kko from '../assets/icons/ico_partner_kkp.png';
import ico_naver from '../assets/icons/ico_partner_n.png';
import ico_ridi from '../assets/icons/ico_partner_ridi.png';

// sections
import HeroSection from './HeroSection';

function Landing() {
	const { width, isMobile } = useWD(768);

	return (
		<MainStyles>
			<ContainerStyles>
				{/* hero */}
				<HeroSection isMobile={isMobile} />
			</ContainerStyles>
			<SectionStyles variant="platform">
				<ContainerStyles>
					<PlatformStyles>
						{/* platform */}
						<div>
							<h4>Platform</h4>
							<ul>
								<li>
									<img src={ico_kko} alt="" />
									<h5>kakaopage</h5>
								</li>
								<li>
									<img src={ico_naver} alt="" />
									<h5>Naver Series</h5>
								</li>
								<li>
									<img src={ico_ridi} alt="" />
									<h5>RidiBooks</h5>
								</li>
							</ul>
						</div>
						{/* management */}
						<div>
							<h4>Management</h4>
							<ul>
								<li>ROK Media</li>
								<li>Dream Books</li>
								<li>PaPyrus</li>
								<li>Jplus Media</li>
								<li>RS Media</li>
							</ul>
						</div>
					</PlatformStyles>
				</ContainerStyles>
			</SectionStyles>
			<div tw="fixed bottom-1 left-2 text-sm text-black  ">{width}</div>
		</MainStyles>
	);
}

export default Landing;
