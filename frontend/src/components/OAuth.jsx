import firebase from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import tw, { styled } from 'twin.macro';
import googleIcon from '../assets/icons/ico_link_google.png';

const Wrapper = styled.div`
	${tw`flex justify-between items-center rounded-md px-2.5 py-1.5 text-[#c4c4c4]`}
	border: 1px solid #353535;
`;

const ImageStyle = styled.img`
	${tw`h-8`}
`;

function OAuth({ setLoading }) {
	const navigate = useNavigate();
	const onGoogleClick = async () => {
		setLoading(true);
		try {
			const provider = new firebase.GoogleAuthProvider();
			const userCredential = await firebase.signInWithPopup(
				firebase.auth,
				provider
			);

			const { email, uid, displayName } = userCredential.user;

			const docRef = firebase.doc(firebase.db, 'users', uid);
			const docSnap = await firebase.getDoc(docRef);

			if (!docSnap.exists()) {
				let userObjectId = firebase.createMongoObjectId();

				const userProfile = {
					userObjectId,
					email,
					name: displayName,
					nickname: '',
					phone: '',
					createdAt: firebase.serverTimestamp(),
				};
				await firebase.setDoc(docRef, userProfile);
			}

			toast(`Welcome, ${displayName}!`);
			navigate('/');
		} catch (error) {
			console.log(error);
			toast.error('Could not authorize with Google');
		}
		setLoading(false);
	};

	return (
		<Wrapper>
			<span>SNS 아이디 연동하기</span>
			<button onClick={onGoogleClick}>
				<ImageStyle src={googleIcon} alt="google auth" />
			</button>
		</Wrapper>
	);
}

export default OAuth;
