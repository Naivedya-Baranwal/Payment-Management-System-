import React, { useState } from 'react';
import '../Shared_css/Signup.css'; 

const Signup = () => {
    const [signupDetails, setSignupDetails] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignupDetails({ ...signupDetails, [name]: value });
    };

    const handleSignup = async () => {
        if (signupDetails.password !== signupDetails.confirmPassword) {
            alert('Passwords do not match');
        } else {
            try {
                const response = await fetch('http://localhost:4000/api/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: signupDetails.name,
                        email: signupDetails.email,
                        password: signupDetails.password,
                    }),
                });
    
                const data = await response.json();
                if (response.ok) {
                    alert(data.message);
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error('Signup error:', error);
                alert('An error occurred during signup.');
            }
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Sign Up</h2>
                <input
                    type="text"
                    name="name"
                    value={signupDetails.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                />
                <input
                    type="email"
                    name="email"
                    value={signupDetails.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                />
                <input
                    type="password"
                    name="password"
                    value={signupDetails.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                />
                <input
                    type="password"
                    name="confirmPassword"
                    value={signupDetails.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm Password"
                />
                <button onClick={handleSignup}>Sign Up</button>
            </div>
        </div>
    );
};

export default Signup;
