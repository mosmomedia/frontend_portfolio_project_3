import { Route, Routes } from 'react-router-dom';
import Stream from './components/Stream';
import Recording from './components/Recording';

function MyClassRoom() {
	return (
		<Routes>
			<Route path="stream" element={<Stream />} />
			<Route path="recording" element={<Recording />} />
		</Routes>
	);
}

export default MyClassRoom;
