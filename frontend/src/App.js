import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/auth/AuthContext';
import { GlobalStyles } from 'twin.macro';

import BaseStyles from './styles/BaseStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';

function App() {
	return (
		<AuthProvider>
			<GlobalStyles />
			<BaseStyles />
			<Router>
				<Header></Header>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
				</Routes>
				{/* <Footer /> */}
				<ToastContainer autoClose={2500} />
			</Router>
		</AuthProvider>
	);
}

export default App;
