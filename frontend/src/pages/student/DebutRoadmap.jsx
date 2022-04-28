import { Routes, Route } from 'react-router-dom';

import { BookProvider } from '../../contexts/book/BookContext';

import DebutHistory from './DebutHistory';
import Scholarship from './Scholarship';

function ClassRegistration() {
	return (
		<BookProvider>
			<Routes>
				<Route path="/debut-history" element={<DebutHistory />}></Route>
				<Route path="/scholarship" element={<Scholarship />}></Route>
			</Routes>
		</BookProvider>
	);
}

export default ClassRegistration;
