import { Routes, Route } from 'react-router-dom';

import { ClassProvider } from '../../contexts/class/ClassContext';
import { SectionStyles } from '../../styles/RegistrationStyles';
import { ContainerStyles } from '../../styles';

import Roadmap from './ClassRoadmap';
import ClassAllList from './ClassAllList';

function ClassRegistration() {
	return (
		<ClassProvider>
			<SectionStyles>
				<ContainerStyles>
					<Routes>
						<Route path="/roadmap" element={<Roadmap />} />
						<Route path="/all-classes" element={<ClassAllList />} />
					</Routes>
				</ContainerStyles>
			</SectionStyles>
		</ClassProvider>
	);
}

export default ClassRegistration;
