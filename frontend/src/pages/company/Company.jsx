import { Routes, Route } from 'react-router-dom';

import About from './About';
import Team from './Team';
import Partners from './Partners';
import Location from './Location';
import NotFound from '../etc/NotFound';

function Company() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="about" element={<About />} />
			<Route path="team" element={<Team />} />
			<Route path="partners" element={<Partners />} />
			<Route path="location" element={<Location />} />
		</Routes>
	);
}

export default Company;
