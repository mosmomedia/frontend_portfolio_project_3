import React from 'react';

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
					<Roadmap />
				</ContainerStyles>
			</SectionStyles>
		</ClassProvider>
	);
}

export default Registration;
