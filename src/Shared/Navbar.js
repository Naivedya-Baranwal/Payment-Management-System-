import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import '../Shared_css/Navbar.css';

function Navbar() {
    const { isLoggedIn, isAdmin, logoutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="left-side">
                {isLoggedIn ? (
                    <button className="logout-button" onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login">
                            <button className="login-button">Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="signup-button">Sign Up</button>
                        </Link>
                    </>
                )}
            </div>
            <div className="right-side">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {isLoggedIn && (
                        <li>
                            {isAdmin ? (
                                <Link to="/admin-dashboard">Admin Dashboard</Link>
                            ) : (
                                <Link to="/user-dashboard">User Dashboard</Link>
                            )}
                        </li>
                    )}
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

