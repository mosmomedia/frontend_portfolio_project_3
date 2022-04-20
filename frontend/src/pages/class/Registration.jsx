import React from 'react';
import { ClassProvider } from '../../contexts/class/ClassContext';
import { MainStyles, SectionStyles, ContainerStyles } from '../../styles';

import Roadmap from '../../components/Roadmap';

function Registration() {
	return (
		<ClassProvider>
			<MainStyles>
				<SectionStyles variant="first">
					<ContainerStyles>
						<Roadmap />
					</ContainerStyles>
				</SectionStyles>
			</MainStyles>
		</ClassProvider>
	);
}

export default Registration;
