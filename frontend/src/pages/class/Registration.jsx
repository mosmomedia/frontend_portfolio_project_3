import { Routes, Route } from 'react-router-dom';

import 'twin.macro';
import 'styled-components/macro';

import { ClassProvider } from '../../contexts/class/ClassContext';
import { SectionStyles } from '../../styles/RegistrationStyles';
import { ContainerStyles } from '../../styles';

import Roadmap from '../../components/Roadmap';

function Registration() {
	return (
		<ClassProvider>
			<SectionStyles>
				<ContainerStyles>
					<Routes>
						<Route path="/roadmap" element={<Roadmap />} />
					</Routes>
				</ContainerStyles>
			</SectionStyles>
		</ClassProvider>
	);
}

export default Registration;
