import React, { useState } from 'react';
import '../StyleUser/AccountDeletion.css';

function AccountDeletion() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleDelete = async () => {
        if (!email) {
            setErrorMessage('Please enter your email address.');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/delete-account', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }), // Include email in the request body
            });

            if (response.ok) {
                setSuccessMessage('Your account has been successfully deleted.');
                setEmail(''); // Clear the input field after deletion
                setErrorMessage(''); // Clear any previous error messages
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message || 'Failed to delete account. Please try again.');
                setSuccessMessage(''); // Clear any previous success messages
            }
        } catch (error) {
            console.error('Error deleting account:', error);
            setErrorMessage('An error occurred. Please try again later.');
            setSuccessMessage(''); // Clear any previous success messages
        }
    };

    return (
        <div className="account-deletion">
            <h1>Delete Account</h1>
            <p>Are you sure you want to delete your account? This action cannot be undone.</p>
            <input 
                type="email" 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
            />
            <button onClick={handleDelete}>Yes, delete my account</button>

            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
    );
}

export default AccountDeletion;
