import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { updateMyWork } from '../../../contexts/myWorkBoard/MyWorkActions';

import { useMyWorkContext } from '../../../contexts/myWorkBoard/MyWorkContext';

import Spinner from '../../../components/shared/Spinner';
import { toast } from 'react-toastify';

import {
	MainStyles,
	FormStyles,
	InputGroupStyles,
	InputStyles,
	DescriptionStyles,
	GenreWrapperStyles,
	GenreGroupStyles,
	GenreInputStyles,
	SubmitStyles,
	ButtonStyles,
} from '../styles/PublishWorkStyles';

function CreateWork() {
	const [loading, setLoading] = useState(false);
	const [isDisabled, setIsDisabled] = useState(true);

	const { currentWork, dispatch, myWorkList } = useMyWorkContext();

	const genreArr = [
		'판타지',
		'로맨스',
		'로맨스판타지',
		'현대판타지',
		'판타지드라마',
		'BL',
		'무협',
		'대체역사',
		'기타',
	];

	const [formData, setFormData] = useState({
		title: '',
		genre: '',
		shortDesc: '',
	});

	const { title, genre, shortDesc } = formData;

	const navigate = useNavigate();

	useEffect(() => {
		if (currentWork) {
			const { title, genre, shortDesc } = currentWork;
			setFormData({ title, genre, shortDesc });
		} else {
			navigate('/dashboard/my-board');
		}
	}, []);

	useEffect(() => {
		if (title && genre && shortDesc) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [title, genre, shortDesc]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const { _id: workId } = currentWork;

		try {
			const { findWork, message } = await updateMyWork(formData, workId);

			const payload = myWorkList.map((item) => {
				if (item._id === workId) {
					return findWork;
				} else {
					return item;
				}
			});

			setLoading(false);

			if (message === 'success') {
				dispatch({ type: 'UPDATE_MY_WORKS', payload });
				toast.success('정보 변경 성공했습니다.');
				navigate('/dashboard/my-board');
			} else {
				toast.error('문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
			}
		} catch (error) {
			console.log(error);
			toast.error('문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
		}
		setLoading(false);
	};

	const handleChange = ({ target: { name, value } }) => {
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	if (loading) return <Spinner />;

	return (
		<MainStyles>
			<FormStyles onSubmit={handleSubmit}>
				<InputGroupStyles>
					<label htmlFor="title">
						<h4>작품명</h4>
					</label>
					<InputStyles
						type="text"
						id="title"
						name="title"
						value={title}
						onChange={handleChange}
						required
					/>
				</InputGroupStyles>

				<InputGroupStyles>
					<h4>장르 선택</h4>
					<GenreWrapperStyles>
						{genreArr.map((item, id) => (
							<GenreGroupStyles key={id}>
								<label htmlFor={item}>
									<GenreInputStyles
										type="radio"
										value={item}
										id={item}
										name="genre"
										onChange={handleChange}
										checked={genre === item}
										required
									/>
									<span className="label-title">{item}</span>
									<span className="label-checked"></span>
								</label>
							</GenreGroupStyles>
						))}
					</GenreWrapperStyles>
				</InputGroupStyles>

				<InputGroupStyles>
					<label htmlFor="shortDesc">
						<h4>소개글 &#40;최대 100자&#41;</h4>
					</label>
					<DescriptionStyles
						id="shortDesc"
						name="shortDesc"
						minLength={10}
						maxLength={100}
						cols="30"
						rows="10"
						value={shortDesc}
						onChange={handleChange}
						required
					/>
				</InputGroupStyles>

				<SubmitStyles>
					<ButtonStyles
						type="submit"
						id="submit-button"
						isDisabled={isDisabled}
					>
						변경하기
					</ButtonStyles>
				</SubmitStyles>
			</FormStyles>
		</MainStyles>
	);
}

export default CreateWork;
