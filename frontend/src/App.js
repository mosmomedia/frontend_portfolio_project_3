import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { AuthProvider } from './contexts/auth/AuthContext';
import { GlobalStyles } from 'twin.macro';
import ScrollToTop from './components/ScrollToTop';

import BaseStyles from './styles/BaseStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';

import ClassRegistration from './pages/class/ClassRegistration';

import SignIn from './pages/accounts/SignIn';
import SignUp from './pages/accounts/SignUp';
import ForgotPassword from './pages/accounts/ForgotPassword';

import DebutHistory from './pages/student/DebutHistory';
import Scholarship from './pages/student/Scholarship';

import About from './pages/company/About';
import Team from './pages/company/Team';
import Partners from './pages/company/Partners';
import Location from './pages/company/Location';

import Faq from './pages/customer/Faq';

function App() {
	return (
		<AuthProvider>
			<GlobalStyles />
			<BaseStyles />
			<Router>
				<ScrollToTop>
					<Header></Header>
					<Routes>
						<Route path="*" element={<Navigate to="/" replace />} />
						{/* landing */}
						<Route path="/" element={<Landing />} />
						{/* accounts */}
						<Route path="/sign-in" element={<SignIn />} />
						<Route path="/sign-up" element={<SignUp />} />
						<Route path="/forgot-password" element={<ForgotPassword />} />

						{/* class registration */}
						<Route
							path="/class-registration/*"
							element={<ClassRegistration />}
						></Route>

						{/* debut - history & scholarship */}
						<Route path="/student/history" element={<DebutHistory />}></Route>
						<Route
							path="/student/scholarship"
							element={<Scholarship />}
						></Route>

						{/* company */}
						<Route path="/company/about" element={<About />} />
						<Route path="/company/team" element={<Team />} />
						<Route path="/company/partners" element={<Partners />} />
						<Route path="/company/location" element={<Location />} />
						{/*customer  */}
						<Route path="/customer/faq" element={<Faq />} />
					</Routes>
					<Footer />
					<ToastContainer autoClose={2500} />
				</ScrollToTop>
			</Router>
		</AuthProvider>
	);
}

export default App;
