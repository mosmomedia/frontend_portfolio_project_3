import { useState, useRef, useEffect } from 'react';

import tw from 'twin.macro';

import {
	WrapperStyles,
	HeaderStyles,
	MainStyles,
	SectionWrapperStyles,
	BarIndicatorStyles,
	BarContainerStyles,
	BarStyles,
} from '../../styles/RegistrationStyles';

import {
	NavStyles,
	InfoSectionStyles,
	SectionStyles,
	CardStyles,
} from '../../styles/ClassRoadmapStyles';

import Button from '../../components/shared/Button';

function Roadmap() {
	const initHeight = useRef();

	const class_info_ref = useRef();
	const class_online_ref = useRef();
	const class_debut_ref = useRef();

	const [widthInput, setWidthInput] = useState(0);
	const [selectedNav, setSelectedNav] = useState(null);
	const [sectionList, setSectionList] = useState({
		class_info: null,
		class_online: null,
		class_debut: null,
	});

	const { class_info, class_online, class_debut } = sectionList;

	useEffect(() => {
		// get and set height for each section
		setSectionList((prevState) => ({
			...prevState,
			class_info: {
				offsetT: class_info_ref.current.offsetTop,
				offsetB:
					class_info_ref.current.offsetTop +
					class_info_ref.current.clientHeight,
			},
			class_online: {
				offsetT: class_online_ref.current.offsetTop,
				offsetB:
					class_online_ref.current.offsetTop +
					class_online_ref.current.clientHeight,
			},
			class_debut: {
				offsetT: class_debut_ref.current.offsetTop,
				offsetB:
					class_debut_ref.current.offsetTop +
					class_debut_ref.current.clientHeight,
			},
		}));
	}, []);

	useEffect(() => {
		// set initial scrollbar height
		const { clientHeight, scrollHeight, scrollTop } = initHeight.current;
		const initHeightRatio = ((clientHeight / scrollHeight) * 100).toFixed(2);
		setWidthInput(+initHeightRatio);

		// to select current nav btn
		if (class_info && class_online && class_debut) {
			if (scrollTop >= class_info.offsetT && scrollTop < class_info.offsetB) {
				setSelectedNav('class_info');
			} else if (
				scrollTop >= class_online.offsetT &&
				scrollTop < class_online.offsetB
			) {
				setSelectedNav('class_online');
			} else {
				setSelectedNav('class_debut');
			}
		}
	}, [class_info, class_debut, class_online]);

	// changed initial scrollbar height
	const handleScroll = ({
		target: { clientHeight, scrollTop, scrollHeight },
	}) => {
		const changedHeight = scrollTop + clientHeight;
		const calHeight = ((changedHeight / scrollHeight) * 100).toFixed(2);
		setWidthInput(+calHeight);

		// select btn when scrolling
		if (class_info && class_online && class_debut) {
			if (scrollTop >= class_info.offsetT && scrollTop < class_info.offsetB) {
				setSelectedNav('class_info');
			} else if (
				scrollTop >= class_online.offsetT &&
				scrollTop < class_online.offsetB &&
				// check if scroll height == scroll bottom
				changedHeight !== scrollHeight
			) {
				setSelectedNav('class_online');
			} else {
				setSelectedNav('class_debut');
			}
		}
	};

	// navigate articles with nav btns
	const handleNavClick = ({ target: { id } }) => {
		const sectionTop = sectionList[id].offsetT;
		initHeight.current.scrollTo({
			top: sectionTop,
			behavior: 'smooth',
		});
	};

	return (
		<WrapperStyles>
			{/* header */}
			<HeaderStyles>
				<h2 id="class_info" onClick={handleNavClick}>
					강의 로드맵
				</h2>
				{/* btns */}
				<ul>
					<NavStyles
						id="class_info"
						onClick={handleNavClick}
						variant={selectedNav}
					>
						교육과정 안내
					</NavStyles>
					<NavStyles
						id="class_online"
						onClick={handleNavClick}
						variant={selectedNav}
					>
						실시간 클래스
					</NavStyles>
					<NavStyles
						id="class_debut"
						onClick={handleNavClick}
						variant={selectedNav}
					>
						데뷔 클래스
					</NavStyles>
				</ul>
			</HeaderStyles>
			{/* main */}
			<MainStyles>
				<SectionWrapperStyles
					className="SectionWrapperStyles"
					onScroll={handleScroll}
					ref={initHeight}
					add_styles={tw`border-[0.625rem]  rounded-md border-[#fffcfc]`}
				>
					<InfoSectionStyles ref={class_info_ref}>
						<h2>스토리튠즈 아카데미 교육과정 안내</h2>
						<div className="articleWrapper">
							<CardStyles variant="basic">
								<div className="card_header">
									<h3>입문 클래스 (4주 과정)</h3>
									<Button
										navtigate_to="/class-registration/all-classes/online/basic"
										variant="primary"
										add_styles={tw`p-2.5 shadow-none`}
									>
										신청하기
									</Button>
								</div>
								<div className="card_body">
									<h4>글쓰기: 어떻게 시작해야할까?</h4>
									<p>
										함께 웹소설을 시작하고 옳은 방향으로 집필하는 법을 배웁니다.
									</p>
									<p>
										웹소설 집필에 관심이 있다면 누구나 수강 가능한 클래스입니다.
									</p>
									<div>
										<h4>커리큘럼</h4>
										<p>1주차 - 웹소설 글쓰기의 시작 ㅣ What과 How</p>
										<p>2주차 - 글쓰기를 이어가는 힘 ㅣ Who와 Where</p>
										<p>3주차 - 글이 막히는 건 당연하다ㅣ 물음표와 느낌표</p>
										<p>4주차 - 웹소설 작가로 살아남기 ㅣ End와 And</p>
									</div>
								</div>
							</CardStyles>

							<CardStyles variant="adv">
								<div className="card_header">
									<h3>심화 클래스 (8주 과정)</h3>
									<Button
										navtigate_to="/class-registration/all-classes/online/adv"
										variant="primary"
										add_styles={tw`p-2.5 shadow-none`}
									>
										신청하기
									</Button>
								</div>
								<div className="card_body">
									<h4>내 글은 왜 재미가 없을까?</h4>
									<p>
										내 원고 위에 대중성을 입히는 방법을 공부합니다. <br />
										글의 퀄리티나 재미와 별개로, 꾸준히 글을 쓰실 수 있는 분만
										수강하기를 권장하는 클래스입니다.
									</p>
									<div>
										<p>
											- 매 주 피드백을 통해, ‘내가 쓴 글’을 객관적로 분석하고
											개선합니다.
										</p>
										<p>
											- 작법과 연출, 서사와 인물에 대해 좀 더 구체적으로
											배웁니다.
										</p>
										<p>
											- 하루 한 편. 매일 글을 쓸 수 있도록 체계적으로
											훈련합니다.
										</p>
									</div>
								</div>
							</CardStyles>

							<CardStyles variant="info">
								<div className="card_header">
									<h3>PD 클래스 (8주 과정)</h3>
									<Button
										navtigate_to="/class-registration/all-classes/online/pd"
										variant="primary"
										add_styles={tw`p-2.5 shadow-none`}
									>
										신청하기
									</Button>
								</div>
								<div className="card_body">
									<h4>웹소설 PD? 그게 뭐 하는 건데?</h4>
									<p>
										웹소설 PD로써 직무 수행 능력을 기르는 방법을 공부합니다.
										<br />
										관련 직군에 취업을 희망하시거나, 관심은 있지만 무슨 일을
										하는지 몰랐던 분들에게 수강을 권장드립니다.
									</p>
									<div>
										<p>
											-기존 작품들의 분석을 통해, 웹소설의 구조를 파악합니다.
										</p>

										<p>
											-실제 원고를 피드백함으로써 기획 과정을 체험하고, 개선
											방향을 배웁니다.
										</p>

										<p>
											-업계 전망, 실무 팁. 어디서 물어보지 못했던 궁금증을
											해소해줍니다.
										</p>
									</div>
								</div>
							</CardStyles>

							<CardStyles variant="debut">
								<div className="card_header">
									<h3>데뷔 클래스 (8주 과정)</h3>
								</div>
								<div className="card_body">
									<h4>팔리는 글, 팔리지 않는 글.</h4>
									<p>
										데뷔를 위한 마지막 벽을 허물고, 카카오페이지에 데뷔합니다.{' '}
										<br />
										웹소설을 이해하고, 글쓰기 훈련이 충분히 되신 분만 수강하기를
										권장하는 클래스입니다.
									</p>
									<div>
										<p>
											- 입문, 심화 클래스 과정에서 집필한 글을, 대중에게
											인정받을 수 있는 글이 될 수 있도록 끝없이 다듬는
											과정입니다.
										</p>
										<p>
											- 최대 5인 이하의 소수정예로 운영되는, 개인 컨설팅에
											가까운 클래스입니다.
										</p>
									</div>
								</div>
							</CardStyles>
						</div>
					</InfoSectionStyles>

					<SectionStyles variant="second" ref={class_online_ref}>
						<h3>실시간 온라인 클래스 안내</h3>
						<div>
							<p>실시간 스트리밍으로 진행되는 강의입니다.</p>
							<p>
								현직 최상위 웹소설 작가가 직접 수업을 진행하며, 수강생은
								컴퓨터와 스마트폰으로 원하는 장소에서 강의를 수강할 수 있습니다.
							</p>
							<p>
								입문반과 심화반의 강의로 구성되어 있으며, 주 1회-150분의 수업이
								제공됩니다. 마지막 강의 종료 이후 30일 동안 실시간 클래스 영상을
								자유롭게 시청할 수 있습니다.
							</p>
						</div>
						<div>
							<h4>* 입문반</h4>
							<p>정해진 커리큘럼으로 진행되는 이론 강의입니다.</p>
							<p>
								장르구분이 없으며 수강 인원의 제한이 없습니다. 매주 출석 체크의
								과제가 있습니다. 오픈된 강의 시간표에 맞춰 원하는 요일의 원하는
								시간대를 선택하실 수 있습니다.
							</p>
							<p>
								4주 과정 중 총 1회의 피드백이 제공되며, 제출원고는 자동으로
								장학생 심사위원에게 전달됩니다.
							</p>
						</div>
						<div>
							<h4>* 심화반</h4>
							<p>커리큘럼과 피드백으로 진행되는 이론 + 피드백 강의입니다.</p>
							<p>
								장르구분이 존재하며, 본인이 쓰고자 하는 소설의 장르에 맞는
								강사를 선택해야합니다. 각 클래스의 수강인원은 50명으로
								제한됩니다.
							</p>
							<p>
								매주 15,000자의 원고 제출 과제가 있습니다. 꾸준히 글을 써왔으며,
								매주 15,000자의 원고를 쓸 수 있는 분들께 수강을 권합니다. 오픈된
								강의 시간표에 맞춰 원하는 요일의 원하는 시간대를 선택하실 수
								있습니다.
							</p>
							<p>
								8주 과정 중 총 8회의 피드백이 제공되며 제출원고는 자동으로
								장학생 심사위원에게 전달됩니다.
							</p>
						</div>
						<div>
							<h4>* PD반</h4>
							<p>커리큘럼과 피드백으로 진행되는 이론 + 피드백 강의입니다.</p>
							<p>웹소설 PD로써 직무 수행 능력을 기르는 방법을 공부합니다.</p>
							<p>
								관련 직군에 취업을 희망하시거나, 관심은 있지만 무슨 일을 하는지
								몰랐던 분들에게 수강을 권장드립니다.
							</p>
						</div>
					</SectionStyles>

					<SectionStyles variant="third" ref={class_debut_ref}>
						<h3>데뷔 클래스(오프라인) 안내</h3>
						<div>
							<p>
								서울특별시 성수동에 위치한 스토리튠즈의 본원에서 진행되는
								소수정예의 오프라인 강의입니다.
							</p>
							<p>
								현직 최상위 웹소설 작가가 직접 수업을 진행하며, 수강생은 본원에
								직접 방문하여 수강해야합니다. 100% 피드백으로 진행되는
								강의입니다.
							</p>
							<p>
								정해진 수업 시간과 횟수가 없으며, 학생과 강사가 꾸준히 소통하며
								프로 작가에 도전합니다. 장르구분이 존재하며, 본인이 쓰고자하는
								소설의 장르에 맞는 강사가 배정됩니다.
							</p>
							<p>
								각 클래스의 수강인원은 5명으로 제한됩니다. 8주 과정 중 제출한
								모든 원고에 피드백이 제공됩니다. 스토리튠즈 본원에서 데뷔 클래스
								수강생들의 공동 집필 공간을 제공합니다.
							</p>
							<p>
								(단, 방역 수칙을 위반할 시 퇴실 조치될 수 있습니다) 클래스 종료
								이후, 학생의 의사를 반영해 출판 계약을 주선합니다.
							</p>
						</div>
					</SectionStyles>
				</SectionWrapperStyles>

				<BarIndicatorStyles>
					<BarContainerStyles>
						<BarStyles widthInput={widthInput} />
					</BarContainerStyles>
				</BarIndicatorStyles>
			</MainStyles>
		</WrapperStyles>
	);
}

export default Roadmap;
