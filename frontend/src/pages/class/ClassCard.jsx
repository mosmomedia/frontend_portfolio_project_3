import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth/AuthContext';
import { placeOrder } from '../../contexts/order/OrderActions';

import { toast } from 'react-toastify';

import {
	CardStyles,
	LeftItemStyles,
	RightItemStyles,
	ButtonStyles,
} from '../../styles/ClassBtnStyles';

function ClassCard({ item }) {
	const { _id, title, type, weeks, hours, period, tutor, price } = item;
	const { user, loading } = useAuthContext();
	const navigate = useNavigate();
	// console.log(user, loading);
	const handleOnClick = async () => {
		if (!user) {
			navigate('/sign-in');
			toast.error('수강신청 시 로그인이 필요합니다.');
		} else {
			if (window.confirm('[테스트] 신청..?')) {
				const formData = {
					...item,
					classId: _id,
					paymentMethod: 'Credit',
				};
				const res = await placeOrder(formData);
				console.log(res);
				// console.log(title, type, tutor, price);
			}
		}
	};
	return (
		<CardStyles variant={type}>
			{/* left item - title, tutor, hours, period  */}
			<LeftItemStyles>
				<h2>{title}</h2>
				<div>
					<h3>강사 : {tutor}</h3>
					<div>수강 시간 : {hours}</div>
					<div>수강 기간 : {period}</div>
				</div>
			</LeftItemStyles>
			{/* right item - weeks, price, checkout btn */}
			<RightItemStyles>
				<h2>{weeks}주</h2>
				<h3>{price.toLocaleString('ko-KR')}원</h3>
				<ButtonStyles onClick={handleOnClick}>신청하기</ButtonStyles>
			</RightItemStyles>
		</CardStyles>
	);
}

export default ClassCard;
