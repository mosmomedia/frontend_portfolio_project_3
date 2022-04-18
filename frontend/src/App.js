import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/auth/AuthContext';
import { GlobalStyles } from 'twin.macro';

import BaseStyles from './styles/BaseStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';

import SignIn from './pages/accounts/SignIn';
import SignUp from './pages/accounts/SignUp';
import ForgotPassword from './pages/accounts/ForgotPassword';

import About from './pages/company/About';
import Team from './pages/company/Team';
import Faq from './pages/customer/Faq';

function App() {
	return (
		<AuthProvider>
			<GlobalStyles />
			<BaseStyles />
			<Router>
				<Header></Header>
				<Routes>
					{/* landing */}
					<Route path="/" element={<Landing />} />
					{/* accounts */}
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					{/* company */}
					<Route path="/about" element={<About />} />
					<Route path="/team" element={<Team />} />
					{/*customer  */}
					<Route path="/faq" element={<Faq />} />
				</Routes>
				<Footer />
				<ToastContainer autoClose={2500} />
			</Router>
		</AuthProvider>
	);
}

export default App;
