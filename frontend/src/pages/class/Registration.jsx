import React from 'react';

import 'twin.macro';
import 'styled-components/macro';

import { ClassProvider } from '../../contexts/class/ClassContext';
import { MainStyles, SectionStyles, ContainerStyles } from '../../styles';

import Roadmap from '../../components/Roadmap';

function Registration() {
	return (
		<ClassProvider>
			<MainStyles>
				<SectionStyles variant="even">
					<ContainerStyles>
						<Roadmap />
					</ContainerStyles>
				</SectionStyles>
			</MainStyles>
		</ClassProvider>
	);
}

export default Registration;
