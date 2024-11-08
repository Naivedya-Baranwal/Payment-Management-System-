import React, { useState, useEffect } from 'react';
import '../Shared_css/ListBank.css';

const ListBanks = () => {
    const [banks, setBanks] = useState([]);

    useEffect(() => {
        // Fetch bank list from the server
        const fetchBanks = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/getBanks');
                const data = await response.json();
                setBanks(data);
            } catch (error) {
                console.error('Error fetching banks:', error);
            }
        };

        fetchBanks();
    }, []);

    return (
        <div className="list-banks-container">
            <h2 style={{textAlign:'center'}}>List of Banks</h2>
            <table className="banks-table">
                <thead>
                    <tr>
                        <th>Bank ID</th>
                        <th>Bank Name</th>
                        <th>Branch Name</th>
                    </tr>
                </thead>
                <tbody>
                    {banks.length === 0 ? (
                        <tr>
                            <td colSpan="3">No banks available</td>
                        </tr>
                    ) : (
                        banks.map((bank) => (
                            <tr key={bank.BankID}>
                                <td>{bank.BankID}</td>
                                <td>{bank.BankName}</td>
                                <td>{bank.BranchName}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListBanks;
