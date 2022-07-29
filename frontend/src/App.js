import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AdminProvider } from './contexts/admin/AdminContext';
import { ClassProvider } from './contexts/class/ClassContext';

import ScrollToTop from './components/ScrollToTop';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';

import SignIn from './pages/accounts/SignIn';
import SignUp from './pages/accounts/SignUp';
import ForgotPassword from './pages/accounts/ForgotPassword';

import ClassRegistration from './pages/class/ClassRegistration';
import DebutHistory from './pages/student/DebutHistory';
import Scholarship from './pages/student/Scholarship';

import Company from './pages/company/Company';

import Faq from './pages/customer/Faq';

import Dashboard from './pages/dashboard/Dashboard';
import MyClassRoom from './pages/dashboard/MyClassRoom';
import MyBoard from './pages/dashboard/MyBoard';
import MyPage from './pages/dashboard/MyPage';

import MyAdminMain from './pages/admin/MyAdmin';

import NotFound from './pages/etc/NotFound';
import PrivateRoute from './components/PrivateRoute';

function App() {
	return (
		<AdminProvider>
			<ClassProvider>
				<Router>
					<ScrollToTop>
						<Header />
						<Routes>
							<Route path="*" element={<NotFound />} />
							<Route path="/notfound" element={<NotFound />} />

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
							/>

							{/* debut - history & scholarship */}
							<Route path="/student/debut-history" element={<DebutHistory />} />
							<Route path="/student/scholarship" element={<Scholarship />} />

							{/* company */}
							<Route path="/company/*" element={<Company />} />

							{/*customer  */}
							<Route path="/customer/faq" element={<Faq />} />

							{/* Dashboard */}
							<Route path="/dashboard" element={<PrivateRoute />}>
								<Route path="/dashboard" element={<Dashboard />}>
									<Route path="my-classroom/*" element={<MyClassRoom />} />
									<Route path="my-board/*" element={<MyBoard />} />
									<Route path="my-page/*" element={<MyPage />} />
								</Route>
							</Route>

							{/* admin */}
							<Route path="/admin/*" element={<MyAdminMain />} />
						</Routes>
						<Footer />
						<ToastContainer autoClose={2500} />
					</ScrollToTop>
				</Router>
			</ClassProvider>
		</AdminProvider>
	);
}

export default App;
