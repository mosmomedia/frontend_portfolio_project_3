import tw, { styled } from 'twin.macro';
import { useNavigate } from 'react-router-dom';
import 'twin.macro';
import 'styled-components/macro';

// style props
const BaseBtn = tw`py-1.5 px-3 lg:py-2.5 lg:px-4 tracking-wider rounded-lg sm:hover:opacity-90`;

const PrimaryBtn = tw`bg-primary text-primary rounded-lg shadow-md   sm:hover:shadow-inner`;

const SecondaryBtn = tw`bg-secondary text-secondary md:rounded-lg md:border border-keyColor shadow-md   sm:hover:shadow-inner`;

const SubmitStyles = tw`bg-[#ea4b4e] text-white sm:py-2.5 sm:px-4 `;

const DisabledStyles = tw`bg-st_bg1 text-gray-500 cursor-not-allowed sm:py-2.5 sm:px-4 sm:hover:opacity-100`;

const DashboardStyle = tw`flex justify-between  items-center w-[8.375rem]  lg:mt-[1rem] bg-st_alt1 text-white lg:text-[0.9375rem] rounded-md lg:py-2.5`;
//

const ButtonStyles = styled.button`
	${BaseBtn}
	${({ variant }) => variant === 'primary' && PrimaryBtn}
		${({ variant }) => variant === 'secondary' && SecondaryBtn}
		${({ variant, disabled }) =>
		variant === 'submit' ? (disabled ? DisabledStyles : SubmitStyles) : null}
		${({ variant }) => variant === 'dashboard' && DashboardStyle}

		${({ add_styles }) => add_styles && add_styles}
`;

function Button({ children, variant, add_styles, disabled, navtigate_to }) {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(navtigate_to);
	};

	return (
		<ButtonStyles
			disabled={disabled}
			variant={variant}
			add_styles={add_styles}
			onClick={handleClick}
		>
			{children}
		</ButtonStyles>
	);
}

export default Button;
