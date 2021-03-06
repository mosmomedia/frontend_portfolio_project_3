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
		pathname === '/admin/sign-in' ||
		pathname === `/admin/registration/edit/${id}` ||
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
						<Link to="/">????????????</Link>
						<span>|</span>
						<Link to="/">????????????????????????</Link>
						<span>|</span>
						<Link to="/">????????????</Link>
					</div>
					{/* lower - infor address */}
					<p>?????????????????????: 831-86-01367</p>
					<p>???????????????????????????: 2019-????????????-02193</p>
					<p>??????: ?????? ????????? ???????????? 99 AK?????? 1418??? ???????????????</p>
				</CenterItemStyles>
				{/* right - info B */}
				<RightItemStyles>
					<p>????????????: ?????????</p>
					<p>????????????: 02. 2039 9377</p>
					<p>?????????: official@storytunes.net</p>
					<p>Copyright ?? 2021 Story Tunes. All rights reserved.</p>
				</RightItemStyles>
			</Wrapper>
		</SectionStyles>
	);
}

export default Footer;
