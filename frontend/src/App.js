import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import { GlobalStyles } from 'twin.macro';
import BaseStyles from './styles/BaseStyles';

import Header from './components/Header';
import Footer from './components/Footer';

import SignIn from './pages/SignIn';

function App() {
	return (
		<>
			<GlobalStyles />
			<BaseStyles />
			<Router>
				<Header></Header>
				<Routes>
					<Route path="/sign-in" element={<SignIn />} />
				</Routes>
				{/* <Footer /> */}
			</Router>
		</>
	);
}

export default App;
