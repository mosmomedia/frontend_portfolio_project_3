import tw from 'twin.macro';

const LoadingStyles = tw.div`fixed inset-0 bg-[rgba(0, 0, 0, 0.2)] z-50 flex justify-center items-center`;
const SpinnerStyles = tw.div`w-16 h-16 border-8 border-solid border-l-st_bg2 border-b-transparent  border-r-keyColor border-t-transparent  rounded-full animate-spin`;

function Spinner() {
	return (
		<LoadingStyles>
			<SpinnerStyles />
		</LoadingStyles>
	);
}

export default Spinner;
