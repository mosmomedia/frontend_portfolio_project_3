import React from 'react';

import ico_link_fb from '../../assets/icons/ico_link_fb.png';
import ico_link_insta from '../../assets/icons/ico_link_insta.png';
import ico_link_kakao from '../../assets/icons/ico_link_kakao.png';

import { ContainerStyles } from '../../styles';
import { SectionStyles, LeftItemStyles } from '../../styles/CustomerStyles';

function Faq() {
	return (
		<SectionStyles>
			<ContainerStyles>
				<h1>FAQ</h1>
				{/* left - support   */}
				<LeftItemStyles>
					<h2>저희 스토리튠즈에 관한 여러분의 궁금증을 풀어 드립니다.</h2>
					<h3>FAQ에 없는 내용은 채팅 문의 또는 대표전화로 연락 주세요.</h3>
					<div className="support_wrapper">
						{/* info */}
						<div>
							<h2>02. 2039 9377</h2>
							<p>
								<strong>E-mail</strong> / official@storytunes.net
							</p>
						</div>
						{/* support links */}
						<div className="support_links">
							<a
								href="https://www.facebook.com/storytuneskorea/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img src={ico_link_fb} alt="facebook link" />
							</a>
							<a
								href="https://www.instagram.com/storytunes_/"
								rel="noopener noreferrer"
								target="_blank"
							>
								<img src={ico_link_insta} alt="instagram link" />
							</a>

							<a href="/" rel="noopener noreferrer" target="_blank">
								<img src={ico_link_kakao} alt="kakao channel link" />
							</a>
						</div>
					</div>
				</LeftItemStyles>

				{/* right - faq */}
				<div>
					<ul>
						<li>
							<h3>1. 사전 예약을 하지 못했는데 신청 가능할까요?</h3>
							<p>
								사전 예약은 마감되었지만 수강신청 기간에도 추가 등록 가능합니다.
							</p>
							<p>수강신청 기간에 신청해 주시면 감사하겠습니다.</p>
						</li>
						<li>
							<h3>
								2. 모든 클래스를 수강하고 나서 소설가가 되는 건가요? 아니면
								도중에도 될 수 있는 건가요?
							</h3>
							<p>
								입문/심화/데뷔 그 어떤 클래스 도중에라도 쓰신 원고의 완성도가
								충분히 높다고 판단되면 바로 데뷔도 가능합니다.
							</p>
							<p>
								클래스들은 작가 데뷔까지의 실력을 갖추기 위한 과정이라고 보시면
								됩니다.
							</p>
						</li>

						<li>
							<h3>3. 원고를 보낼 경우, 정해진 기한이나 양식이 따로 있나요? </h3>
							<p>
								정해진 기한은 따로 없습니다. 프로젝트 기간 동안(6개월간)
								카카오페이지 지원금 소진시까지 장학생 지원이 가능합니다.
							</p>
							<p>
								양식은 따로 없으나, 3만자 이상 5만자 미만으로 분량은 지켜주셔야
								합니다.
							</p>
						</li>

						<li>
							<h3>4. 입문반과 심화반 동시 수강도 가능한가요? </h3>
							<p>네. 동시 수강도 가능합니다. </p>
						</li>
						<li>
							<h3>5. 입문반은 장르 불문 모든 지망생들이 들어도 되는걸까요?</h3>
							<p>
								입문반은 장르에 상관없이 웹소설 집필에 관심있는 분들은 누구나
								수강 가능한 과정입니다.
							</p>
						</li>
						<li>
							<h3>6. 일 때문에 강의를 못 들을 시에는 어떻게 될까요? </h3>
							<p>
								실시간 강의를 놓치게 되실 경우, 녹화된 강의를 들으실 수
								있습니다.
							</p>
						</li>
						<li>
							<h3>
								7. 장학생으로 선정되어 모든 과정을 완료하면, 출판사와 계약한다고
								되어 있는데, 스토리튠즈와 계약한다는 것인가요?
							</h3>
							<p>
								기본적으로 스토리튠즈 혹은 판시아(카카오 자체 CP) 중에 선택지가
								주어지지만, 장학생이 원할 경우 다른 출판사 주선도 가능합니다.
							</p>
						</li>
					</ul>
				</div>
			</ContainerStyles>
		</SectionStyles>
	);
}

export default Faq;
