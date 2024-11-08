import React, { useState } from 'react';
import '../StyleAdmin/GetPaymentDetailsAdmin.css';

const GetPaymentDetailsAdmin = () => {
    const [paymentId, setPaymentId] = useState('');
    const [paymentDetails, setPaymentDetails] = useState(null);

    const handleGetDetails = () => {
        console.log('Get Payment Details:', paymentId);
    };

    return (
        <div className="get-payment-details-container">
            <h2>Get Payment Details</h2>
            <input
                type="text"
                placeholder="Enter Payment ID"
                value={paymentId}
                onChange={(e) => setPaymentId(e.target.value)}
            />
            <button onClick={handleGetDetails}>Get Details</button>

            {paymentDetails && (
                <div className="payment-details">
                    <p>Sender: {paymentDetails.sender}</p>
                    <p>Receiver: {paymentDetails.receiver}</p>
                    <p>Amount: {paymentDetails.amount}</p>
                    <p>Status: {paymentDetails.status}</p>
                </div>
            )}
        </div>
    );
};

export default GetPaymentDetailsAdmin;
