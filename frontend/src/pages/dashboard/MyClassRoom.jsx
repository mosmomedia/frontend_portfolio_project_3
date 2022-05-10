import { Route, Routes } from 'react-router-dom';

import Home from './components/ClassMain';
import Stream from './components/Stream';
import Recording from './components/Recording';
import NotFound from '../etc/NotFound';

function MyClassRoom() {
	return (
		<Routes>
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Home />} />
			<Route path="stream" element={<Stream />} />
			<Route path="recording" element={<Recording />} />
		</Routes>
	);
}

export default MyClassRoom;
