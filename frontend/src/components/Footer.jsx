import tw, { styled } from 'twin.macro';
import 'twin.macro';
import 'styled-components/macro';

import { Link } from 'react-router-dom';

import link_fb from '../assets/icons/ico_link_fb.png';
import link_insta from '../assets/icons/ico_link_insta.png';
import link_naver from '../assets/icons/ico_link_naver.png';
import link_kakao from '../assets/icons/ico_link_kakao.png';

function Footer() {
	return (
		<footer>
			{/*left - logo ans social media links */}
			<div>
				<img src="" alt="" />
				<div>
					<span>STORY TUNES</span>
					<span>Web Novel Academy</span>
				</div>
				<div>
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
				</div>
			</div>
			{/* center - info A*/}
			<div>
				{/* upper - privacy term refund */}
				<div>
					<Link to="/">이용약관</Link>
					<Link to="/">개인정보처리방침</Link>
					<Link to="/">환불정책</Link>
				</div>
				{/* lower - infor address */}
				<p>사업자등록번호: 831-86-01367</p>
				<p>통신판매업신고번호: 2019-서울성동-02193</p>
				<p>주소: 서울 성동구 성수일로 99 AK벨리 1418호 스토리튠즈</p>
			</div>
			{/* right - info B */}
			<div>
				<p>대표자명: 권경재</p>
				<p>대표전화: 02. 2039 9377</p>
				<p>이메일: official@storytunes.net</p>
				<p>Copyright © 2021 Story Tunes. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default Footer;
