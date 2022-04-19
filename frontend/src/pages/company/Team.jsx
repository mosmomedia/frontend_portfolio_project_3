import { MainStyles, SectionStyles, ContainerStyles } from '../../styles';
import tw from 'twin.macro';
import {
	ContentStyles,
	LeftItemStyles,
	RightItemStyles,
} from '../../styles/TeamStyles';

import img_t1 from '../../assets/img_tutors/t_1.png';
import img_t2 from '../../assets/img_tutors/t_2.png';
import img_t3 from '../../assets/img_tutors/t_3.png';
import img_t4 from '../../assets/img_tutors/t_4.png';
import img_t5 from '../../assets/img_tutors/t_5.png';
import img_t6 from '../../assets/img_tutors/t_6.png';

function Team() {
	return (
		<MainStyles>
			<SectionStyles variant="first" add_styles={tw`px-6 xl:px-20`}>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<h1>People</h1>
							<h2>스토리 튠즈의 대표 강사진</h2>
							<br />
							<h3>박태석 작가</h3>
							<br />
							<h4>대표작</h4>
							<p>테이밍 마스터</p>
							<p>사신 E- 1120</p>
							<p>레벨업 무림세가</p>
							<br />
							<h4>데뷔작</h4>
							<p>
								<strong>포갓</strong> 2007
							</p>{' '}
						</LeftItemStyles>

						<RightItemStyles>
							<img src={img_t1} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles variant="even" add_styles={tw`px-6 xl:px-20`}>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<h2>대표 강사</h2>
							<br />
							<h3>샤이나크 작가</h3>
							<br />
							<h4>대표작</h4>
							<p>스타메이커</p>
							<p>더 랩스타</p>
							<p>레벨업 하기 싫은 천마님</p>
							<br />
							<h4>데뷔작</h4>
							<p>
								<strong>수2법사</strong> 2008
							</p>
						</LeftItemStyles>

						<RightItemStyles>
							<img src={img_t2} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles add_styles={tw`px-6 xl:px-20`}>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<h2>대표 강사</h2>
							<br />
							<h3>사도연 작가</h3>
							<br />
							<h4>대표작</h4>
							<p>두 번 사는 랭커</p>
							<p>절대검천</p>
							<p>태극신무</p>
							<p>신세기전</p>
							<br />
							<h4>데뷔작</h4>
							<p>
								<strong>신도무쌍</strong> 2009
							</p>
						</LeftItemStyles>

						<RightItemStyles>
							<img src={img_t3} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles variant="even" add_styles={tw`px-6 xl:px-20`}>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<h2>대표 강사</h2>
							<br />
							<h3>예하성 작가</h3>
							<br />
							<h4>대표작</h4>
							<p>내 딸은 드래곤!</p>
							<p>FFF급 만능 스트라이커</p>
							<br />
							<h4>데뷔작</h4>
							<p>
								<strong>펄스나인</strong> 2016
							</p>
						</LeftItemStyles>

						<RightItemStyles>
							<img src={img_t4} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles add_styles={tw`px-6 xl:px-20`}>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<h2>대표 강사</h2>
							<br />
							<h3>일황 작가</h3>
							<br />
							<h4>대표작</h4>
							<p>이 세계 플레이어</p>
							<p>신마경천기</p>
							<p>남궁쟁천기</p>
							<br />
							<h4>데뷔작</h4>
							<p>
								<strong>무황학사</strong> 2011
							</p>
						</LeftItemStyles>

						<RightItemStyles>
							<img src={img_t5} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>

			<SectionStyles variant="even" add_styles={tw`px-6 xl:px-20`}>
				<ContainerStyles>
					<ContentStyles>
						<LeftItemStyles>
							<h2>대표 강사</h2>
							<br />
							<h3>흑아인 작가</h3>
							<br />
							<h4>대표작</h4>
							<p>신과 함께 레벨업</p>
							<p>영웅, 회귀하다</p>
							<p>더 라이브</p>

							<br />
							<h4>데뷔작</h4>
							<p>
								<strong>더 플레이어</strong> 2014
							</p>
						</LeftItemStyles>

						<RightItemStyles>
							<img src={img_t6} alt="" />
						</RightItemStyles>
					</ContentStyles>
				</ContainerStyles>
			</SectionStyles>
		</MainStyles>
	);
}

export default Team;
