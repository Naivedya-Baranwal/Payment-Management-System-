import React, { useState, useEffect } from 'react';
import '../StyleAdmin/ListPaymentsAdmin.css';

const ListPaymentsAdmin = () => {
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/payments');
                const data = await response.json();

                if (response.ok) {
                    setPayments(data);
                } else {
                    console.error("Error fetching payments:", data.message);
                }
            } catch (error) {
                console.error("Error fetching payments:", error);
            }
        };

        fetchPayments();
    }, []);

    return (
        <div className="list-payments-admin-container">
            <h2 id='LOP'>List of Payments</h2>
            <table>
                <thead>
                    <tr>
                        <th>Payment ID</th>
                        <th>Sender Account ID</th>
                        <th>Receiver Account ID</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.length > 0 ? (
                        payments.map((payment, index) => (
                            <tr key={index}>
                                <td>{payment.PaymentID}</td>
                                <td>{payment.SenderAccountID}</td>
                                <td>{payment.ReceiverAccountID}</td>
                                <td>{payment.PaymentAmount}</td>
                                <td>{payment.Status}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">No payments available</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListPaymentsAdmin;
