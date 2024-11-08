import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../StyleUser/AccountBalanceUser.css';

const AccountBalanceUser = () => {
    const [accountBalances, setAccountBalances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userEmail = localStorage.getItem('userEmail');
        if (userEmail) {
            fetchAccountBalances(userEmail);
        }
    }, []);

    const fetchAccountBalances = async (email) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/account-details/${email}`);
            setAccountBalances(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching account balances:', error);
            setError('Failed to load account balances.');
            setLoading(false);
        }
    };

    return (
        <div className="account-balance-user-container">
            <h2 style={{textAlign: 'center'}}>Your Account Balances</h2>
            {loading ? (
                <p>Loading account balances...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <table className="account-balance-table">
                    <thead>
                        <tr>
                            <th>Bank Name</th>
                            <th>Branch Name</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountBalances.map((account) => (
                            <tr key={account.AccountID}>
                                <td>{account.BankName}</td>
                                <td>{account.BranchName}</td>
                                <td>{account.Balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AccountBalanceUser;
