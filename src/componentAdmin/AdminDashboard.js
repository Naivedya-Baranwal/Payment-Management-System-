import React from 'react';
import { Link } from 'react-router-dom';
import '../StyleAdmin/AdminDashboard.css';

function AdminDashboard() {
    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <ul>
                <li>
                    <Link to="/admin/create-bank">Create Bank</Link>
                </li>
                <li>
                   <Link to="/create-payment">Create Payment</Link>
                </li>
                <li>
                    <Link to="/admin/list-accounts">List All Accounts</Link>
                </li>
                <li>
                    <Link to="/admin/list-payments">List All Payments</Link>
                </li>
                <li>
                    <Link to="/list-bank">List Banks</Link>
                </li>
            </ul>
        </div>
    );
}

export default AdminDashboard;

