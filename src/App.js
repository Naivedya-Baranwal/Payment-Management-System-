import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "./App.css";

// Importing Shared Components
import Navbar from './Shared/Navbar';
import HomePage from './Shared/HomePage';
import Login from './Shared/Login';
import Footer from './Shared/Footer';
import AboutUs from './Shared/AboutUs';
import ContactUs from './Shared/ContactUs';
import ListBanks from './Shared/ListBank';
import Signup from './Shared/Signup';

// Importing Admin Components
import AdminDashboard from './componentAdmin/AdminDashboard';
import CreateBank from './componentAdmin/CreateBank';
import CreatePayment from './componentAdmin/CreatePayment';
import GetPaymentDetailsAdmin from './componentAdmin/GetPaymentDetailsAdmin';
import GetPaymentStatusAdmin from './componentAdmin/GetPaymentStatusAdmin';
import ListAccountsAdmin from './componentAdmin/ListAccountsAdmin';
import ListPaymentsAdmin from './componentAdmin/ListPaymentsAdmin';

// Importing User Components
import UserDashboard from './componentsUser/UserDashboard';
import AccountBalanceUser from './componentsUser/AccountBalanceUser';
import AccountDetailsUser from './componentsUser/AccountDetailsUser';
import UpdateAccountUser from './componentsUser/UpdateAccountUser';
import CreateAccount from './componentsUser/CreateAccount';
import AccountDeletion from './componentsUser/AccountDeletion';

// Import AuthContext
import { AuthProvider } from './AuthContext';

function AppWrapper() {
    const location = useLocation();
    const isHomepage = location.pathname === '/';

    return (
        <div className={`app-wrapper ${isHomepage ? 'homepage-background' : 'default-background'}`}>
            <Navbar />
            <div className="app-container">
                {isHomepage && (
                    <video className="homepage-video" autoPlay loop muted>
                        <source src="/video.mp4" type="video/mp4" />
                    </video>
                )}
                <Routes>
                    {/* Home Page */}
                    <Route path="/" element={<HomePage />} />

                    {/* Shared Routes */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/create-account" element={<CreateAccount />} />
                    <Route path="/signup" element={<Signup />} />

                    {/* Admin Routes */}
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/create-bank" element={<CreateBank />} />
                    <Route path="/create-payment" element={<CreatePayment />} />
                    <Route path="/admin/payment-details" element={<GetPaymentDetailsAdmin />} />
                    <Route path="/admin/payment-status" element={<GetPaymentStatusAdmin />} />
                    <Route path="/admin/list-accounts" element={<ListAccountsAdmin />} />
                    <Route path="/admin/list-payments" element={<ListPaymentsAdmin />} />

                    {/* User Routes */}
                    <Route path="/user-dashboard" element={<UserDashboard />} />
                    <Route path="/user/account-balance" element={<AccountBalanceUser />} />
                    <Route path="/user/account-details" element={<AccountDetailsUser />} />
                    <Route path="/user/update-account" element={<UpdateAccountUser />} />
                    <Route path="/account-deletion" element={<AccountDeletion />} />
                    <Route path="/list-bank" element={<ListBanks />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <Router>
                <AppWrapper />
            </Router>
        </AuthProvider>
    );
}

export default App;
