import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from 'twin.macro';

import BaseStyles from './styles/BaseStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Footer from './components/Footer';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
	return (
		<>
			<GlobalStyles />
			<BaseStyles />
			<Router>
				<Header></Header>
				<Routes>
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
				</Routes>
				{/* <Footer /> */}
				<ToastContainer autoClose={2500} />
			</Router>
		</>
	);
}

export default App;
