import tw, { styled } from 'twin.macro';
import 'twin.macro';
import 'styled-components/macro';

// hooks
import useWD from '../hooks/useWindowDimensions';

// styles
import { ContainerStyles } from '../styles';
import ico_kko from '../assets/icons/ico_partner_kkp.png';
import ico_naver from '../assets/icons/ico_partner_n.png';
import ico_ridi from '../assets/icons/ico_partner_ridi.png';

// sections
import HeroSection from './HeroSection';

const MainStyles = styled.div`
	${tw``}
`;
const SectionStyles = styled.div`
	${tw``}
`;

const PlatformStyles = styled.div`
	${tw`flex justify-center bg-[#fdfafa]`}

	div {
		${tw`flex-1 p-6`}

		h4 {
			${tw`text-[0.9375rem] font-medium mb-6`}
		}
	}

	div:first-child ul {
		${tw`flex`}

		li {
			${tw`pr-4`}
		}

		h5 {
			${tw`hidden lg:block`}
		}

		img {
			${tw`w-6`}
		}
	}

	div:last-child ul {
		${tw`flex flex-col`}
	}
`;

function Landing() {
	const { width, isMobile } = useWD(768);

	return (
		<MainStyles>
			<ContainerStyles>
				{/* hero */}
				<HeroSection isMobile={isMobile} />
				<SectionStyles>
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
				</SectionStyles>
				<div tw="absolute bottom-1 left-2 text-sm text-black  ">{width}</div>
			</ContainerStyles>
		</MainStyles>
	);
}

export default Landing;
