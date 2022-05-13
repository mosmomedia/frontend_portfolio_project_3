import { Routes, Route } from 'react-router-dom';

import { SectionStyles } from '../../styles/RegistrationStyles';
import { ContainerStyles } from '../../styles';

import NotFound from '../etc/NotFound';

import Roadmap from './ClassRoadmap';
import ClassAllList from './ClassAllList';

function ClassRegistration() {
	return (
		<SectionStyles>
			<ContainerStyles>
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/roadmap" element={<Roadmap />} />
					<Route path="/all-classes/*" element={<ClassAllList />} />
				</Routes>
			</ContainerStyles>
		</SectionStyles>
	);
}

export default ClassRegistration;
