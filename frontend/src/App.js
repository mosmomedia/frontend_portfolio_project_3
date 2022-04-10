import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalStyles } from 'twin.macro';
import BaseStyles from './styles/BaseStyles';

function App() {
	return (
		<>
			<GlobalStyles />
			<BaseStyles />
			<Router></Router>
		</>
	);
}

export default App;
