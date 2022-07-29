import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from '../../config/firebase';
import { placeOrder } from '../../contexts/order/OrderActions';
import { enrollStudentToClass } from '../../contexts/class/ClassActions';
import { addClassToStudent } from '../../contexts/myClassRoom/MyClassActions';

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

	const {
		_id,
		title,
		type,
		weeks,
		startDate,
		startHour,
		endDate,
		endHour,
		tutor,
		price,
		isPurchased,
	} = item;

	const dateToString = (date) => {
		const formattedDateKR = new Intl.DateTimeFormat('ko-KR').format(date);
		const formattedWeekdayKR = new Intl.DateTimeFormat('ko-KR', {
			weekday: 'short',
		}).format(date);

		const formattedDate = `${formattedDateKR} (${formattedWeekdayKR})`;

		return formattedDate;
	};

	const hourToString = (hour) => {
		const hrs = hour.getHours();
		const min = hour.getMinutes();
		return `${hrs < 10 ? hrs.toString().padStart(2, '0') : hrs}:${
			min < 10 ? min.toString().padStart(2, '0') : min
		}`;
	};
	const fmStartDate = dateToString(new Date(startDate));
	const fmEndDate = dateToString(new Date(endDate));

	const fmStartHour = hourToString(new Date(startHour));
	const fmEndHour = hourToString(new Date(endHour));

	const [user, loading] = useAuthState(firebase.auth);

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
					paymentMethod: 'Credit',
				};

				const docRef = firebase.doc(firebase.db, 'users', user.uid);
				const docSnap = await firebase.getDoc(docRef);
				const { userObjectId } = docSnap.data();

				const [isEnrolled, isPlaced, isAdded] = await Promise.all([
					enrollStudentToClass(_id),
					placeOrder(formData),
					addClassToStudent(userObjectId, _id),
				]);

				if (isEnrolled && isPlaced && isAdded) {
					window.location.reload(false);
					toast('강의 신청 성공! 감사합니다.');
				} else {
					toast('강의 신청에 실패 했습니다.');
					console.log('Error: cannot order the class');
				}

				setIsLoading(false);
			}
		}
	};
	if (isLoading || loading) return <Spinner />;
	return (
		<CardStyles variant={type}>
			{/* left item - title, tutor, hours, period  */}
			<LeftItemStyles>
				<h2>{title}</h2>
				<div>
					<h3>강사 : {tutor}</h3>
					<div>
						수강 시간 : {fmStartHour} - {fmEndHour}
					</div>
					<div>
						수강 기간 : {fmStartDate} - {fmEndDate}
					</div>
				</div>
			</LeftItemStyles>
			{/* right item - weeks, price, checkout btn */}
			<RightItemStyles>
				<h2>{weeks}주</h2>
				<h3>{price.toLocaleString('ko-KR')}원</h3>
				<ButtonStyles
					onClick={handleOnClick}
					disabled={isPurchased}
					isPurchased={isPurchased}
				>
					{isPurchased ? '신청완료' : '신청하기'}
				</ButtonStyles>
			</RightItemStyles>
		</CardStyles>
	);
}

export default ClassCard;
