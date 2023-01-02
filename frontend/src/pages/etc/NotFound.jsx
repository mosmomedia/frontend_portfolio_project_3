import 'twin.macro';
import 'styled-components/macro';
import tw from 'twin.macro';

import Button from '../../components/shared/Button';

function NotFound() {
	return (
		<div tw="bg-adv h-screen grid place-content-center ">
			<div tw=" mx-auto flex flex-col space-y-20 text-center">
				<div tw="space-y-5 lg:space-y-10">
					<h1 tw="text-6xl px-0.5 lg:text-7xl">x 404 x</h1>
					<h2 tw="text-lg px-1 lg:text-xl">
						This is <span tw="text-purple-600">not</span> the web page you are
						looking for.
					</h2>
				</div>
				<Button
					navtigate_to="/"
					variant="primary"
					add_styles={tw`text-lg py-3 px-8 mx-auto lg:text-xl lg:px-9`}
				>
					Bact To Home
				</Button>
			</div>
		</div>
	);
}

export default NotFound;
