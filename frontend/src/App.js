import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from 'twin.macro';
import BaseStyles from './styles/BaseStyles';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<GlobalStyles />
			<BaseStyles />
			<Router>
				<Header />

				{/* <Footer /> */}
			</Router>
		</>
	);
}

export default App;
