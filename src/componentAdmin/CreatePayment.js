import React, { useState } from 'react';
import '../StyleAdmin/CreatePayment.css';

const CreatePayment = () => {
    const [paymentDetails, setPaymentDetails] = useState({
        senderAccountId: '',
        receiverAccountId: '',
        amount: ''
    });
    const [paymentStatus, setPaymentStatus] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
    };

    const handleCreatePayment = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/create-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentDetails),
            });

            const data = await response.json();

            if (response.ok) {
                setPaymentStatus(`Payment Successful! \n Payment ID: ${data.paymentId}`);
            } else {
                setPaymentStatus(data.message || 'Failed to create payment.');
            }
        } catch (error) {
            console.error('Error creating payment:', error);
            setPaymentStatus('Failed to create payment.');
        }
    };

    return (
        <div className="create-payment-container">
            <div className="payment-box">
                <h2>Create Payment</h2>
                <input
                    type="text"
                    name="senderAccountId"
                    placeholder="Sender Account ID"
                    value={paymentDetails.senderAccountId}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="receiverAccountId"
                    placeholder="Receiver Account ID"
                    value={paymentDetails.receiverAccountId}
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={paymentDetails.amount}
                    onChange={handleInputChange}
                />
                <button onClick={handleCreatePayment}>Send Payment</button>

                {paymentStatus && (
                    <div className="payment-result">
                        <p style={{color:'#2b9b12'}}>{paymentStatus}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatePayment;
