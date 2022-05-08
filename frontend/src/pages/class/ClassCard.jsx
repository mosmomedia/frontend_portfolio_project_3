import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/auth/AuthContext';
import { placeOrder } from '../../contexts/order/OrderActions';
import { enrollStudentToClass } from '../../contexts/class/ClassActions';
import { addClassToStudent } from '../../contexts/auth/AuthActions';

import firebase from '../../config/firebase';

import Spinner from '../../components/shared/Spinner';
import { toast } from 'react-toastify';

import {
	CardStyles,
	LeftItemStyles,
	RightItemStyles,
	ButtonStyles,
} from '../../styles/ClassBtnStyles';

function ClassCard({ item }) {
	const [isLoading, setIsLoading] = useState(false);
	const { _id, title, type, month, weeks, hours, period, tutor, price } = item;
	const { user } = useAuthContext();
	const navigate = useNavigate();
	const handleOnClick = async () => {
		if (!user) {
			navigate('/sign-in');
			toast.error('수강신청 시 로그인이 필요합니다.');
		} else {
			if (window.confirm('[테스트] 신청..?')) {
				setIsLoading(true);
				const formData = {
					...item,
					classId: _id,
					paymentMethod: 'Credit',
				};

				const docSnap = firebase.doc(firebase.db, 'users', user.uid);
				const getUserDb = await firebase.getDoc(docSnap);
				const { userObjectId } = getUserDb.data();

				const [isEnrolled, isPlaced, isAdded] = await Promise.all([
					enrollStudentToClass(_id, month),
					placeOrder(formData),
					addClassToStudent(userObjectId, _id),
				]);

				if (isEnrolled && isPlaced && isAdded) {
					toast('강의 신청 성공! 감사합니다.');
				} else {
					toast('강의 신청에 실패 했습니다.');
					console.log('Error: cannot order the class');
				}

				setIsLoading(false);
			}
		}
	};
	if (isLoading) return <Spinner />;
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
