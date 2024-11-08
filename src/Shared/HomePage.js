// src/components/HomePage.js
import React from 'react';
import "../Shared_css/HomePage.css"

function HomePage() {
    return (
        <div className="homepage-container">
            <div className="header-box">
                <h1>Welcome to the Payment Management System</h1>
            </div>
            <div className="info-box">
                <p>Create an Account: Get started by setting up your account to access all our features</p>
                <p>Seamless Money Transfers: Easily transfer funds between your accounts with just a few clicks.
                </p>
                <p>Inter-Bank Transfers: Move money across different banks without any hassle</p>
            </div>
        </div>
    );
}

export default HomePage;
