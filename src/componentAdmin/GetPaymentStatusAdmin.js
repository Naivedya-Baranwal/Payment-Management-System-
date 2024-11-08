import React, { useState } from 'react';
import '../StyleAdmin/GetPaymentStatusAdmin.css';

const GetPaymentStatusAdmin = () => {
    const [paymentId, setPaymentId] = useState('');
    const [status, setStatus] = useState(null);

    const handleGetStatus = () => {
        console.log('Get Payment Status:', paymentId);
    };

    return (
        <div className="get-payment-status-container">
            <h2>Get Payment Status</h2>
            <input
                type="text"
                placeholder="Enter Payment ID"
                value={paymentId}
                onChange={(e) => setPaymentId(e.target.value)}
            />
            <button onClick={handleGetStatus}>Get Status</button>

            {status && <p>Status: {status}</p>}
        </div>
    );
};

export default GetPaymentStatusAdmin;
