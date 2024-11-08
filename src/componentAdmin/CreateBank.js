import React, { useState } from 'react';
import axios from 'axios';
import '../StyleAdmin/CreateBank.css';

const CreateBank = () => {
    const [bankDetails, setBankDetails] = useState({ name: '', branch: '' });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBankDetails({ ...bankDetails, [name]: value });
    };

    const handleCreateBank = async () => {
        try {
            const response = await axios.post('http://localhost:4000/api/createBank', {
                BankName: bankDetails.name,
                BranchName: bankDetails.branch,
            });
            console.log('Bank Created:', response.data);
            setSuccessMessage('Bank created successfully!');
            setError('');
            // Reset form fields
            setBankDetails({ name: '', branch: '' });
        } catch (error) {
            console.error('Error creating bank:', error);
            setError('Failed to create bank. Please try again.');
            setSuccessMessage('');
        }
    };

    return (
        <div className="create-bank-container">
            <h2 style={{textAlign:'center'}}>Create Bank</h2>
            <input
                type="text"
                name="name"
                placeholder="Bank Name"
                value={bankDetails.name}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="branch"
                placeholder="Branch"
                value={bankDetails.branch}
                onChange={handleInputChange}
            />
            <button style={{ width:'95%'}} onClick={handleCreateBank}>Create Bank</button>
            {successMessage && <p style={{ textAlign: 'center', color: '#000000' }} className="success-message">{successMessage}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default CreateBank;

