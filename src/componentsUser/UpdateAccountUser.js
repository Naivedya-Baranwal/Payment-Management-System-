import React, { useState } from 'react';
import '../StyleUser/UpdateAccountUser.css';

const UpdateAccountUser = () => {
    const [accountInfo, setAccountInfo] = useState({
        oldEmail: '',
        newEmail: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccountInfo({ ...accountInfo, [name]: value });
    };

    const handleUpdate = async () => {
        console.log('Updating Account:', accountInfo);
        
        try {
            const response = await fetch(`http://localhost:4000/api/account/update-email`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    oldEmail: accountInfo.oldEmail,
                    newEmail: accountInfo.newEmail
                })
            });

            if (!response.ok) {
                throw new Error('Failed to update email');
            }

            const result = await response.json();
            console.log('Update successful:', result);
        } catch (error) {
            console.error('Error updating email:', error);
        }
    };

    return (
        <div className="update-account-user-container">
            <h2 style={{textAlign:'center'}}>Update Your Account</h2>
            <input
                type="email"
                name="oldEmail"
                placeholder="Enter Old Email"
                value={accountInfo.oldEmail}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="newEmail"
                placeholder="Enter New Email"
                value={accountInfo.newEmail}
                onChange={handleInputChange}
            />
            <button style={{margin:'0'}} onClick={handleUpdate}>Update Email</button>
        </div>
    );
};

export default UpdateAccountUser;
