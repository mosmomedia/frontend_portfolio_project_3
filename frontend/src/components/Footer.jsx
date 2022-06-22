import 'twin.macro';
import 'styled-components/macro';

import { Link, useLocation } from 'react-router-dom';

import link_fb from '../assets/icons/ico_link_fb.png';
import link_insta from '../assets/icons/ico_link_insta.png';
import link_naver from '../assets/icons/ico_link_naver.png';
import link_kakao from '../assets/icons/ico_link_kakao.png';
import logo_circle from '../assets/logos/logo_circle.svg';

import {
	SectionStyles,
	Wrapper,
	LeftItemStyles,
	CenterItemStyles,
	RightItemStyles,
	LogoStyles,
	LinkListStyles,
} from '../styles/FooterStyles';

function Footer() {
	const { pathname } = useLocation();
	const splitURI = pathname.trim().split('/');
	const id = splitURI[splitURI.length - 1];
	// exclude footer in specific components
	if (
		pathname === '/sign-in' ||
		pathname === '/sign-up' ||
		pathname === '/forgot-password' ||
		pathname === '/dashboard/my-classroom' ||
		pathname === '/dashboard/my-classroom/stream' ||
		pathname === `/dashboard/my-classroom/stream/${id}` ||
		pathname === '/dashboard/my-classroom/history' ||
		pathname === '/dashboard/my-board' ||
		pathname === `/dashboard/my-board/${id}` ||
		pathname === `/dashboard/my-board/edit/${id}` ||
		pathname === `/dashboard/my-board/work/write/${id}` ||
		pathname === `/dashboard/my-board/work/edit/${id}` ||
		pathname === `/dashboard/my-board/work/list/${id}` ||
		pathname === `/dashboard/my-board/work/viewer/${id}` ||
		pathname === '/dashboard/my-board/publish' ||
		pathname === '/dashboard/my-page/change-myinfo' ||
		pathname === '/dashboard/my-page' ||
		pathname === '/admin' ||
		pathname === '/admin/registration' ||
		pathname === `/admin/class/${id}` ||
		pathname === `/admin/registration/edit/${id}` ||
		pathname === '/admin/classes'
	)
		return null;

	return (
		<SectionStyles>
			{/*left - logo ans social media links */}
			<Wrapper>
				<LeftItemStyles>
					<LogoStyles>
						<img src={logo_circle} alt="" />
						<div>
							<span>STORY TUNES</span>
							<span>Web Novel Academy</span>
						</div>
					</LogoStyles>
					<LinkListStyles>
						<Link to="/">
							<img src={link_fb} alt="" />
						</Link>
						<Link to="/">
							<img src={link_insta} alt="" />
						</Link>
						<Link to="/">
							<img src={link_naver} alt="" />
						</Link>
						<Link to="/">
							<img src={link_kakao} alt="" />
						</Link>
					</LinkListStyles>
				</LeftItemStyles>
				{/* center - info A*/}
				<CenterItemStyles>
					{/* upper - privacy term refund */}
					<div>
						<Link to="/">이용약관</Link>
						<span>|</span>
						<Link to="/">개인정보처리방침</Link>
						<span>|</span>
						<Link to="/">환불정책</Link>
					</div>
					{/* lower - infor address */}
					<p>사업자등록번호: 831-86-01367</p>
					<p>통신판매업신고번호: 2019-서울성동-02193</p>
					<p>주소: 서울 성동구 성수일로 99 AK벨리 1418호 스토리튠즈</p>
				</CenterItemStyles>
				{/* right - info B */}
				<RightItemStyles>
					<p>대표자명: 권경재</p>
					<p>대표전화: 02. 2039 9377</p>
					<p>이메일: official@storytunes.net</p>
					<p>Copyright © 2021 Story Tunes. All rights reserved.</p>
				</RightItemStyles>
			</Wrapper>
		</SectionStyles>
	);
}

export default Footer;
