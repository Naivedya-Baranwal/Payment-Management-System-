// src/componentAdmin/ListAccountsAdmin.js
import React, { useState, useEffect } from 'react';
import '../StyleAdmin/ListAccountsAdmin.css';

const ListAccountsAdmin = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        // Fetch all accounts from the backend
        fetch('http://localhost:4000/api/accounts/all') 
            .then(res => res.json())
            .then(data => setAccounts(data))
            .catch(error => console.error('Error fetching accounts:', error)); 
    }, []);

    return (
        <div className="list-accounts-admin-container"> 
            <h2 id='LOA'>List of All Accounts</h2> 
            <table>
                <thead>
                    <tr>
                        <th>Account ID</th>
                        <th>Bank ID</th> 
                        <th>Account Email</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.length > 0 ? (
                        accounts.map((account) => ( 
                            <tr key={account.AccountID}> 
                                <td>{account.AccountID}</td>
                                <td>{account.BankID}</td> 
                                <td>{account.email}</td>
                                <td>{account.Balance}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No accounts available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListAccountsAdmin;
