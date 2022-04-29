import React from 'react';

function Sidebar() {
	return (
		<div>
			{/* side nav bar */}
			<div>
				{/* header for mobile */}
				<div></div>
				{/* navbar */}
				<div>
					<ul>
						<li>
							<h3>나의 강의실</h3>
							<ol>
								<li>실시간 강의</li>
								<li>녹화 강의</li>
							</ol>
						</li>

						<li>
							<h3>연재 게시판</h3>
						</li>

						<li>
							<h3>나의 정보</h3>
							<ol>
								<li>할인쿠폰</li>
								<li>정보변경</li>
								<li>회원탈퇴</li>
							</ol>
						</li>
					</ul>
				</div>
			</div>
			{/* main */}
		</div>
	);
}

export default Sidebar;
