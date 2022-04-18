import tw from 'twin.macro';
import { SectionStyles, ContainerStyles } from '../../styles';
import {
	ContentStyles,
	LeftItemStyles,
	RightItemStyles,
} from '../../styles/AboutStyles';

import img_about from '../../assets/st_img_about.png';
import img_tutors from '../../assets/st_img_tutors.png';
import img_tutors2 from '../../assets/st_img_tutors2.png';

function About() {
	return (
		<>
			<SectionStyles
				variant="first"
				add_styles={tw`px-8 space-y-8 md:px-6 xl:pl-4 xl:pr-2 `}
			>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<h1>About</h1>
							<h2>스토리튠즈 - 웹소설 작가의 꿈이 현실이 되는 곳!</h2>
							<p>우리는 수많은 매체에서, 수많은 이야기를 접하며 살아갑니다.</p>
							<p>
								우리의 이야기는 일상에 있습니다. 교복을 입고 정해진 시간에
								등교하는 학창 시절. 남자라면 한 번쯤은 가야 하는 군대. 사회의
								구성원으로 다니는 회사. 사랑하는 연인과 함께 가꾼 소중한 가정.
								이러한 이야기의 배경은 다양합니다.
							</p>
							<p>
								꿈과 환상이 가득한 판타지일 수도 있고, 고아한 정취가 풍겨오는
								역사의 한 갈래일 수도 있으며, 우리가 살아가는 현대가 배경일 수도
								있습니다. 이 배경 속에서 이야기는 시작됩니다.
							</p>

							<p>
								우리가 그 이야기의 주인공이 된 순간, 이야기엔 뼈대가 자라고 살이
								붙습니다.
							</p>
						</LeftItemStyles>

						<RightItemStyles>
							<img src={img_about} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles
				variant="even"
				add_styles={tw`px-10 space-y-8 md:px-6 xl:pl-4 xl:pr-2 `}
			>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles variant="reverse_section">
							<h2>창작의 사막 속 타오르는 갈증을 해결할 오아시스!</h2>
							<h3>"이 이야기를 풀어내 보고 싶다."</h3>
							<p>
								내가 꿈꾼 배경 속에서 자유롭게 움직이는 나를 보면서, 타오르는
								갈증을 느낍니다.
							</p>
							<h3>"내겐 글 쓰는 재능이 없는 걸까?"</h3>
							<p>
								하지만 막상 이야기를 풀어나가려고 하면 어딘지 막막한 기분입니다.
								어디서부터 써야 할지, 어떻게 묘사해야 할지 가늠하기 어렵습니다.
							</p>
							<p>
								그렇게 하루, 이틀…… 한 주, 한 달을 텅 빈 화면을 지켜보고 있으면,
								스스로에게 묻게 됩니다.
							</p>
						</LeftItemStyles>

						<RightItemStyles variant="reverse_section">
							<img src={img_tutors} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles add_styles={tw`px-10 space-y-8 md:px-6 xl:pl-4 xl:pr-2 `}>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<h2>최고의 강사진과 함께 만들어 갈 나만의 매혹적인 세상!</h2>
							<p>
								스토리튠즈 아카데미는 그런 여러분을 돕고 싶다는 마음에서
								시작됐습니다.
							</p>
							<p>
								소재, 연출, 캐릭터, 복선, 시놉시스 등.뛰어난 강사분들이 다년간
								현장에서 ‘글밥’을 먹으며 터득하고 연구했던 모든 노하우들을
								가르쳐드립니다. 스토리튠즈 아카데미는 상상하고 풀어내길 바라는
								모두에게 열려 있습니다.
							</p>
							<p>
								망설이지 말고 당장 시작하십시오. 스토리튠즈가 여러분을
								돕겠습니다. 카카오 플러스친구, 인스타그램, 블로그를 통해 부담
								없이 문의 바랍니다.
							</p>
						</LeftItemStyles>

						<RightItemStyles>
							<img src={img_tutors2} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>
		</>
	);
}

export default About;
