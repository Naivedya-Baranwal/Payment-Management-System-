import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleUser/UserDashboard.css';

function UserDashboard() {
    return (
        <div className="user-dashboard">
            <h1>User Dashboard</h1>
            <div className="user-dashboard-content">
                <ul>
                    <li><Link to="/user/account-balance">Check Account Balance</Link></li>
                    <li><Link to="/user/account-details">View Account Details</Link></li>
                    <li><Link to="/user/update-account">Update Account</Link></li>
                    <li><Link to="/create-account">Create Account</Link></li>
                    <li><Link to="/account-deletion">Delete Account</Link></li>   
                    <li><Link to="/list-bank">List Banks</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default UserDashboard;
