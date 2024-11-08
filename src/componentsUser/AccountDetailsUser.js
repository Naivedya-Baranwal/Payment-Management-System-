import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../StyleUser/AccountDetailsUser.css';

const AccountDetailsUser = () => {
    const [accountDetails, setAccountDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            fetchAccountDetails(userEmail);
        }
    }, []);

    const fetchAccountDetails = async (email) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/account-details/${email}`);
            setAccountDetails(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching account details:', error);
            setError('Failed to load account details.');
            setLoading(false);
        }
    };

    return (
        <div className="account-details-user-container">
            <h2 style={{textAlign:'center'}}>Your Account Details</h2>
            {loading ? (
                <p>Loading account details...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <table className="account-details-table">
                    <thead>
                        <tr>
                            <th>Account ID</th>
                            <th>Bank Name</th>
                            <th>Branch Name</th>
                            <th>Balance</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountDetails.map((account) => (
                            <tr key={account.AccountID}>
                                <td>{account.AccountID}</td>
                                <td>{account.BankName}</td>
                                <td>{account.BranchName}</td>
                                <td>{account.Balance}</td>
                                <td>{account.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AccountDetailsUser;

