import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AdminProvider } from './contexts/admin/AdminContext';

import ScrollToTop from './components/ScrollToTop';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';

import SignIn from './pages/accounts/SignIn';
import SignUp from './pages/accounts/SignUp';
import ForgotPassword from './pages/accounts/ForgotPassword';

// import ClassRegistration from './pages/class/ClassRegistration';
import DebutHistory from './pages/student/DebutHistory';
import Scholarship from './pages/student/Scholarship';

import Company from './pages/company/Company';

import Faq from './pages/customer/Faq';

import Dashboard from './pages/dashboard/Dashboard';
import MyClassRoom from './pages/dashboard/MyClassRoom';
import MyBoard from './pages/dashboard/MyBoard';
import MyPage from './pages/dashboard/MyPage';

import MyAdminMain from './pages/admin/MyAdminMain';
import MyAdminHome from './pages/admin/MyAdminHome';
import AdminRoute from './components/AdminRoute';
import MyAdminSignIn from './pages/admin/components/MyAdminSignIn';
import MyAdminClassRegistration from './pages/admin/MyAdminClassRegistration';
import MyAdminClassRegistartionEdit from './pages/admin/MyAdminClassRegistartionEdit';

import MyAdminSingleClass from './pages/admin/components/MyAdminSingleClass';

import MyAdminClasses from './pages/admin/MyAdminClasses';

import NotFound from './pages/etc/NotFound';
import PrivateRoute from './components/PrivateRoute';

import { useAuthState } from 'react-firebase-hooks/auth';
import firebase from './config/firebase';
import Spinner from './components/shared/Spinner';

function App() {
	const [user, loading] = useAuthState(firebase.auth);

	if (loading) return <Spinner />;

	return (
		<Router>
			<ScrollToTop>
				<Header userState={user} />
				<Routes>
					{/* <Route path="/*" element={<NotFound />} /> */}
					<Route path="/notfound" element={<NotFound />} />

					{/* landing */}
					<Route path="/" element={<Landing />} />

					{/* accounts */}
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />

					{/* class registration */}
					{/* <Route path="/class-registration/*" element={<ClassRegistration />} /> */}

					{/* debut - history & scholarship */}
					<Route path="/student/debut-history" element={<DebutHistory />} />
					<Route path="/student/scholarship" element={<Scholarship />} />

					{/* company */}
					<Route path="/company/*" element={<Company />} />

					{/*customer  */}
					<Route path="/customer/faq" element={<Faq />} />

					{/* dashboard */}
					<Route path="/dashboard/*" element={<PrivateRoute />}>
						<Route path="/dashboard/*" element={<Dashboard />}>
							<Route path="my-classroom/*" element={<MyClassRoom />} />
							<Route path="my-board/*" element={<MyBoard />} />
							<Route path="my-page/*" element={<MyPage />} />
						</Route>
					</Route>
				</Routes>

				{/* admin */}
				<AdminProvider>
					<Routes>
						<Route path="/admin/sign-in" element={<MyAdminSignIn />} />
						<Route path="/admin" element={<AdminRoute />}>
							<Route path="/admin" element={<MyAdminMain />}>
								<Route path="" element={<MyAdminHome />} />
								<Route
									path="registration"
									element={<MyAdminClassRegistration />}
								/>
								<Route
									path="registration/edit/:id"
									element={<MyAdminClassRegistartionEdit />}
								/>
								<Route path="classes" element={<MyAdminClasses />} />
								<Route path="class/:id" element={<MyAdminSingleClass />} />
							</Route>
						</Route>
					</Routes>
				</AdminProvider>
				<Footer />

				<ToastContainer autoClose={2500} />
			</ScrollToTop>
		</Router>
	);
}

export default App;
