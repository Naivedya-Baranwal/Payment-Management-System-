
import React, { useState } from 'react';
import '../StyleUser/CreateAccount.css';

const CreateAccount = () => {
    const [accountDetails, setAccountDetails] = useState({ email:  '',initialDeposit: '',bankId: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccountDetails({ ...accountDetails, [name]: value });
    };

    const handleCreateAccount = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/createAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    initialDeposit: accountDetails.initialDeposit,
                    bankId: accountDetails.bankId,
                    email: accountDetails.email, // Include the email in the request
                }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log('Account Created:', data);
                alert('Account created successfully!'); // Alert on successful account creation
                setAccountDetails({ initialDeposit: '', bankId: '', email: '' }); // Clear form after success
            } else {
                console.error('Error creating account:', data.message);
                alert('Error creating account: ' + data.message); // Show error message
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating the account.');
        }
    };

    return (
        <div className="create-account-container">
            <h2>Create Account</h2>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={accountDetails.email}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="initialDeposit"
                placeholder="Initial Deposit"
                value={accountDetails.initialDeposit}
                onChange={handleInputChange}
            />
            <input
                type="number"
                name="bankId"
                placeholder="Bank ID"
                value={accountDetails.bankId}
                onChange={handleInputChange}
            />
            <button onClick={handleCreateAccount}>Create Account</button>
        </div>
    );
};

export default CreateAccount;
